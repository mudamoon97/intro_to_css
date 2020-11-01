let articles = document.getElementsByClassName("article")
let counter = document.getElementById("counter")
let but = document.getElementById("trigger-modal")
const modal = document.getElementById("modal-section");
const modalBtn = document.getElementById("trigger-modal");
const cancelBtn = document.getElementById("cancel-modal");
const addBtn = document.getElementById("add-note");
const title = document.getElementById("title");
const content = document.getElementById("content");
const articleContainer = document.getElementById("article-container");
counter.innerHTML = 'You have ' + articles.length + ' notes';

/*but.addEventListener("click", function(){
  let counter = articles.length
});*/

modalBtn.addEventListener("click", () => {
  modal.classList.add("modal-open");
});

cancelBtn.addEventListener("click", () => {
   modal.classList.remove("modal-open");
    // reset modal content
  title.value = "";
  content.value = "";
});

addBtn.addEventListener("click", () => {
   //get value of inputs
   const titleVal = title.value;
   const contentVal = content.value;
   //get date
   const date = new Date().toLocaleDateString();
   //check fields are not empty
   if(!titleVal) return alert ('Please title is required');
   if(!contentVal) return alert ('Please content must not be empty');
   //collect previous content
   const prevJournal = articleContainer.innerHTML;
   //set container to prev content and newly added
   articleContainer.innerHTML = `<article class ="article">
   <h2>${date}: ${titleVal}</h2>
   <p>${contentVal}</p>
   </article> ${prevJournal}`;

   //close modal
   modal.classList.remove("modal-open");
   //reset modal content
   title.value = "";
   content.value = "";

   //update note count
   counter.innerHTML = 'You have ' + articles.length + ' notes';
});

 












/*var articles = document.getElementsByClassName("article")

var control = document.getElementById("control")

var but = document.getElementById("but")

but.addEventListener("click", function(){
    alert(articles.length)
    //var question = prompt("Do you love Javascript?")
    // console.log({question})

    //control.innerHTML = "<article class='article'>" + question + "</article>"

})*/

//var articles = document.getElementsByClassName("article")

//var buttons = document.getElementsByClassName("but")

//document.addEventListener("DOMContentLoaded", function() {
    //function createNewNote() {
      //let NewNote = document.createElement('newNote');
      //NewNote.textContent = 'You have' + articles.length + 'notes';
      //document.getElementsByClassName("article").innerHTML = 'You have' + articles.length + 'notes';

      //document.body.appendChild(newNote);
    
    //} 
    //const buttons = document.querySelectorAll('button');
  
    //for(let i = 0; i < buttons.length ; i++) {
     //buttons[i].addEventListener('click', createNewNote);
    //}
  //});

  //let articles = document.getElementsByClassName("article")

  //let btnAddNote = document.querySelector('note');

  
  //let newNote = document.createElement('h3');
  

  //btnAddNote.addEventListener('click', function(){
  
 // const note = document.getElementById('note');
  //let newNote = document.createElement('n');
  
  //(articles.length)
  
  //document.body.appendChild(note);

 
 // newNote.textContent = 'You have' + articles.length + 'notes';

 // });
  