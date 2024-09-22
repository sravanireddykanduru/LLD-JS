function promiseSum(a, b) {
    // Write Code Here =============
    return new Promise((resolve,reject)=>{
        if(a>0&&b>0){
            resolve(a+b);
        }else{
            reject('Both numbers must be positive')
        }

    })
}

promiseSum(3,5)
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})
