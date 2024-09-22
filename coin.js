let cointoss=new Promise((res,rej)=>{
    const tails= Math.random()<0.5;
    if(tails){
        res('Tailswin')
    }else{
        rej('Headswin')
    }
})

cointoss.then((headsresult)=>{
    console.log('result:',headsresult)
})
.catch((tailsresult)=>{
    console.log('result:',tailsresult)
})