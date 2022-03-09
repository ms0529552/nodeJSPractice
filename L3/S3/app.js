// const name = require('./utils.js')

// console.log(name)

// Challenge : Define and use a functiuon in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that reutrns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

const getNotes = require('./notes.js')

const msg  = getNotes()

console.log(msg)  