'use strict'

var promise = new Promise(function(fulfill, reject){
            setTimeout(fulfill('FULFILLED!'), 300);
});

function onFullfill(res) {
        console.log(res);
}

function onReject() {
        console.error('Rejected!');
}

promise.then(onFullfill, onReject);
