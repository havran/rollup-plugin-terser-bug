const rollup = require('rollup');
const { terser } = require('rollup-plugin-terser');

// Build app.js.
async function buildAppJs() {
  let inputOptions = {
    input: 'test.js',
    plugins: [
      terser(),
    ],
    context: 'window',
  };

  let outputOptions = {
    file: 'dist-test.js',
    format: 'iife',
    name: 'App'
  };

  const bundle = await rollup.rollup(inputOptions);
  console.log('Build start');
  await bundle.write(outputOptions);
  console.log('Build end');
  await bundle.close();
}

function build() {
  buildAppJs();
}

module.exports = build;
