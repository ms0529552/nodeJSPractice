
//const { yargs, argv, demandOption } = require('yargs');
const yargs = require('yargs');




//
//Challenge: Add two new commands
//
//1. Setup a body option for the add command
//2. Configure a description, make it required, and for it to be a string
//3. Log the body value in the handler function
//4. Test your work
//
yargs.command({
    command: 'add',
    describe: 'add a a new list',
    builder:{
        title:{
            describe: 'The title of the note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'The body of the note.',
            demandOption: true,
            type: 'string'
        }
    },    
    handler: function(argv){
        console.log('The note ' + argv.title + ' has been added!');
        console.log(argv.body);
    }
})


yargs.parse();
