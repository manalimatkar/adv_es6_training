let config = {};

function getConf() {
    return {
       isOn: true,
       amount: 10,
       servers: {
           a: true,
           b: false
       } 
    }
}

function setConf({isOn, amount}) {
    config = {
        isOn,
        amount
    }
}

const {isOn, amount} = getConf();

isOn;
amount;

setConf({
    isOn: false,
    amount: 200
});

config;

// examples deep obj matching

// example destructure and store values of keys in new property names

var {
    isOn: myIsOn,
    amount: myVal
} = getConf();

myIsOn;
myVal;

// example nested obj destructuring

var {
    servers: {
        b: myserverB
    }
} = getConf();

myserverB;