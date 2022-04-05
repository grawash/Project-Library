let author = document.querySelector(".author")
let title = document.querySelector(".title")
let pages = document.querySelector(".pages")
let read = document.querySelector(".read")
let submit = document.querySelector("button")
let container = document.querySelector(".container")
let myLibrary = [];

function book(author, title, pages, read) {
    this.author=author
    this.title=title
    this.pages=pages
    this.read=read
}
  
  function addBookToLibrary(author,title,pages,read) {
    let obj = new book(author,title,pages,read);
    myLibrary.push(obj);
}
addBookToLibrary.prototype = Object.create(book);

function displayBook(){
    let obj = myLibrary[myLibrary.length-1];
    let card = document.createElement("div");
    card.setAttribute('id',myLibrary.length-1);
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let readStatus = document.createElement("p");
    let removeButton = document.createElement("button");
    title.textContent=obj.title;
    author.textContent=obj.author;
    pages.textcontent=obj.pages;
    readStatus.textContent=obj.read;
    removeButton.textContent="Remove";
    createCard(card,title,author,pages,readStatus,removeButton);
    addRemoveButton(removeButton,card);

}
function createCard(card,title,author,pages,readStatus,removeButton){
    container.appendChild(card)
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(readStatus)
    card.appendChild(removeButton)
}
function addRemoveButton(removeButton,card){
    removeButton.setAttribute('id', myLibrary.length-1);
    removeButton.classList.add("removeButton")
    removeButton.addEventListener('click', () => {removeBook(card.getAttribute('id'));})
}
function removeBook(id){
    let removeCard=document.getElementById(id);
    container.removeChild(removeCard);
    myLibrary.splice(id,1)
}
let book1 = new book("joe", "coolbook", 122,  "read");

submit.addEventListener('click', () => {addBookToLibrary(author.value,title.value,pages.value,read.value); displayBook();});