
let mix = require('laravel-mix');

mix.setPublicPath('dist')

mix.js('src/js/index.js', 'dist/js').sourceMaps();
mix.sass('src/scss/index.scss','dist/css').sourceMaps();
mix.browserSync({
    server: 'dist',
    watch: true
});

mix.disableNotifications()

mix.copy('src/index.html','dist')
mix.copy('src/img','dist/img')
