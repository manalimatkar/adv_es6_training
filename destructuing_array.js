const nums = [1,2,3,4];

let [a,b,c,d] = nums;

[c,d] = [a,b];

function getConf(){
    return [
        true, 10 , 1, 1,3, 'bob'
    ]
}

const [hasVal, val, ...rest] = getConf();

hasVal;
val;
rest;

var hasVal1 = false;
var val1 = 20;

function setConf([_hasVal, _val]) {
    hasVal1 = _hasVal;
    val1 = _val;
}

setConf([
    true,
    200
])

hasVal1;
val1;