let coinTossPromise= new Promise(function(resolve,reject){
    setTimeout(function() {
        let valueIsHeads=Math.random;
        if(valueIsHeads>0.5){
            resolve('Headswin')
        }else{
            reject('Tailswin')
        }
    }, 500);
})
coinTossPromise
.then(function(result){
    console.log('Result:',result)
})
.catch(function(error){
    console.log('catch result:',error)
})
.finally(function(){
    console.log('toss copleted')
})