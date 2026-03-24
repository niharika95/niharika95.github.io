# Image Management Guidelines

To keep the application structured and easy to maintain, all images and visual assets follow a strict folder hierarchy within the `public/images/` directory.

## Core Principles

1. **No nested `src/assets/images/` imports.** 
   To maintain cleanly separated static assets and avoid massive relative import chains (e.g., `../../../assets/img.png`), all image assets should be stored centrally in `public/images/`.
   
2. **Predictable Paths.** 
   When adding an image to a component, simply use the absolute path starting with `/images/...`. You do not need to `import img from ...` anymore. 
   **Example:** `<img src="/images/projects/svaasthya/hero.png" alt="Svaasthya Hero" />`

## Folder Structure

* **`/public/images/home/`**
  Stores all images exclusively used on the Home and About pages.
* **`/public/images/projects/<project-name>/`**
  Each case study or project gets its own dedicate subfolder. (e.g., `ramen-nagi`, `femhealth`, `intelligent-campaign-builder-overhaul`). All screenshots and wireframes for that project belong here.
* **`/public/images/common/`**
  Stores recurring global assets like tooling icons, patterns, and placeholder symbols.

## Adding a New Project
1. Create a new folder in `public/images/projects/<your-new-project>`.
2. Add all your assets there.
3. In your React component, reference those assets as `src="/images/projects/<your-new-project>/image-name.png"`.

*This guide ensures maximum transparency for asset storage and simplifies build processes.*
