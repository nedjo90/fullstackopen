//variables
console.log("Variables");
const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = 'sometext';
console.log(x, y);
//x = 4;


//arrays
console.log("Arrays");
const t = [1, -1, 3];

t.push(5);
console.table(t);
console.log(t.length);
console.log(t[1]);
t.forEach(x => console.log(x));

const t2 = t.concat();
console.log(t2);

const tmap = t.map(x => x * 2);
console.log(tmap);

const limap = t.map(x => `<li>${x * 2}</li>`);
console.log(limap);

const [first, second, ...rest] = t;
console.log(first, second);
console.log(rest);

//objects
console.log("Objects");

const object1 =
{
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD'
}

const object2 = {
    name: 'fullstack web application development',
    level: 'intermediate studies',
    size: 5
}

const object3 = {
    name : {
        first: 'Dan',
        last: 'Abramov'
    },
    grades: [2,3,5,3],
    department: 'Standford University'
}

console.log(object1.name);
const fieldname = 'age';
console.log(object1[fieldname]);

object1.address = 'Helsinki';
console.log(object1.address);

object1['secret number'] = 1234;
console.log(object1['secret number']);

//functions
console.log("Functions");
const sum = (p1, p2) =>{
    console.log(p1);
    console.log(p2);
    return p1 + p2;
}

const result = sum(2, 3);
console.log(result);

const square = (p) => {
    let res = p * p;
    console.log(`${p} * ${p} = ${res}`);
    return res;
}
square(25);

const tSquared = t.map(x => x * x);
console.log(tSquared);

const prod = (x, y) =>
{
    let res = x * y;
    console.log(`${x} * ${y} = ${res}`);
    return res;
}

prod(5, 6);

const average = (tab) =>
{
    let res = 0;
    let length = tab.length;
    for (const e of tab) {
        res += e;
    }
    res /= length;
    console.log(`Average of ${tab} is ${res}`);
    return res;
}
average(t);
average([10, 50, 100, 80]);

