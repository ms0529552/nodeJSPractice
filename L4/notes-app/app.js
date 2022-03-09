
const yargs = require('yargs');
const notes = require('./notes.js');



//
//Challenge: Setup command option and function
//
//1. Setup the remove command to take a required "--title" option
//2. Create and export a removeNote function from notes.js
//3. Call removeNote in remove command handler
//4. Have removeNote log the title of the note to be moved
//5. Test your work using : node app.js remove --title="some title"
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
       notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove the note according to typed in title',
    builder:{
        title:{
            describe: 'The title of the note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})


yargs.parse();