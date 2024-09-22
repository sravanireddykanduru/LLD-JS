let walkDog=(cb)=>{
    setTimeout(()=>{
        console.log("walked the dog");
    },2000)
    cb();
}
let cleanRoom=(cb1)=>{
    setTimeout(()=>{
        console.log("cleaned the room");
    },3000)
    cb1()
}
let removeTrash=(cb2)=>{
    setTimeout(()=>{
        console.log("removed trash");
    },500)
    cb2();
}

walkDog(()=>{
    cleanRoom(()=>{
        removeTrash(()=>console.log("all chores done!"));
    });
});
