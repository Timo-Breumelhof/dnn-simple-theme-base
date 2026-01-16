Perfect! Here’s the **final, fully updated README** ready for GitHub — beginner-friendly, includes multiple DNN targets, the correct `Portals/Default` path, and Skin.css + Skin.min.css instructions.

You can replace your current `README.md` with this.

---

# dnn-simple-theme-base

A simple starting point for building a **DNN theme outside of DNN**.

This project is intended as a **base example** for users with less experience.
It focuses on clarity and simplicity rather than advanced features.

---

## Status

Work in progress / experimental

---

## Goal

* Build a DNN theme in one central location
* Automatically copy the generated files to one or more local DNN installations

This allows you to develop and update your theme without working directly inside a DNN installation.

---

## Technology Used

* Node.js
* Gulp 4

---

## Requirements

* Node.js installed
* Run `npm install`

---

## Description

* Values written as `[token]` are read from the configuration file
* `[targetPaths]` can contain **one or more target locations**
* The build process outputs **both normal and minified CSS** for skins

### Build Output

For each `targetPath`:

* **Skin files:** `[targetPaths]/Skins/[themeName]`

  * `Skin.css` (compiled from SCSS)
  * `Skin.min.css` (minified version)
* **Container files:** `[targetPaths]/Containers/[themeName]`

---

## Watch Tasks

* **Skin and Container folders**
  When a file is changed or added, all files in the target location are removed and replaced with the updated files.
* **`src/scss` folder**
  SCSS files are compiled into `Skin.css` and `Skin.min.css`.

---

## Quick Start (Beginner Friendly)

A. Download the source zip from GitHub.
B. Unzip the folder **outside of any DNN installation**.
C. Copy `config.json` to `config-local.json`

* **Update paths and theme name for your local setup.**
* `targetPaths` can contain **one or more DNN installation skin paths**.

  * Each path should point to the DNN portal’s folder where skins and containers reside:

    ```
    [DNN Site Root]/Portals/Default
    ```
  * This allows the build process to copy the generated files to **multiple DNN installations at once**.
  * Example:

    ```json
    {
      "themeName": "MyTheme",
      "targetPaths": [
        "C:/DNN/Website1/Portals/Default",
        "C:/DNN/Website2/Portals/Default"
      ]
    }
    ```

D. Install dependencies:

```bash
npm install
```

E. Build the theme once:

```bash
gulp
```

F. Start watching for changes (optional, recommended for development):

```bash
gulp watch
```

G. The compiled files (`Skin.css` and `Skin.min.css`) are now in `[targetPaths]/Skins/[themeName]`.
Copy the **entire theme folder** (Skins + Containers) into your DNN installation when ready.

---

## About `config-local.json`

This project uses a `config-local.json` file for local paths and settings.

In this **base example project**, `config-local.json` is **not included in GitHub**.
This is intentional, so different users can use their own local paths without conflicts.

### When you use this as a template

* Copy `config.json` to `config-local.json`
* Adjust the values for your local setup
* Keep `config-local.json` uncommitted

### When this becomes your own theme

Once you start building your **own theme** from this base:

* `config-local.json` becomes part of your project
* It is usually fine to commit this file
* Especially if:

  * It contains no secrets
  * The paths are shared by your team
  * The project is no longer meant as a reusable template

**In short:**

* Template project → do not commit `config-local.json`
* Your own theme → committing it is usually the right choice

---

## Folder Structure Example

```
dnn-simple-theme-base/
│
├─ skin/                # Your Skin files (.ascx, .cshtml)
├─ container/           # Your Container files (.ascx, .cshtml)
├─ src/
│   └─ scss/            # Your SCSS files
├─ config.json          # Template config
├─ config-local.json    # Local config (not in GitHub)
├─ gulpfile.js          # Build and watch tasks
└─ README.md
```

This diagram shows **where to place your files** for the build process to work correctly.

---

## Notes

* The build process generates **both `Skin.css` and `Skin.min.css`** automatically.
* You can copy the **entire theme folder** to **one or multiple DNN installations** depending on your `targetPaths`.
* Recommended workflow for beginners:

  * Edit SCSS → run `gulp` → copy generated files to DNN
