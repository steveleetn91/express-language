npm install express-language
```
let expressLanguage = require('express-language/core/ExpressLanguage);
let lang = {};
expressLanguage.setLang('en');
expressLanguage.setPath('./test/lang/');
lang = expressLanguage.get('test');
console.log(lang);
```