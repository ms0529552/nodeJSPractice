const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
   return 'Your notes ...'
}

const addNote = function(title, body){
   const notes = loadNotes()
   const duplicateNotes = notes.filter(function(note){
      return note.title === title;
   })
   if(duplicateNotes.length === 0){
      notes.push({
         title: title,
         body: body
      })
      
      saveNotes(notes)
      console.log(chalk.green('New note added!'));
   }
   else{
      console.log(chalk.red('Oops the note title has existed !'));
   }
   


   console.log(notes);

};


const removeNote = function(title){
   const notes = loadNotes();
   const duplicateNotes = notes.filter(function(note){
      return note.title === title;
   })
   if(duplicateNotes.length > 0){
      const remainNotes = notes.filter(function(note){
         return note.title != title;
      });
      console.log(remainNotes);
      saveNotes(remainNotes);
      console.log(chalk.green('The note: ' + title + ' has been removed!'))
   }
   else{
      console.log(chalk.red('There \'s no certain note named as ' + title + '!'));
   }
}



const saveNotes = function(notes){
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('./notes.json', dataJSON);

};


const loadNotes = function(){
   
   try{
      const dataBuffer = fs.readFileSync('./notes.json');
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);

   }catch(e){
      return [];
   };
   
};



module.exports =  {
   getNotes: getNotes, 
   addNote: addNote,
   removeNote: removeNote
};
//module.exports = getNotesnode