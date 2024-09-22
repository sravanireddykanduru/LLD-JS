const ele=document.querySelector('#myId')

ele.classList.add('highlight');
ele.classList.remove('content');
if(ele.classList.contains('visible')){
    console.log('contains visible class');
}else{
    console.log('does not contain visible class');
}