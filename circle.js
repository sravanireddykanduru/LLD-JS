function calculatecircumference(radius){
    return 2*Math.PI*radius;
}
function calculatearea(radius){
    return Math.PI*radius*radius;
}
function calculatediameter(radius){
    return 2*radius;
}
function calculate(array,processingFun){
    let result=[]
for(let i=0;i<array.length;i++){
     result.push(processingFun(array[i]));
}
return result}
const circumferencesofcircle = calculate([1,2,3,4,5],calculatecircumference);
console.log('circumferences are',circumferencesofcircle);
const areasofcircle = calculate([1,2,3,4,5],calculatearea);
console.log('areas are',areasofcircle);
const diametersofcircle = calculate([1,2,3,4,5],calculatediameter);
console.log('diameters are',diametersofcircle);