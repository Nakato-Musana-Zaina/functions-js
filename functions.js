//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order.

function birdReverse(bird){
    let birds = bird.map(str=>[...str].reverse().join(""))
    console.log(birdReverse)
}
birdReverse(["hen","turkey","duck","chicken"])

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function poitives(array, index) {
    const element = array[index];
   
    if (element > 0) {
       return element + " is positive";
    } else if (element < 0) {
       return element + " is negative";
    } else {
       return element + " is zero";
    }
}
let element = [1,3,4,5,-3,-4,-5];
console.log(positives(element))


//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function salary(workers) {
    return workers.sort((a, b) => a.salaries - b.salaries);
   }

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function product(num) {
    num.forEach((num) => {
       console.log(num * 2);
    });
}
product([8,9,3,6])

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function arrays(arr) {
    const fourNums = arr.slice(0, 4).map(num => num * 8);
    const twoNums = arr.slice(-2).map(num => num + 5);
    const newValues = fourNums.concat(twoNums);
        console.log(newValues);
   }
   
   arrays([5,8,2,9,5,1]);


