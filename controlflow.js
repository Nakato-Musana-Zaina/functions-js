//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function numbers(array){
    let firstnums = array.slice(0, 4).map(item => item * item);
    let lastnums = array.slice(-2).map(item => item + 10);

    let newarr = [firstnums.concat(lastnums)]
    console.log(newarr);
}
numbers([1,2,3, 4, 5, 6, 7, 8,9]);



//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];


function loop(arrNum){
    let i = 0; 
    while (i < arrNum.length) { 
        if (arrNum[i] === arrNum[3]) {
            break;
        }
        console.log(arrNum[i]);
        i++;
    }
};
let arrNum = [1,2,3,4,5,6,7,8,9];



//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruits(array){
    for(let i=0; i < array.length; i++){
        if(array[i] === array[1]){
            continue;
        }
        console.log(array[i]);
    }
}
let fruit= ['apple','plum','banana','strawberries','kiwi']

fruits(fruit);






//Write a function that accepts an array of strings and console.logs each element using a for loop.

function  birds(bird){
    for(let i = 0; i < bird.length; i++){
        console.log(bird[i]);
    }
}
birds(["Hen","Peacock","Ostrich","Parrot"]);




//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. function reverseString(str) {
    function reverse(flower){
        let i =0
        while (i >= 0) {
            reversedflower += flower[i]; 
            i--;
        }
        return reversedflower; 
    }

reverse("Lilies")