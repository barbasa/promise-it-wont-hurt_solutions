'use strict'

var promise = new Promise(function(fulfill, reject){
        fulfill('PROMISE VALUE');
        
});

function onFullfill(res) {
    console.log(res);
}

function onReject(err) {
    console.log(err.message);
}

promise.then(onFullfill, onReject);

console.log('MAIN PROGRAM');

// // A
// setTimeout( function(){
//     // C
// }, 1000 );
// // B

// Do A, then set up a timeout to wait 1,000 milliseconds, then once that fires, do C." How close was your rendition?

// It is more: Do A, setup the timeout for 1,000 milliseconds, then do B, then after the timeout fires, do C." That's more accurate than the first version



// https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch2.md
