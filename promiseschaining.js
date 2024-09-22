function cleanRoom(){
    return new Promise((resolve,reject)=>{
        if(Math.random()>0.5){
            resolve("cleaned the room")
        }else{
            reject("haven't cleaned the room")
        }
    })
}

function removeGarbage(){
    return new Promise((resolve,reject)=>{
        if(Math.random()>0.5){
            resolve("removed garbage")
        }else{
            reject("haven't removed garbage")
        }
    })
}

function winchocolate(){
    return new Promise((resolve,reject)=>{
        resolve("won the chocolate")
    })
}

cleanRoom().then((value)=>{
    console.log(value);
    return removeGarbage(value)
})
.then((value1)=>{
    console.log(value1);
    return winchocolate(value1)
})
.then((result)=>{
    console.log("finished",result)
})
.catch(error=>console.log("catch:",error))