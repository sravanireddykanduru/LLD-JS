function walkDog(){
    setTimeout(()=>{
        return new Promise((res,rej)=>{
            res("walked the dog")
        })
    },1000)
}

function cleanRoom(){
    setTimeout(()=>{
        return new Promise((res,rej)=>{
           res("cleaned the room");
        })
    },1000);
};
function removeTrash(){
    setTimeout(()=>{
       return new Promise((res,rej)=>{
        res("removed trash")
       })
    },1000)
}

walkDog().then(value=>{console.log(value);return cleanRoom()})
         .then(value=>{;console.log(value);return removeTrash()})
         .then(value=>{console.log(value); console.log("all chores done!")})

// walkDog().then((value)=>{
//     return cleanRoom(value)

// }).then((value)=>{
//     return removeTrash(value)
// }).then((value)=>{
//     console.log("all works done!")
// })