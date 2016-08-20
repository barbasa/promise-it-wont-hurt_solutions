'use strict'

const inputJson = process.argv[2]

function parsePromised(j) {
    
    var parsedJson
    try {
        parsedJson = JSON.parse(j)
    }
    catch (e) {
        return Promise.reject(e)
    }
    return Promise.resolve(parsedJson)
}

parsePromised(inputJson).then(null,console.log)

// function parsePromised (json) {
//       return new Promise(function (fulfill, reject) {
//         try {
//           fulfill(JSON.parse(json));
//         } catch (e) {
//           reject(e);
//         }
//       });
//     };
    
// parsePromised(process.argv[2]).then(null, console.log)
