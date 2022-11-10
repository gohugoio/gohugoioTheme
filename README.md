# GoHugo Sites Theme

Theme for gohugo.io sites:
* [https://gohugo.io/](https://gohugo.io/)
* [https://themes.gohugo.io/](https://themes.gohugo.io/)


## Update the sites

This theme is currently in use in two Hugo sites:

* https://github.com/gohugoio/hugoDocs
* https://github.com/gohugoio/hugoThemesSite

To update those to use a new version of the theme, run this from each the above repos and commit the changes:

```
hugo mod get -u github.com/gohugoio/gohugoioTheme
```

Note that in the `hugoDocs` repo, the theme is vendored, so after the above command you need to run this:

```
hugo mod vendor
```

## Tools

### NPM

We use [NPM](https://www.npmjs.com/) for package management The theme's `.gitignore` file should be kept intact to make sure that all files in the `node_modules` folder are not pushed to the repository.

### Webpack 4+

We use Webpack to manage our asset pipeline. Arguably, Webpack is overkill for this use-case, but we're using it here because once it's set up (which we've done for you), it's really easy to use. If you want to use an external script, just add it via Yarn, and reference it in main.js. You'll find instructions in the js/main.js file.

### PostCSS
PostCSS is just CSS. You'll find `postcss.config.js` in the Webpack.config.js file. There you'll find that we're using [`postcss-import`](https://github.com/postcss/postcss-import) which allows us import css files directly from the node_modules folder, [`postcss-cssnext`](https://cssnext.github.io/features/) which gives us the power to use upcoming CSS features today. If you miss Sass you can find PostCss modules for those capabilities, too.


### Tachyons

This theme uses the [Tachyons CSS Library](https://tachyons.io/). It's about 15kb gzipped, highly modular, and each class is atomic so you never have to worry about overwriting your styles. It's a great library for themes because you can make most all the style changes you need right in your layouts.

## How to Use

You'll find the commands to run in `package.json`.

For development, you'll need Node with NPM installed:

```
$ npm install

$ npm start

```
This will process both postcss, fonts, and scripts.

For production, instead of `npm start`, run `npm run build,` which will output smaller versions of your files.


## Get prettier diffs on minified CSS/JS

1. Install js-beautify (npm install -g js-beautify)
2. Add below to your ~/.gitconfig

```
[diff "minjs"]
	textconv = js-beautify
	cachetextconv = true
[diff "mincss"]
	textconv = js-beautify --css
	cachetextconv = true
```
