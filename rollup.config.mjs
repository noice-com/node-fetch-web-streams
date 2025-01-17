import { builtinModules, createRequire } from 'module';

const require = createRequire(import.meta.url);
const { dependencies } = require('./package.json');

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.cjs',
    format: 'cjs',
    esModule: false,
    interop: false,
    sourcemap: true,
    preferConst: true,
    exports: 'named',
    // https://github.com/rollup/rollup/issues/1961#issuecomment-534977678
    intro: 'exports = module.exports = fetch;'
  },
  external: [...builtinModules, ...Object.keys(dependencies)]
};