````markdown
# Installing Node.js and npm

This guide will help you set up **Node.js** and **npm** so you can run this project.

---

## What are Node.js and npm?

- **Node.js**: Lets you run JavaScript on your computer (outside a browser).  
- **npm**: Node Package Manager, lets you install extra code packages your project needs.

---

## Installing on Linux (Ubuntu/Debian)

Open a terminal and run:

```bash
sudo apt update
sudo apt install nodejs npm
````

Check that they are installed:

```bash
node -v
npm -v
```

---

## Installing on Windows

1. Go to the [Node.js official website](https://nodejs.org/)
2. Download the **LTS (Long-Term Support)** version for Windows
3. Run the installer

   * Make sure the option **"Install npm package manager"** is checked
   * You can leave other options as default
4. Open **Command Prompt** or **PowerShell** and check the installation:

```cmd
node -v
npm -v
```

You should see version numbers printed. ✅

---

## Starting the project

Once Node.js and npm are installed, open a terminal (Linux) or Command Prompt/PowerShell (Windows) in the project folder and run:

```bash
# Install project dependencies
npm install

# Start the project
npm gulp
```

Your project should now be running! 🎉

