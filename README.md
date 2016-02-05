# as-promise
A utility method package to turn node-style callback driven functions or thunks into promises return functions. Although originally written for native ES6 promises, can work with any promise implementation in the global namespace.
 
## Example
 
### denodeify 
 Getting full paths for files and sub -directories from a given path.
 ``` javascript
 var denodeify = require('as-promise').denodeify,
    fs = require('fs'),
    path = require('path');
 
 var somePath = '.';
 
 denodeify(fs.readdir, fs)(somePath)
    .then((paths) => paths.map((fileName) => path.join(somePath, fileName)))
    .then((paths) => console.log(paths))
    .catch((err) => console.error(err))
    .then(() => process.exit());    
 ```
 
