# Compile JavaScript with Babel & Webpack

- Creating a development workflow to compile JavaScript
- Compile JavaScript down to browser-runnable code (ES5)
- Compiling ES2015, ES2016, & ES2017
- Compiling Async/Await with Webpack & Babel
- Setting up Webpack Dev Server



## Webpack

- Webpack is a module bundler which is used to take modules with dependencies and generate static assets from them.
- Webpack allows you to use npm modules or your own modules and it compiles them down to static assets, so that you can run it in the browser without the need of a Node server.



## Babel

- Babel is a compiler that takes features from the latest versions of JavaScript or ECMAScript and bring them down to ES5 (old version).


## Presets

- When we setup Webpack to work with Babel, we need to use a preset.
- Presets are basically plug-ins. (e.g.: env, es2015, es2016, es2017)
- We use 'env' preset.



## Getting Started

1. Open intergrated terminal on VSCode.

2. Run `npm init` & press `Enter` until `package.json` file is created.

3. Install dependencies:
    - `npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-env`

4. Create a config file for Webpack
    - `webpack.config.js`

5. Add a script to package.json file.
    - `"build": "webpack"`

6. Create `src/app.js` file.

7. Compile code in `src/app.js` file.
    - Run `npm run build`

8. Start Webpack Dev Server by adding following line to `scripts` in `package.json` file:
  -  `"start": "webpack serve --open"`
  - Run `npm start`