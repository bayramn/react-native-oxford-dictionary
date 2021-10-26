const fetch = require("node-fetch");
var OxfordDictionary = function(obj) {
    this.config = {
        app_id : obj.app_id,
        app_key : obj.app_key,
        source_lang: obj.source_lang || 'en-us'
    };
};
// GET /entries/{source_lang}/{word_id}
// GET /entries/{source_lang}/{word_id}/regions={region}
// GET /entries/{source_lang}/{word_id}/{filters}
 const path ='https://od-api.oxforddictionaries.com:443/api/v2/';
OxfordDictionary.prototype.find = async function(props) {
    const url =path + `entries/${this.config.source_lang}/` +  String(props);
    var options = new OptionObj(url, this.config.app_id, this.config.app_key);
    return buildRequest(options, url);;
} // .find

//GET /entries/{source_lang}/{word_id}/definitions
OxfordDictionary.prototype.definitions = function(props) {
    const url =path + `entries/${this.config.source_lang}/` + String(props) + '?fields=definitions';
    var options = new OptionObj(url, this.config.app_id, this.config.app_key);
    return buildRequest(options, url);
} // .definitions

// GET /entries/{source_lang}/{word_id}/pronunciations
OxfordDictionary.prototype.pronunciations = function(props) {
    const url =path + `entries/${this.config.source_lang}/` + String(props) + '?fields=pronunciations';
    var options = new OptionObj(url, this.config.app_id, this.config.app_key);
    return buildRequest(options, url);
} // .pronunciations

// GET /entries/{source_lang}/{word_id}/examples
OxfordDictionary.prototype.examples = function(props) {
    const url =path + `entries/${this.config.source_lang}/` + String(props) + '?fields=examples';
    var options = new OptionObj(url, this.config.app_id, this.config.app_key);
    return buildRequest(options, url);
} // .examples


// GET /entries/{source_lang}/{word_id}/synonyms
OxfordDictionary.prototype.synonyms = function(props) {
    const url =path + `thesaurus/${this.config.source_lang}/` + String(props) + '?fields=synonyms';
    var options = new OptionObj(url, this.config.app_id, this.config.app_key);
    return buildRequest(options, url);
} // .synonyms

// GET /entries/{source_lang}/{word_id}/antonyms
OxfordDictionary.prototype.antonyms = function(props) {
    const url =path + `thesaurus/${this.config.source_lang}/` + String(props) + '?fields=antonyms';
    var options = new OptionObj(url, this.config.app_id, this.config.app_key);
    return buildRequest(options, url);
} // .antonyms


// GET /entries/{source_lang}/{word_id}/inflections
OxfordDictionary.prototype.inflections = function(props) {
    const url =path + `inflections/${this.config.source_lang}/` + String(props);
    var options = new OptionObj(url, this.config.app_id, this.config.app_key);
    return buildRequest(options, url);
} // .inflections


// GET /entries/{source_lang}/{word_id}/sentences
OxfordDictionary.prototype.sentences = function(props) {
    const url =path + `sentences/${this.config.source_lang}/` + String(props);
    var options = new OptionObj(url, this.config.app_id, this.config.app_key);
    return buildRequest(options, url);
} // .sentences


var buildRequest = function(options, path) {
   // var url = 'https://od-api.oxforddictionaries.com:443/api/v2/entries/en-us/';
    return fetch(path, options).then((res) => res.json())
        .catch(err => console.log(err));
}; // end buildRequest

// Constructor Function for Option Objects
function OptionObj(path, app_id, app_key) {
    var options = {
        //host :  'od-api.oxforddictionaries.com',
        //port : 443,
       // path : path,
       // method : 'GET',
        headers : {
            //"Accept": "application/json",
            "app_id": app_id,
            "app_key": app_key
            }
        };
    return options;
} // end OptionObj

module.exports = OxfordDictionary;