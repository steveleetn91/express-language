let fs = require('fs');
module.exports = {
    path : '',
    _lang : 'en/',
    setLang : function(lang){
        this._lang = lang && lang !== "" ? lang + "/" : "en/";
    },
    setPath : function(path = '') {
        this.path = path + '/';
    },
    get : function(json_file = ''){
        try {
            if(this.path === '') {
                throw "You need set path for language";
            }
            let data = fs.readFileSync(this.path + this._lang + json_file + '.json');
            return JSON.parse(data);
        } catch(e){
            console.error(e);
        }
    }
}