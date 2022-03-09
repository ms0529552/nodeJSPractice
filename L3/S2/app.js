const fs = require('fs')


fs.writeFileSync('notes.txt', 'This file was created by Node.js !')

//
// Challenge: Append a message to notes.txt
//
//1. Use appendFileSync to append to the file
//2. Run the script
//3. Check your work by opening the file and viewing the appended text

var textToAppend = '\nThe text appended for challenge 1 is here.';

fs.appendFileSync('notes.txt', textToAppend);

