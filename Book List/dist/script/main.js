// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = (book) => {
  const list = document.getElementById("book-list");

  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete"> <i class="fas fa-times"></i></a></td>`;

  list.appendChild(row);
};

UI.prototype.clearFields = () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Evet Listeners
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Get form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //  Instantiate book
  const book = new Book(title, author, isbn);

  //  Instantiate book
  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    // Error Alert

    ui.showAlert("Please fill in all fields \u26A0", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to local storage
    Store.addBook(book);
    // Clear fields
    ui.clearFields();
    ui.showAlert("Book Added  \u2714", "success");
  }

  e.preventDefault();
});

document.querySelector(".table").addEventListener("click", (e) => {
  if (e.target.parentElement.className === "delete") {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(book) {
    const books = Store.getBooks();
    
  }
}

// DOM load event

document.addEventListener("DOMContentLoaded", Store.displayBooks);
