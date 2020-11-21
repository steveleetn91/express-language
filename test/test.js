let testJSON = require('./lang/en/test.json');
let helper = require('../core/ExpressLanguage');
let lang = {};
helper.setLang('en');
helper.setPath('./test/lang');
lang = helper.get('test');
let assert = require('assert');
describe('#Unit Testing Express Language', function() {
    it('Testing set path', function() {
        assert.equal(helper.path, './test/lang/');
      });
      it('Testing set lang type', function() {
        assert.equal(helper._lang, 'en/');
      });  
    it('Testing value is correct', function() {
      assert.equal(lang.name, testJSON.name);
    });
    it('Testing change language type', function() {
        helper.setLang('vi');
        assert.equal(helper._lang, "vi/");
      });
  });
