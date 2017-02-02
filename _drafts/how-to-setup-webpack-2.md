---
layout: post
title:  "How to setup webpack 2"
date:   2017-02-1
categories: webpack
comments: true
---

# How To Setup Webpack 2

[Webpack](https://webpack.js.org/) is module bundler for modern web applications. 

- It is a highly configurable and easy to use. 
- Reduces `HTTP` request by bundling all static assets into a single file.
- `Hot reloading` helps us to forget about the good old `gulp` and `grunt` watchers. 

## Steps

1. [Create folder](#step-1---create-a-folder)
1. [Install webpack](#step-2---install-webpack)
1. [Creating webpack config](#step-3---creating-webpack-config)
1. [Run webpack](#step-4---run-webpack)
1. [Webpack development server](#step-5---webpack-development-server)
1. [Run development server](#step-6---run-development-server)
1. [Development & production env](#step-7---dev--prod-environment)
1. [Sourcemap for development & production](#step-8---sourcemap-for-dev--prod)

### Step 1 - Create a folder

Create a folder called ```webpack-2-setup``` and cd into it.

```bash
$ mkdir webpack-2-setup && cd webpack-2-setup
```

### Step 2 - Install webpack

```bash
$ npm install --dev-save webpack@latest webpack-dev-server@latest
```

or do it via [Yarn](https://yarnpkg.com/)

```bash
$ yarn add --dev webpack@latest webpack-dev-server@latest
```

### Step 3 - Creating webpack config

Create a ```webpack.config.js``` file in the root of our directory and let's write some configuration.

```js
var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: '[name].bundle.js',
  },
};

module.exports = config;
```

Create `src/` directory as well. Now lets add [lodash](https://lodash.com) to dependencies in ```package.json``` by.

From now on, I will be using `yarn` to install our dependencies.

```bash
$ yarn add --dev lodash
```

And create a file called `app.js` in `src/` directory.

```js
var _ = require('lodash');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

alert(other); // [1, 2, 3, [4]]
```

### Step 4 - Run webpack

To run webpack in `development mode`, type the following in your terminal.

```bash
$ webpack
```

*Screenshot of development mode*

<img src="/../images/webpack/webpack-dev-server.png" style="max-width: 100%" />

<b>Bundle Size:</b> 544KB

To run webpack in ```production mode```, type the following in your terminal.

```bash
$ webpack -p
```

- <b>-p</b> is for production which uglifies and minifies files.
- <b>app.bundle.js</b> is added to `dist/` directory.

*Screenshot of production mode*

<img src="/../images/webpack/webpack-prod.png" style="max-width: 100%" />

<b>Bundle Size:</b> 72.3KB

### Step 5 - Setup webpack development server

Webpack has its own development server. Let's setup that in ```webpack.config.js``` by adding the following.

```js
var config = {
  devServer: {
    contentBase: __dirname + '/src',
  }
}
```

And add the script ```bundle.js``` file in ```src/index.html``` like below.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Webpack 2 Setup</title>
</head>
<body>
    
  <script src="/app.bundle.js"></script>
</body>
</html>
```

### Step 6 - Run development server

Type the following.

```bash
$ webpack-dev-server
```

Open [http://localhost:8080/](http://localhost:8080/) in your browser. More [configuration details](https://webpack.js.org/configuration/dev-server/)

That's all, basic webpack config is done. 

But what about pre-processor like ```SASS```,  ```Images``` and ```ES6``` support? How to setup that? Let us see.

## Loaders

We are going to set up ```ES6 + Babel``` using a webpack babel loader.

### Step 1 - Install babel loader, core & ES6 preset.

```bash
$ yarn add --dev babel-loader babel-core babel-preset-es2015
```

Now we have to add loader configurations to ```webpack.config.js``` file.

### Step 2 - ES6 loader

```js
module: {
  rules: [
    {
      test: /\.js$/, // Check for all js files
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    }
  ]
}
```

Now, `ES6` syntax is supported, let us check by changing ```app.js``` to ES6.

```js
// importing lodash module
import _ from 'lodash';

const array = [1];
const other = _.concat(array, 2, [3], [[4]]);

alert(other); // [1, 2, 3, [4]]
```

Again run the development server and check.

```bash
$ webpack-dev-server
```

### Step 3 - Install SASS & CSS loader

```bash
$ yarn add --dev css-loader style-loader sass-loader node-sass
```

SASS & CSS loader configuration is below.

```js
module: {
  rules: [{
    test: /\.(sass|scss)$/, // Check for sass or scss file names
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ]
  }]
}
```

After `loader` setup, final steps are setting `environment` and `sourcemaps` for webpack.

### Step 7 - Development & Production environment

In `package.json` file, let's add scripts to run our dev server and production.

```json
"scripts": {
  "start": "webpack-dev-server",
  "build": "NODE_ENV=production webpack -p --config webpack.config.js"
}
```

`NODE_ENV=production` is environment setup for the build.

### Step 8 - Sourcemap for development & production

Now we know when we are running for production or development. Let us use it to set up the sourcemap accordingly.

```js
var config = {
  devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}

module.exports = config;
```

More information on [sourcemaps](http://erikaybar.name/webpack-source-maps-in-chrome/?utm_source=javascriptweekly&utm_medium=email).

## Final

Below contains all the config for webpack from above steps.

```js
var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    filename: '[name].bundle.js',
    publicPath: "/assets",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      {
        test: /\.(sass|scss)$/, // Check for sass or scss file names
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  //To run development server
  devServer: {
    contentBase: __dirname + '/src',
  },

  devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";

  // Can do more here
  // JSUglify plugin
  // Offline plugin
  // Bundle styles seperatly using plugins etc,
}

module.exports = config;
```

Thanks for reading my article.

#### Articles References:

- <a href="https://blog.flennik.com/the-fine-art-of-the-webpack-2-config-dc4d19d7f172#" target="_blank">The Fine Art of the Webpack 2 Config</a>
- <a href="https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling" target="_blank">A Beginners Guide to Webpack 2 and Module Bundling</a>
- <a href="https://github.com/webpack/webpack/tree/master/examples" target="_blank">Webpack examples</a>
