import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'entry.js',
  output: {
    file: 'dist/bundle.js',
  },
  plugins: [
    resolve(), // tells Rollup how to find pkgs in node_modules
    scss(), // will output compiled styles to bundle.css
    production && terser() // minify, but only in production
  ],
}
