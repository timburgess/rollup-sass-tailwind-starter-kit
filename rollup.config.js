import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  // input: 'src/main.js',
  // output: {
  //   file: 'public/bundle.js',
  //   format: 'iife', // immediately-invoked function expression — suitable for <script> tags
  //   sourcemap: true,
  // },
  input: 'entry.js',
  output: {
    file: 'dist/bundle.js',
  },
  plugins: [
    resolve(), // tells Rollup how to find pkgs in node_modules
    scss(), // will output compiled styles to bundle.css
    // production && terser() // minify, but only in production
  ],
}
