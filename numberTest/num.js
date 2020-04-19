//function that takes one parameter
function functName(num){
    let myArray = [];
    // loop
    for(let i = 1; i <= num; i++){
        // conditional statements with modulus operator
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
    //return array containing  number from 1 to argument passed
    console.log(myArray);
    return myArray;
}
//call the function and pass 100 and a random number as argument
functName(100);
functName(20);