const arr = [1];
var [amt, fee = 10] = arr;
arr;
fee;

const obj = {
    isOn: true,
    amount: 10, 
}

var {
    isOn: isServiceOn,
    amount = 100
} = obj;

isServiceOn;
amount

//Exercise

const [first, , third] = 'hello sweet world'.split(' ');
console.log(first, third);

const {
    name,
    age,
    gender = 'm',
    hairColor: color
} = {
    name: 'bob',
    age: 20,
    hairColor: 'blue'
}
console.log(name, age, gender, color);
