//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order.

function birdReverse(bird){
    let birds = bird.map(all=>all.split("").reverse().join(""))
    console.log(birds)
    let sortbirds = birds.sort()
    console.log(sortbirds)
}
birdReverse(["hen","turkey","duck","chicken"])

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function positives(array, index) {
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
console.log(positives(element,6))


// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function payment(workers) {
    return workers.sort((x, y) => x.salary - y.salary);
   }
   const workers =[
    {id:1,name:"Alice", salary:8000},
    {id:2, name:"Bob", salary:60000},
    {id: 3, name:"Charlie", salary:40000}
   ];
   const sortWorkers = payment(workers)
   console.log(sortWorkers)

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function product(num) {
   num.forEach((num) => {
    console.log(num * 2);
    });
    
}
product([8,9,3,6])

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function arrays(arr) {
    const fourNums = arr.slice(0, 4).map(num => num * 8);
    const twoNums = arr.slice(-2).map(num => num + 5);
    const newValues = fourNums.concat(twoNums);
        console.log(newValues);
   }
   
    arrays([5,8,2,9,5,1]);

    let bal = [1,2,3,4,5,6]
    console.log(bal.slice(0,4))

function sumOfWholeArray(arr, N){
   let sum=0 , index =0

   while(true){
      sum+=arr[index++]
      if(index<N){
         continue
      }
      else{
         break
      }
   }
   return sum
}
console.log(sumOfWholeArray([1,2,5,10,9,3],6))