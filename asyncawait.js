function walkDog(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const d=Math.random()
        if(d>0.5){
            resolve('walked the dog')
        }else{
            reject('did not walked the dog')
        }
    },2000)
    })
}

async function dD(){
    try{
    const D=await walkDog();
    console.log(D)
    }
    catch{
        console.error('error')
    }
}
dD();