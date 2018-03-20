const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const pascalCase = require('pascal-case');
const pkg = require('./package');

const now = new Date();
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) ${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

module.exports = {
  input: 'src/index.vue',
  output: [
    {
      banner,
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      name: pascalCase(pkg.name),
      globals: {
        'feather-icons': 'feather',
        vue: 'Vue',
      },
    },
    {
      banner,
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs',
    },
    {
      banner,
      file: `dist/${pkg.name}.esm.js`,
      format: 'es',
    },
  ],
  external: ['vue', 'feather-icons'],
  plugins: [
    nodeResolve(),
    commonjs(),
    vue({
      css: true,
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
};
