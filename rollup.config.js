import pkg from './package.json';
export default {
  input: './index.js', // our source file
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs'
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {})
  ],
};