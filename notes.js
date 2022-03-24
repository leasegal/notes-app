const fs = require ('fs');
const { title } = require('process');
const { json } = require('stream/consumers');

const readJson =JSON.parse(fs.readFileSync('notes.json'));

const writeOnJson = (wordToConsoleLog)=>{
    fs.writeFileSync('notes.json',JSON.stringify(readJson),function(err){
        if(err)throw err;
        console.log(wordToConsoleLog);; })
}

const addNote = (title,body) => 
{
    readJson.push({"title": title,"body": body ,"isArchived":false})
    writeOnJson('added')   
}


///*******why is it leave the {} even it remove both the key and value?
const removeNote =(title)=>{
    Object.keys(readJson).forEach(function(el){
    console.log(readJson[el]);
    if(readJson[el].title==title)
    { delete readJson[el].title;delete readJson[el].body;delete readJson[el].isArchived; }; 
    //console.log(readJson);
    })

    writeOnJson('removed')
}

const listNotes = ()=>{
    Object.keys(readJson).forEach(function(el){
  //      console.log(readJson[el].title);
    })
}

const readNote =(title)=>{
    Object.keys(readJson).forEach(function(el){
        if(readJson[el].title==title){console.log(readJson[el].body);};
    })
}
    
const editNote = (oldTitle,newTitle)=>{
    Object.keys(readJson).forEach(function(el){
        if(readJson[el].title==oldTitle){Object.defineProperty(readJson[el],"title",{value:newTitle}) };
    })
    writeOnJson('edit')

    }
 
const archieveNote = (title)=>{
    Object.keys(readJson).forEach(function(el){
        if(readJson[el].title==title){Object.defineProperty(readJson[el],"isArchived",{value:!readJson[el].isArchived})};
    })
//    console.log(readJson)
    writeOnJson('changed')

}
//******** is all the way right?
//********make a function of writeFile

addNote('5','note5')//add note 5
removeNote('3')//remove note 3
listNotes()//console all list
readNote("1")//console note 1
editNote("1","new1")//change title 1
archieveNote("2")//change to true the archieved key (2) .





