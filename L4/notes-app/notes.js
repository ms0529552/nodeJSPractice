const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
   return 'Your notes ...'
}

const addNote = (title, body) => {
   const notes = loadNotes();
   const duplicateNote = notes.find((note) => note.title === title);
   
   
   if(!duplicateNote){
      notes.push({
         title: title,
         body: body
      });
      
      saveNotes(notes);
      console.log(chalk.green('New note added!'));
   }
   else{
      console.log(chalk.red('Oops the note title has existed !'));
   }
   


   console.log(notes);

};


const removeNote = (title) => {
   const notes = loadNotes();
   const duplicateNotes = notes.filter((note) => note.title === title)
   if(duplicateNotes.length > 0){
      const remainNotes = notes.filter((note) => note.title !== title);
      console.log(remainNotes);
      saveNotes(remainNotes);
      console.log(chalk.green('The note: ' + title + ' has been removed!'))
   }
   else{
      console.log(chalk.red('There \'s no certain note named as ' + title + '!'));
   }
}

const listNotes = () => {
   const notes = loadNotes();
   console.log(chalk.blue.inverse('Your notes:'));
   notes.forEach((note)=>{
      console.log(note)
   });

}

const readNote = (title) =>{
   const notes = loadNotes();
   const notefound = notes.find((note) => note.title === title);
   if(notefound){   
      console.log(chalk.blue(notefound.title));
      console.log(notefound.body);
   }
   else{
      console.log(chalk.red('There \'s no certain note named as ' + title + '!'));
   }
};

const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('./notes.json', dataJSON);

};


const loadNotes = () => {
   
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
   removeNote: removeNote,
   listNotes: listNotes,
   readNote: readNote
};
//module.exports = getNotesnode