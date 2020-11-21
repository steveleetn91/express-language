[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://app.circleci.com/pipelines/github/steveleetn91/express-language?branch=master)


npm install express-language
```
let expressLanguage = require('express-languages/core/ExpressLanguage);
let lang = {};
expressLanguage.setLang('en');
expressLanguage.setPath('./test/lang/');
lang = expressLanguage.get('test');
console.log(lang);
```
