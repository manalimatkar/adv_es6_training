function* myGen () {
    console.log('a');
    yield 1;
    // return;  User return to stop generator and return
    //iterator will execute code only till first yield when next method is called 
    // it will pause here
    console.log('b');
    yield 2;
    console.log('c');
    yield 3;
}

const iter = myGen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// Generator as object property

const obj = {
    * myGenerator () {
        yield* [1,2,3]
        yield 4;
        yield 'hello';
    }
}

const itter = obj.myGenerator();
console.log(itter.next());
console.log(itter.next());
console.log(itter.next());
console.log(itter.next());
console.log(itter.next());


// Use spread operator
const obj2 = {
    * myGenerator () {
        yield* [1,2,3]
        yield 4;
        yield 'hello';
    }
}

const itter2 = obj2.myGenerator();
console.log([...itter2]);
