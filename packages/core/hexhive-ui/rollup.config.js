import { babel } from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true
  },
  plugins: [
    resolve({
      mainFields: ['module', 'main'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: /node_modules/
    }),
    babel({
      babelHelpers: "runtime",      
      exclude: /node_modules/,      
      extensions: [".js", ".ts", ".tsx"],
    })
  ]
};