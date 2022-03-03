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
  const OBSIDIAN_VAULT_PATH = path.join("C:\\Users\\rmashru\\iCloudDrive\\iCloud~md~obsidian\\zettelkasten");
  const MEDIA_FOLDER = "Media";

  const vaultFiles = glob.sync("**/*", { cwd: OBSIDIAN_VAULT_PATH, nodir: true });
  
  const markdownFilePaths = vaultFiles.filter(fileName => fileName.endsWith(".md"));
  
  const markdownFiles = markdownFilePaths
                          .map(filePath => matter.read(path.join(OBSIDIAN_VAULT_PATH, filePath)))
                          .filter(file => file.data.publish);
  
  /**
   * Step 3: Process note contents
   *
   * - Remove part of note that shouldn't be published (e.g. %%ENDNOTE%% comment)
   * - Transform inline tags to proper links, add them to frontmatter.
   * - Handle images
   *      - Copy images used to assets/img folder
   *      - Transform ![[...]] to <img src="..." />
   * - Handle wiki links
   *      - [[...]]
   *      - [[...|alias]]
   *      - [[...#header]]
   *      - [[...#header|alias]]
   */

  const processedMarkdownFiles = markdownFiles; // TODO: step 3

  /**
   * Step 4: Write processed notes to _notes folder
   * - File name: created date (default if not specified?) + slug (from title or slug frontmatter)
   */
  processedMarkdownFiles.forEach(async file => {
    const createdDate = file.data.created.toISOString().split("T")[0];
    const slug = slugify(file.data.slug || file.data.title);
    const fileName = createdDate + "-" + slug.toLowerCase() + ".md";
    
    fs.writeFileSync(path.join("_notes", fileName), matter.stringify(file));

  });
}

run()
  .then(() => console.log("Completed!"))
  .catch((err) => console.error(err));
