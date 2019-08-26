// module.exports = {
//   presets: [
//     '@vue/app'
//   ]
// }


// babel.config.js
module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ]
    }]
  ]
}