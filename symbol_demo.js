const symbol = Symbol()

const obj = {
    [symbol]: 'hello world'
}

obj;
// Symbols do not set as keys on object
console.log(Object.getOwnPropertyNames(obj));

console.log(Object.keys(obj));

console.log(Object.getOwnPropertySymbols(obj))

const firstSymbol = Object.getOwnPropertySymbols(obj)[0]

console.log(symbol === firstSymbol);

const symbolA = Symbol.for('My key');
const symbolB = Symbol.for('My key');

console.log(symbolA === symbolB);


const capsSplitter = {
    [Symbol.split] (string) {
        return string
        .split(' ')
        .map(s => s.toUpperCase());
    }
}

const message = 'Manali Matkar';
const splits = message.split(capsSplitter);
splits;

const obj1 = {
    [Symbol('what is up')] () {
        console.log('yo');
    }
}
 
console.log(obj1);

