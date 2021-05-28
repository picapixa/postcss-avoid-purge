# PostCSS Avoid Purge

[PostCSS] plugin that marks the stylesheet as purged and can no longer be purged further.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    /* Input example */
}
```

```css
/* ! purgecss start ignore */
.foo {
  /* Output example */
}
/* ! purgecss end ignore */
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-avoid-purge
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss'),
+   require('postcss-avoid-purge'),
    require('autoprefixer')
  ]
}
```

Make sure that the plugin is placed right after the postcss-purgecss library.

[official docs]: https://github.com/postcss/postcss#usage
