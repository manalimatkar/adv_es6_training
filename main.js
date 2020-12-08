// ESM syntax is supported.
// import {
//     add as myAddFunc,
//     substract as mySubsFunc
// } from './add';

import * as myLib from './add';

const value = myLib.add(1,3);

const subsVal = myLib.substract(3,2);

const myMulti = myLib.multiply(4,6);

console.log(value);

console.log(subsVal);

console.log(myMulti);

console.log(myLib);

