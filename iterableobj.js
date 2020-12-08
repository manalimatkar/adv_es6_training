const msg = 'hello there'

console.log(msg[Symbol.iterator]);

for (let char of msg ) {
    console.log(char);
}

const message = 'hello world';

const iter = message[Symbol.iterator]();
iter;

let char = iter.next();

while (char.done === false) {
    console.log(char.value);
    char = iter.next();
}


const codes = {
    [Symbol.iterator] () {
        let curr = 0;
        return {
            next() {
              return {
                  value: Math.random(),
                  done: curr++ > 4
              }  
            }
        }
    }
};

for (let code of codes) {
    code;
}