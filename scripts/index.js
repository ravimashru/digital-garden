const fs = require("fs");
const util = require("util");
const path = require("path");
const readdir = util.promisify(fs.readdir);
const unlink = util.promisify(fs.unlink);

const glob = require("glob");
const matter = require("gray-matter");
const slugify = require("slugify");

async function run() {
  // Step 1: Clear the _notes folder
  const files = await readdir("_notes");
  const unlinkPromises = files.map((fileName) => unlink(`_notes/${fileName}`));
  await Promise.all(unlinkPromises);

  // Step 2: Get all files from Obsidian vault that have frontmatter - publish: true
  // const OBSIDIAN_VAULT_PATH = path.join("C:\\Users\\rmashru\\iCloudDrive\\iCloud~md~obsidian\\zettelkasten");
  const OBSIDIAN_VAULT_PATH = path.join("/Users/ravimashru/Library/Mobile Documents/iCloud~md~obsidian/Documents/zettelkasten");
  const MEDIA_FOLDER = "Media";

  const vaultFiles = glob.sync("**/*", { cwd: OBSIDIAN_VAULT_PATH, nodir: true });
  
  const markdownFilePaths = vaultFiles.filter(fileName => fileName.endsWith(".md"));
  
  const markdownFiles = markdownFilePaths
                          .map(filePath => ({filePath, matter: matter.read(path.join(OBSIDIAN_VAULT_PATH, filePath))}))
                          .filter(file => file.matter.data.publish);
  
  /**
   * Step 3: Process note contents
   *
   * - Remove part of note that shouldn't be published (e.g. %%ENDNOTE%% comment)
   * - Transform inline tags to proper links, add them to frontmatter.
   * - Handle images
   *      - Copy images used to assets/img folder
   *      - Transform ![[...]] to <img src="..." />
   */

  const processedMarkdownFiles = markdownFiles.map(file => {
    file.matter.content = file.matter.content.split("%%ENDNOTE%%")[0];

    const documentTags = new Set(file.matter.data.tags);
    const contentsWithoutCodeAndLinks = file.matter.content
      .replaceAll(/`.*`/g, "")
      .replaceAll(/```.*```/g, "")
      .replaceAll(/[.*](.*)/g, "");
    const inlineTags = new Set(Array.from(contentsWithoutCodeAndLinks.matchAll(/\B#([a-z-_/])+/g)).map(e => e[0]));
    for (const match of inlineTags) {
      file.matter.content = file.matter.content.replaceAll(match, `<a href="/tags/${match}" class="tag">${match}</a>`);
      documentTags.add(match.substring(1));
    }

    if (documentTags.size > 0) {
      file.matter.data.tags = Array.from(documentTags);
    }

    const images = new Set(Array.from(file.matter.content.matchAll(/!(\[\[.*\]\])/g)).map(e => e[0]));
    for (const match of images) {
      const imageName = match.substring(3, match.length-2);
      const imagePath = path.join(OBSIDIAN_VAULT_PATH, MEDIA_FOLDER, imageName);
      if (fs.existsSync(imagePath)) { 
        fs.copyFileSync(imagePath, path.join("assets", "img", imageName));
        file.matter.content = file.matter.content.replaceAll(match, `<img src="/assets/img/${imageName}" />`);
      }
    }

    // Delete SRS information
    delete file.matter.data["sr-due"];
    delete file.matter.data["sr-interval"];
    delete file.matter.data["sr-ease"];

    // Escape pipe character from wikilink aliases
    const wikilinks = file.matter.content.matchAll(/\[\[.*\]\]/g);
    for (const link of wikilinks) {
      file.matter.content = file.matter.content.replaceAll(link[0], link[0].replace('|', '\\|'));
    }

    const fileName = file.filePath.split("/").pop();
    const fileNameWithoutExtension = fileName.split(".")[0];
    file.matter.data.fileName = fileNameWithoutExtension;

    return file;
  });

  /**
   * Step 4: Write processed notes to _notes folder
   * - File name: created date (default if not specified?) + slug (from title or slug frontmatter)
   */
  processedMarkdownFiles.forEach(file => {
    const createdDate = file.matter.data.created.toISOString().split("T")[0];
    file.matter.data.created = createdDate
    if (file.matter.data.updated) {
      file.matter.data.updated = file.matter.data.updated.toISOString().split("T")[0];
    } else {
      file.matter.data.updated = file.matter.data.created;
    }

    const slug = slugify(file.matter.data.slug || file.matter.data.title);
    const fileName = createdDate + "-" + slug.toLowerCase() + ".md";
    
    fs.writeFileSync(path.join("_notes", fileName), matter.stringify(file.matter));

  });
}

run()
  .then(() => console.log("Completed!"))
  .catch((err) => console.error(err));
