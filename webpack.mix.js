let mix = require('laravel-mix');

mix.js('src/app.js', './public/js')
   .vue()
   .sass('src/css/app.scss', './public/css');

   if (mix.inProduction()) {
      mix.version();
  }