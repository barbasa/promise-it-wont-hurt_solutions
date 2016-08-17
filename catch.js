'use strict'

var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value);
  return Promise.reject('oh, crap!');
}).catch(function(e) {
  console.log(e);
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});

// var p2 = new Promise(function(resolve, reject) {
//   resolve('Success 2');
// });

// p2.then(function(value) {
//   console.log(value);
//   return Promise.reject('oh, crap 2!');
// }).then(function(){
//   console.log('after a catch the chain is restored');
// }, function () {
//   console.log('Not catching!!');
// });
