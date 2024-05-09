//Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.
const time = "11:00pm";
const messages = new Promise((resolve, reject)=>{
    if(time){
        resolve(`How has your day been, would you love lunch?`)
    }
    reject(`I will give you a call`)
})
messages.then((response)=>{
    console.log({response})
    console.log(`I will see you soon`)
})
.catch((error)=>{
console.log({error});
console.log('We are done');
})
.finally(()=>{
    console.log(`I will always be happy`)
});
console.log({messages})

async function inbox(){
    try{ 
        console.log(`This has to work`)
        await messages
    }
    catch{
        console.log(`I will text you later `)
    }
}

//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
function getUserData(id){
const userId = true;
const register = new Promise((resolve,reject)=>{
    if(userId){
        resolve(`Your id is ready`)
    };
    else{
        reject(`id not yet out`)
    }
})};
async function 



//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
function getUserData(id){
    const userId = true;
    const register = new Promise((resolve,reject)=>{
        if(userId){
            resolve(`Your id is ready`)
        };
        else{
            reject(`id not yet out`)
        }





//Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.


// // Example function skeleton
// function unstableTask(taskName, failureProbability) {
//     return new Promise((resolve, reject) => {
//         const randomValue = Math.random();
//         if (randomValue > failureProbability) {
    function getUserData(id){
        const userId = true;
        const register = new Promise((resolve,reject)=>{
            if(userId){
                resolve(`Your id is ready`)
            };
            else{
                reject(`id not yet out`)
            }