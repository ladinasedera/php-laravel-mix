## Stand-alone php project with laravel mix and vuejs

### About

This is a sample stand-alone php project with laravel-mix using [PHP](php.net) & [VueJS 2](https://vuejs.org) and [Laravel Mix](https://laravel-mix.com) build with [YARN](https://yarnpkg.com) or [NPM](https://www.npmjs.com)

### Requirements 


- Required :
You need to have a basic understanding of laravel-mix, vuejs and vue router.
- Optinal : Understanding [sass](https://sass-lang.com/documentation), because you can use a simple css.


### Installation

Just run the below command and enjoy!

```
#yarn
yarn install

#or npm
npm install
```

### Configuration

- DotEnv : we use .env for app configuration, follow this step : 
  - create a new copy of .env.example and rename it to .env
  - change the MIX_APP_PATH to your app path(_make sur to include all subdirectory path, if the app is in subdirectory_)
- Vue-router:
  - Server configuration refer to this : [https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)
  
### Compile

**Important:**
Please, if you are new with laravel-mix, see [laravel mix docs](https://laravel-mix.com/docs) more info.

Command to run mix build:

```
#yarn
yarn mix

#or npx
npx mix
```

### Scripts

**Important:** See all the available script at package.json

Run watch-poll (to detect automatically all changes):

```
#yarn
yarn watch-poll

#or npx
npm run watch-poll
```

### Documentation

#### VueJS 

The Progressive JavaScript Framework

Docs : [https://vuejs.org/guide/quick-start.html](https://vuejs.org/guide/quick-start.html)

#### Laravel mix 

An elegant wrapper around Webpack for the 80% use case.

Docs : [https://laravel-mix.com/docs](https://laravel-mix.com/docs)

#### Yarn 

Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

Get Started : [https://yarnpkg.com/getting-started](https://yarnpkg.com/getting-started) 

#### NPM 

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

Get Started : [https://docs.npmjs.com/getting-started](https://docs.npmjs.com/getting-started) 

### Annexe

Be cause it's a php project, so you can your [composer](https://getcomposer.org/) to manage a php dependency.

##### Created with ❤ by [Ladina](https://ladinasedera.github.io) - Full Stack Developer
