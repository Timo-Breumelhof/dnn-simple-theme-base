# dnn-simple-theme-base (work in progress)

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
* `[targetPaths]` can contain one or more target locations

### Build Output

* **Skin files:**
  `[targetPaths]/Skins/[themeName]`
* **Container files:**
  `[targetPaths]/Containers/[themeName]`
* **CSS file:**
  `[targetPaths]/Skins/[themeName]/Skin.css`

---

## Watch Tasks

* **Skin and Container folders**
  When a file is changed or added, all files in the target location are removed and replaced with the updated files.
* **`src/scss` folder**
  SCSS files are compiled into the CSS output file.

---

## How to Use

1. Copy `config.json` to `config-local.json`
2. Update the values in `config-local.json`

   * Set the theme name
   * Add or update `targetPaths`
3. Run the build or watch task
4. Place your **Skin** files in the `skin` folder (`.ascx` / `.cshtml`)
5. Place your **Container** files in the `container` folder (`.ascx` / `.cshtml`)
6. Place your **SCSS** files in the `src/scss` folder

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

If you want next steps, I can:

* Add a **Quick Start (3–5 steps)**
* Include an **example folder structure**
* Or simplify this even further for absolute beginners
