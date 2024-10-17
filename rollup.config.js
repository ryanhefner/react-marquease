import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const config = {
  input: 'src/index.jsx',
  output: {
    name: pkg.name,
    file: './index.cjs',
    format: 'umd',
    globals: {
      react: 'React',
    },
    banner: `/*! ${pkg.name} !*/`,
    footer: `/* Copyright 2023 - ${new Date().getFullYear()} - ${pkg.author} */`,
  },
  external: ['react'],
  plugins: [
    resolve({ extensions: ['.js', '.jsx'] }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    commonjs(),
    json(),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser())
}

export default config
