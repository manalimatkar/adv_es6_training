function* fibonacci () {
    let n1 = 0;
    let n2 = 1;
    while(true) {
        let current = n1;
        n1 = n2;
        n2 = current + n1;
        // value passed in next is grabbed here as that the next set value of generator
        let reset = yield current;
        reset;
        if(reset) {
            n1 = 0;
            n2 = 1;
        }
    }
}

const iter = fibonacci();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next(true));
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());