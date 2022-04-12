//modal inputs
let author = document.querySelector(".author")
let title = document.querySelector(".title")
let pages = document.querySelector(".pages")
let read = document.querySelector(".read")
let submit = document.querySelector(".submit")
let closeModal = document.querySelector(".closeModal")
//main content
let body = document.querySelector("body")
let container = document.querySelector(".container")
let add = document.querySelector(".addBtn")
let modal = document.querySelector(".modal")
let myLibrary = [];

//shows modal
add.addEventListener('click', () => {modal.style.display='block';})
//closes modal
closeModal.addEventListener('click', () => {modal.style.display='none'; clear();})
//constructor
class book{
    constructor(author, title, pages, read) {
        this.author=author
        this.title=title
        this.pages=pages
        this.read=read
    }
}
function createBook(){
    let tempAuthor = author.value;
    let tempTitle = title.value;
    let tempPages = pages.value;
    let tepRead = read.value;
    let newBook = new book(tempAuthor, tempTitle, tempPages, tepRead);
    addBookToLibrary(newBook);
}
//adds book objects in array
function addBookToLibrary(book){
    myLibrary.push(book);
}
function createCard(i){
    let obj = myLibrary[i];
    let card = document.createElement("div");
    card.classList.add("card")
    card.setAttribute('id',i);
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let readStatus = document.createElement("button");
    readStatus.classList.add("readButton");
    let removeButton = document.createElement("button");
    title.textContent=obj.title;
    author.textContent=obj.author;
    pages.textContent=obj.pages;
    removeButton.textContent="Remove";
    toggleReadButton(obj,readStatus);
    appendChild(card,title,author,pages,readStatus,removeButton);
    addRemoveButton(removeButton,card,i);
    addReadStatus(readStatus,card);
}
function appendChild(card,title,author,pages,readStatus,removeButton){
    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(readStatus)
    card.appendChild(removeButton)
}
function toggleReadButton(obj,readStatus){
    if(obj.read=="on"){readStatus.textContent="Read"}
    else{readStatus.textContent="Not Read"}
}
function addReadStatus(readStatus,card){
    if  (readStatus.textContent=="Read"){readStatus.style.backgroundColor="rgba(0, 128, 0, 0.555)"}
    else{readStatus.style.backgroundColor="rgba(255, 0, 0, 0.479)"}
     readStatus.addEventListener('click', () =>{
        if  (readStatus.textContent=="Read"){readStatus.style.backgroundColor="rgba(255, 0, 0, 0.479)";readStatus.textContent="Not Read"}
        else{readStatus.style.backgroundColor="rgba(0, 128, 0, 0.555)";readStatus.textContent="Read"}
     })
}
function addRemoveButton(removeButton,card,i){
    removeButton.setAttribute('id', i);
    removeButton.classList.add("removeButton")
    removeButton.addEventListener('click', () => {removeBook(card.getAttribute('id'));})
}
//removes book objects from array and displays remaining books
function removeBook(id){
    myLibrary.splice(id,1);
    displayBook();
}
//displays books on screen
function displayBook(){
    empty(container);
    body.appendChild(container)
    for(let i=0;i<myLibrary.length;i++){
        createCard(i);
    }
}
//removes cards from dom
function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }
//clears input in modal
function clear(){
    author.value="";
    title.value="";
    pages.value="";
    read.checked=false;
}
function validate(){
    if(author.value ==="" || title.value === "" || pages.value === ""){return false}
    else{return true}
}

//submit book info
submit.addEventListener('click', () =>  {if(validate()==true){createBook();  displayBook(); clear();  modal.style.display='none';}});