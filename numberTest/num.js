
function functName(num){
    let myArray = [];
    for(let i = 1; i <= num; i++){
    
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
            myArray.push("yu-gi-oh");
        }else if (i % 2 === 0 && i % 3 === 0){
            myArray.push("yu-gi");
        }else if(i % 2 === 0 && i % 5 === 0){
            myArray.push("yu-oh");
        }else if (i % 3 === 0 && i % 5 === 0){
            myArray.push("gi-oh");
        }else if (i % 2 === 0){
            myArray.push("yu");
        }else if (i % 3 === 0){
            myArray.push("gi");
        }else if (i % 5 === 0){
            myArray.push("oh");
        }else{
            myArray.push(i);
        }
    }
    console.log(myArray);
    return myArray;
}
functName(100);
functName(20);