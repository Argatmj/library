const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not read"
    }`;
  };
}

function addBook(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const display = document.querySelector(".display");
  display.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDisplay = document.createElement("div");
    const author = document.createElement("div");
    const title = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    bookDisplay.setAttribute("class", "book");
    author.setAttribute("class", "author");
    title.setAttribute("class", "title");
    pages.setAttribute("class", "pages");
    read.setAttribute("class", "read");
    remove.setAttribute("class", "remove");

    author.innerHTML = book.author;
    title.innerHTML = `"${book.title}"`;
    pages.innerHTML = `${book.pages} pages`;
    read.innerHTML = book.read ? "Read" : "Not Read";
    remove.innerHTML = "Remove";

    read.style.backgroundColor = book.read ? "#86efac" : "#fca5a5";

    read.addEventListener("click", (e) => {
      let text = e.target.innerHTML;
      if (text === "Read") {
        e.target.innerHTML = "Not Read";
        e.target.style.backgroundColor = "#fca5a5";
      } else {
        e.target.innerHTML = "Read";
        e.target.style.backgroundColor = "#86efac";
      }
    });

    remove.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });

    bookDisplay.appendChild(author);
    bookDisplay.appendChild(title);
    bookDisplay.appendChild(pages);
    bookDisplay.appendChild(read);
    bookDisplay.appendChild(remove);

    display.appendChild(bookDisplay);
  });
}

const newBook = document.querySelector(".new");
const dialog = document.querySelector("dialog");

newBook.addEventListener("click", () => dialog.showModal());

const inputAuthor = document.querySelector("#author");
const inputTitle = document.querySelector("#title");
const inputPages = document.querySelector("#pages");
const inputChecked = document.querySelector("#check");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    dialog.close();

    const author = inputAuthor.value;
    const title = inputTitle.value;
    const pages = inputPages.value;
    const isChecked = inputChecked.checked;

    let newBook = new Book(author, title, pages, isChecked);

    addBook(newBook);
    displayBooks();

    inputAuthor.value = '';
    inputTitle.value = '';
    inputPages.value = '';
    inputChecked.checked = false;
});
