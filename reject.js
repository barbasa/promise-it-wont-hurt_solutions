'use strict'

var promise = new Promise(function(fulfill, reject){
            setTimeout(reject(new Error('REJECTED!')), 300);
});

function onFullfill(res) {
        console.log(res);
}

function onReject(err) {
        console.log(err.message);
}

promise.then(onFullfill, onReject);
