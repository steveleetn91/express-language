let express = require('express');
let app = express();
let helper = require('./core/ExpressLanguage');
let lang = {};
helper.setLang('en');
helper.setPath('./test/lang/');
lang = helper.get('test');
console.log(lang);
app.get('/',function(req,res){
    res.send(lang.name);
});
app.listen(4100);