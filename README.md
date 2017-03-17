# raw-brunch

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]

> A Brunch plugins for raw modules

This plugin is needed for requiring raw data in your JavaScript files, like Markdown or just plain text files.

## Install

    npm install --save-dev raw-brunch

## Usage

`raw-brunch` handles files with `raw`, `plain` and `example` extensions as templates:

```js
module.exports = {
  files: {
    // ...
    templates: {joinTo: 'templates.js'}
  }
}
```

Content of these files will be bundled as plain strings into `templates.js` file, so you can require them in your files.

## Options

`raw-brunch` has two simple options:

1. `pattern` — a pattern that matches files (`raw`, `plain`, `example` files as default).
2. `wrapper` — a function that wraps the content of a file.

```js
module.exports = {
  // ...
  plugins: {
    raw: {
      pattern: /\.(raw|plain|example)$/,
      wrapper: content => `module.exports = ${JSON.stringify(content)}`
    }
  }
}
```

## License

MIT © [Denys Dovhan](http://denysdovhan.com)

[npm-url]: https://npmjs.org/package/raw-brunch
[npm-image]: https://img.shields.io/npm/v/raw-brunch.svg?style=flat-square

[travis-url]: https://travis-ci.org/denysdovhan/raw-brunch
[travis-image]: https://img.shields.io/travis/denysdovhan/raw-brunch.svg?style=flat-square

[depstat-url]: https://david-dm.org/denysdovhan/raw-brunch
[depstat-image]: https://david-dm.org/denysdovhan/raw-brunch.svg?style=flat-square
