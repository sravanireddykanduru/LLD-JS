const fs= require('fs');
console.log("before")
let data1=fs.readFileSync('f1.txt');
console.log('contents of file', data1);
console.log("after")


const fs1=require('fs');
console.log('before');
let data2=fs1.readFile('f1.txt',(err,data2)=>{
    if(err){
        console.log('error');
    }else{
        console.log('contents of file:',data2)
    }
});

console.log('after');