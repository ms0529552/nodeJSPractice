import chalk from 'chalk';
import { getNotes } from './notes.js';
//const getNotes = require('./notes.js')

const msg  = getNotes()

console.log(msg)

//
//Challenge: Use the chalk library in your project 
//
//1. Install verstion 2.4.1 of chalk
//2. Load chalk into app.js
//3. Use it to print the string "Success!" to the console in green
//4. Test your work
//
//Bonus: Use docs to mess around with other styles. Make text bold and inversed



var suc_ms = "Success!";
console.log(chalk.green(suc_ms));

const  bonus_style = chalk.bold.inverse.greenBright;

console.log(bonus_style(suc_ms));