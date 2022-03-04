# My Digital Garden

## Pre-processing script
- Selective publishing
  - `published: true` in frontmatter
  - All content after %%ENDNOTE%% is ignored
- Copy over images used in notes and add proper links to them in the note contents
- Update notes frontmatter with tags in the note contents
- Add created and updated dates in frontmatter


## Enhancements to Simply Jekyll
- A "notes" collection for... notes
- Use tags from notes and posts collections
- Add an "updated" date to notes and posts
- Handle wikilinks (and aliases) from Obsidian
- Inline transclusion
- `((...))` brackets for side and margin notes to avoid accidentally creating links in Obsidian.

## To do

- [ ] Fix Related.html
- [ ] Handle `[[...#header]]` wikilinks
- [ ] Handle `[[...#header|alias]]` wikilinks
- [ ] Distinuish between internal and external links
