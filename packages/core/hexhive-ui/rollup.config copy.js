import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json'
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import ts from 'typescript';
import postcss from 'rollup-plugin-postcss'
import nodeGlobals from 'rollup-plugin-node-globals'
import babel from "@rollup/plugin-babel";
import _ from 'lodash';
import rename from 'rollup-plugin-rename';

console.log(pkg.peerDependencies)

export default {
  input: './src/index.tsx',
  // external: ['react', 'react-dom', 'lodash', '@babylonjs/core', 'react-big-calendar', 'style-inject', ...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  output: [
    {
      dir: `dist`,
      format: 'esm',
      sourcemap: true,
      preserveModules: true
    }
  ],
  plugins: [
      postcss(),
    resolve(),
    nodeGlobals(),
    commonjs(),
    json(),
    babel({      babelHelpers: "runtime",      exclude: /node_modules/,      extensions: [".js", ".ts", ".tsx"],    }),
    // babel({
    //     extensions: [".ts", ".tsx"],
    //     babelHelpers: 'runtime',
    //     include: [".ts", ".tsx"].map((ext) => `src/**/*${ext}`),
    //     exclude: ["dist/", "node_modules"]
    // }),
    
    typescript({
      typescript: ts,
      tsconfig: 'tsconfig.json',
      tsconfigDefaults: {
        exclude: [
          '**/*.spec.ts',
          '**/*.test.ts',
          '**/*.stories.ts',
          '**/*.spec.tsx',
          '**/*.test.tsx',
          '**/*.stories.tsx',
          'node_modules',
          'bower_components',
          'jspm_packages',
          'dist',
        ],
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          allowSyntheticDefaultImports: true,
          skipLibCheck: true,
            rootDir: 'src/',
            outDir: 'dist/',
            module: 'esnext',
            target: 'esnext'
        },
      },
    }),
    terser({
      output: {
        comments: false,
      },
    }),
    copy({
      targets: [
        { src: 'LICENSE', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
        {
          src: 'package.json',
          dest: 'dist',
          transform: (content) => {
            const { scripts, devDependencies, husky, release, engines, ...keep } = JSON.parse(
              content.toString()
            );
            return JSON.stringify(keep, null, 2);
          },
        },
      ],
    })
  ],
};
