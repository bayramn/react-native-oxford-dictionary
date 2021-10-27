# react-native-oxford-dictionary
React Native node module wrapper for Oxford Dictionary [API](https://developer.oxforddictionaries.com/). Inspired by [oxford-dictionary](https://www.npmjs.com/package/oxford-dictionary)

# Install:
```shell
    npm install react-native-oxford-dictionary
```

# Setup:
```javascript
  const Dictionary = require("react-native-oxford-dictionary");
  
  const config = {
    app_id : "YOUR_OXFORD_ACCOUNT_APP_ID",
    app_key : "YOUR_OXFORD_ACCOUNT_APP_KEY",
    source_lang : "en-us" // default: en-us
  };
  
  const dict = new Dictionary(config);
```

# Usage:
```javascript
  const define = dict.find("cool");

  define.then((res) => {
      // stringify JSON object to see full structure in console log
      console.log(JSON.stringify(res, null, 4));
  },
  (err) => {
      console.log(err);
  });
```

# Methods:
Useful methods. 

## .find
`.find` retrieves available dictionary entries for a given word and language.
```javascript
  const define = dict.find("cool");
```
## .definitions
`.definitions` retrieves available dictionary entries for given word and language and returns the definitions.
```javascript
  const define = dict.definitions("cool");
```
## .inflections
`.inflections` retrieves available lemmas for a given inflected wordform.
```javascript
  const define = dict.inflections("cool");
```
## .pronunciations
`.pronunciations` retrieves available dictionary entries for given word and language and returns the pronunciation.
```javascript
  const define = dict.pronunciations("cool");
```
## .examples
`.examples` retrieves available dictionary entries for given word and language and returns only examples.
```javascript
  const define = dict.examples("cool");
```
## .synonyms
`.synonyms` retrieves available synonyms for a given word and language.
```javascript
  const define = dict.synonyms("cool");
```
## .antonyms
`.antonyms` retrieves available antonyms for a given word and language.
```javascript
  const define = dict.antonyms("cool");
```
## .sentences
`.sentences` retrieves list of sentences and list of senses (English language only).
```javascript
  const define = dict.sentences("cool");
```

