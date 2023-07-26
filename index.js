///document.getElementById("count").innerText = 5

// -------------------------------------------------

// let count = 0 

// console.log(count)

// ----------------------------------------------------

// Challenge

// let myAge = 21

// console.log(myAge)

// ----------------------------------------------------

// let firstBatch = 5
// let secondBatch = 10

// let count = firstBatch + secondBatch

// console.log(count)

// ----------------------------------------------------

// Challenge 2

// let myAge = 21
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// ----------------------------------------------------


// Challenge 3 

// let bonusPoints = 50 
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50 

// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75 

// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45

// console.log(bonusPoints)

// ----------------------------------------------------

// Challenge 4 

// Make btn increment
// - intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


// function increment() {

//     console.log("The button was clicked")
// }

// ----------------------------------------------------

// Challenge 5 

// create a function (you decide the name) that logs out the number 42 to the console
// call/invoke the function

// function lucidDreams() {
//     console.log(42)
// }

// lucidDreams()

// ----------------------------------------------------

// Challenge 6


// let lap1 = 34 
// let lap2 = 33
// let lap3 = 36

// create a function that logs out the sum of all the lap times

// (I did this wrong I did not add the let totalTime and console within the raceLaps function)

// function raceLaps() {
//   let totalTime = lap1 + lap2 + lap3
//   console.log(totalTime)
// }
// raceLaps()

// ----------------------------------------------------

// (((Time stamp )))
 // vid time that im on is 31:31//

// ----------------------------------------------------

// Challenge 7
// create a function that increments the lapsCompleted variable with one
// run it three times

// my code for the challenge

// let lapsCompleted = 0 
// let CompletedAnotherLap = 1

// function lapsRecorded() {
//   let raceLaps = lapsCompleted + CompletedAnotherLap + CompletedAnotherLap + CompletedAnotherLap
//   console.log(raceLaps)
// }
// End results this was not what was supposed to be done it works but its not correct

// lapsRecorded()

// the youtubers code((((ANSWER))))

// let lapsCompleted = 0

// function incrementLap() {
//   lapsCompleted = lapsCompleted +1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// ----------------------------------------------------

// changing the Dom
//camelCase here because you can not use a dash
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {   
    count = count + 1
// modify the content
    countEl.innerText = count
}

function save() {
    console.log(count)
}

save()

// ----------------------------------------------------

// let username = "per"

// console.log(username);

// challenge 01
// create a variable, message, that stores the string: "You have tree new notifications" 
 

let username = "per"
let message = "You have three new notification"
let messageToUser = "We have logged"

console.log(message + ", " + username + ", " + messageToUser)

// Create a variable, messageToUser, that contains the message we have logged


