# Notes to Cole Editing This 

- `hugo.toml` exposes a lot of the modifications, try to change things there first
- `static/` objects in here will be processed by the site, can add files/images and reference to them. 
- `content/` holds the different markdown files that will be included in the different tabs in header. The folders within `content/` determine the different header tabs. 
- `data/` can hold files that can be loaded in templates, or something. 
- `i18n/` not needed (for multilingual things)
- `public/` is the compiled website that gets deployed, don't edit
- `layouts/` custom layouts can be added to override the theme layouts, these take precedent over the theme.

Most of the time, I'll modify `content/`, `layouts/`, `static/`, or `hugo.toml`.   