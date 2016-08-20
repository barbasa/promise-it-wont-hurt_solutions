'use strict'

first().then(function(val){
        return second(val);
}).then(function(p){
        return p;
}).then(function(v){
        console.log(v);
})


//first().then(second).then(console.log);
