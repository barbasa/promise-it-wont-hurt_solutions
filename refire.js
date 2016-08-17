'use strict'

var promise = new Promise(function(fulfill, reject){
            fulfill('I FIRED');
                    reject(new Error('I DID NOT FIRE'));
});

function onFullfill(res) {
        console.log(res);
}

function onReject(err) {
        console.log(err.message);
}

promise.then(onFullfill, onReject);
