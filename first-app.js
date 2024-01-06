// const fs = require('fs');

// fs.writeFileSync('hello.txt','hello from sagar')

// console.log("hello world")

// const multi = (a,b) => a*b ;

// console.log(multi(5,6));

// const student = {

//     name: 'sagar sethi',
//     age: 24,
//     roll_no: 39

// }

// console.log(student);

const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'] ;

console.log(fruits.map(fruit => {
    if(fruit === ' ')
    {
        return 'empty string'
    }
    else
    {
        return fruit
    }
}))