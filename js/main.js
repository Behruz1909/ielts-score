"use strict";
let isListening = +prompt("Enter Your Listening Score!")
let isReading = +prompt("Enter Your Reading Score!")
let isWriting = +prompt("Enter Your Writing Score!")
let isSpeaking = +prompt("Enter Your Speaking Score!")

let allBall = isListening + isReading + isWriting + isSpeaking

console.log(Math.round(allBall / 4))
document.write(Math.round(allBall / 4))