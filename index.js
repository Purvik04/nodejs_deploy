// const c = 5699;

// console.log(c);


// const fs = require('fs');

// const {writeFile} = require('fs');

// const text = 'My name is purvik';

// writeFile('./sample.txt',text,()=>{
//     console.log("written done");
// })


// fs.readFile('./sample.txt','utf8', (err,data)=>{
//     if(err) throw err;
//     else console.log(data)
// })




const a = 400;

//object
const b = {

    //arrow fucntion
    averavge: (a, b) => {
        console.log((a + b) / 2);
    },
    
    percentage: function (a,b) {
        console.log(a/b*100);
    }
}

module.exports = b;
