const fetch = require("node-fetch");
var OxfordDictionary = function(obj) {
    this.config = {
        app_id : obj.app_id,
        app_key : obj.app_key,
        source_lang: obj.source_lang || 'en'
    };
};
// GET /entries/{source_lang}/{word_id}
// GET /entries/{source_lang}/{word_id}/regions={region}
// GET /entries/{source_lang}/{word_id}/{filters}
 const path ='https://od-api.oxforddictionaries.com:443/api/v2/entries/en-us/';
OxfordDictionary.prototype.find = function(props) {
   let endpointPath =path + String(props);
    console.log('path:', path);
    var options = new OptionObj(path, this.config.app_id, this.config.app_key);
    return buildRequest(options, endpointPath);  
} // .find

// GET /entries/{source_lang}/{word_id}/pronunciations
// OxfordDictionary.prototype.pronunciations = function(props) {
//     path +=String(props) + '/pronunciations');
//     var options = new OptionObj(path, this.config.app_id, this.config.app_key);
//     return buildRequest(options);
// } // .pronunciations




var buildRequest = function(options) {
    //const url = 'https://od-api.oxforddictionaries.com:443/api/v2/entries/';
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