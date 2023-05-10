# PostCSS Roman Numerals

<img align="right" width="120" height="120" title="PostCSS" src="http://postcss.github.io/postcss/logo.svg">

[PostCSS](https://postcss.org) plugin that allows to use roman numerals in your CSS code.

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

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-roman-numerals
```

**Step 2:** Check your project for existing PostCSS config: `.postcssrc` in the project root, `"postcss"` section in `package.json` or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs](https://github.com/postcss/postcss#usage)
and set this plugin in settings.

**Step 3:** Add the plugin to your PostCSS config:

```diff
{
  "plugins": {
+    "postcss-roman-numerals": {},
    "autoprefixer": {}
  }
}
```

## Contributing

Pull requests are welcome.

## License

MIT &copy; [Azat S.](https://twitter.com/azat_io)
