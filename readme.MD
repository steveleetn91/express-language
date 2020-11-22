[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://app.circleci.com/pipelines/github/steveleetn91/express-language?branch=master)


npm install express-languages
```
let expressLanguage = require('express-languages/core/ExpressLanguage);
let lang = {};
expressLanguage.setLang('en');
expressLanguage.setPath('./test/lang/');
lang = expressLanguage.get('test');
console.log(lang);
```
exammple directory : root/test/lang/en/test.json

test.json
```
{
    "name":"Express Languages"
}
```