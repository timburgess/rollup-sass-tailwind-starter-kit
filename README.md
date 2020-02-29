# rollup-sass-tailwind-starter-kit

Based on rollup-starter-app, this repo contains a bare-bones example of a Rollup build that merges custom .scss and Tailwind base.css into a `bundle.css` for distribution.

*See also https://github.com/rollup/rollup-starter-app*


## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/timburgess/rollup-sass-tailwind-starter-kit
cd rollup-sass-tailwind-starter-kit
npm install
```

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
