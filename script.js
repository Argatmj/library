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
  let index = myLibrary.findIndex(libraryBook => book.title === libraryBook.title);
  book.data = index;
}

function displayBooks() {
  const display = document.querySelector(".display");
  display.innerHTML = "";

  myLibrary.forEach((book,index) => {
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

    read.style.backgroundColor = book.read ? "#4ade80" : "#f87171";

    read.addEventListener("click", (e) => {
      let text = e.target.innerHTML;
      if (text === "Read") {
        e.target.innerHTML = "Not Read";
        e.target.style.backgroundColor = "#f87171";
      } else {
        e.target.innerHTML = "Read";
        e.target.style.backgroundColor = "#4ade80";
      }
    });

    remove.addEventListener("click", () => {
        myLibrary.splice(index,1);
        displayBooks();
    })

    bookDisplay.appendChild(author);
    bookDisplay.appendChild(title);
    bookDisplay.appendChild(pages);
    bookDisplay.appendChild(read);
    bookDisplay.appendChild(remove);

    display.appendChild(bookDisplay);
  });
}

const book1 = new Book("Kevin", "The Assassin", 123, true);
const book2 = new Book("Bob", "The Assassin", 123, false);
addBook(book1);
addBook(book2);

displayBooks();
