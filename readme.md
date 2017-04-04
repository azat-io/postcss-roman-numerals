# PostCSS Roman Numerals

<img align="right" width="110" height="110" title="PostCSS" src="http://postcss.github.io/postcss/logo.svg">

[![Build Status][ci-img]][ci]
[![NPM version][npm-img]][npm]

[PostCSS] plugin that allows to use roman numerals in your CSS code.

## Example

### Input

```css
.app {
    min-height: Cvh;
    max-width: MCCpx;
    padding: XIIpx IXpx;
}

.app__title {
    font-size: IIem;
}

.app__logo {
    width: C%;
}
```

### Output

```css
.app {
    min-height: 100vh;
    max-width: 1200px;
    padding: 12px 9px;
}

.app__title {
    font-size: 2em;
}

.app__logo {
    width: 100%;
}
```

## Usage

```js
postcss([ require('postcss-roman-numerals') ])
```

See [PostCSS] docs for examples for your environment.

## Contributing

Pull requests are welcome.

## License

MIT &copy; [Azat S.](https://twitter.com/azat_io)

[PostCSS]: https://github.com/postcss/postcss
[npm-img]: https://badge.fury.io/js/postcss-roman-numerals.svg
[ci-img]:  https://travis-ci.org/azat-io/postcss-roman-numerals.svg
[npm]:     https://npmjs.com/package/postcss-roman-numerals
[ci]:      https://travis-ci.org/azat-io/postcss-roman-numerals

