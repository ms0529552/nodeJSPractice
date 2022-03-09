import fs from 'fs'




//
//Challenge: Work with JSON and the file system
//
//1. Load and parse the JSON data
//2. Change the name and age property using your info
//3. Stringify the changed object and overwrite the original data
//4. Test your work by viewing data in the JSON file
//


const dataBuffer = fs.readFileSync('./1-json.json');

const datajson = dataBuffer.toString();

var data = JSON.parse(datajson);

data.name = 'Kevin';
data.age = '24';

const new_datajson = JSON.stringify(data);
fs.writeFileSync('./1-json.json', new_datajson);