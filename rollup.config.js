import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import eslint from '@rollup/plugin-eslint';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    external: ['react', 'marked'],
    output: [
      {
        name: 'wurd',
        file: pkg.browser,
        format: 'umd',
        exports: 'named', // because we export wurd-web as default and React components as named exports
        globals: {
          react: 'React',
          marked: 'marked',
        },
        plugins: [filesize()],
      },
      {
        name: 'wurd',
        file: 'dist/wurd-react.min.js',
        format: 'umd',
        exports: 'named',
        globals: {
          react: 'React',
          marked: 'marked'
        },
        plugins: [terser()],
      }
    ],
    plugins: [
      eslint({
        throwOnError: true
      }),
      resolve(), // so Rollup can find node modules
      commonjs(), // so Rollup can convert node modules to ES modules
      babel({
        // This ensures dependencies are transpiled as well
        exclude: [],
        babelrc: false,
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    external: ['react', 'wurd-web'],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
      }
    ],
    plugins: []
  }
];
