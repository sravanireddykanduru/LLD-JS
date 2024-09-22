const fs=require('fs')


fs.readFile('f1.txt',cb)
function cb(err,data){
    if(err){
        console.log('error');
    }else{
        console.log('contents of file;',data)
    }
}
const allpromises = fs.promises;
// console.log(allpromises)
let promiseReadfile=fs.promises.readFile('f1.txt');
promiseReadfile.then((result)=>{console.log('contents of file using promises:',result)})
.catch((err)=>{console.log(err)})