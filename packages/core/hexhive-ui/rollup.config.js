import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import ts from 'typescript';
import postcss from 'rollup-plugin-postcss'
import babel from "@rollup/plugin-babel";
import _ from 'lodash';
import rename from 'rollup-plugin-rename';

console.log(pkg.peerDependencies)

export default {
  input: './src/index.tsx',
  external: ['react', 'react-dom', 'lodash', 'react-big-ccalendar', 'style-inject', ...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  output: [
    {
      dir: `./dist/`,
      sourcemap: true,
      preserveModules: true
    }
  ],
  plugins: [
      postcss(),
    resolve(),
    commonjs(),
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
            rootDir: 'src/',
            outDir: 'dist/',
            module: 'es6',
            target: 'es5'
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
