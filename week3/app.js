"use strict";

//2.1
let bookTitles = [
  "Javascript Essentials",
  "Nodejs Fundamental",
  "Reactjs Foundation",
  "Python For Beginners",
  "Java 8"
];
//console.log(bookTitles);

//2.3
function booksList() {
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  bookTitles.map(book => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(book));
    return document.body.appendChild(ul.appendChild(li));
  });
}

//2.4 - 2.7
let books = [
  {
    book_title: "Javascript Essentials",
    author: "Ethan Brown",
    language: "English",
    cover_image: "jsEss.jpeg"
  },
  {
    book_title: "Nodejs Fundamental",
    author: "Ryan Dahl",
    language: "English",
    cover_image: "nodejs.png"
  },
  {
    book_title: "Pyhton for beginners",
    author: "Mark Lutz",
    language: "English",
    cover_image: "python.jpg"
  },
  {
    book_title: "Reactjs Foundation",
    author: "Jordan Walke",
    language: "English",
    cover_image: "reactjs.jpg"
  },

  {
    book_title: "Java 8",
    author: "James Gosling",
    language: "English",
    cover_image: "java8.jpg"
  }
];
function booksInfo() {
  let mainDiv = document.getElementById("main");
  let ul = document.createElement("ul");

  books.map(book => {
    let li = document.createElement("li");
    let img = document.createElement("IMG");
    let p = document.createElement("p");
    img.src = "./img/" + book.cover_image;
    img.setAttribute("width", "350");
    img.setAttribute("height", "300");
    img.setAttribute("alt", book.book_title);
    li.appendChild(img);
    p.innerHTML = `Title: ${book.book_title}<br/>Author: ${
      book.author
    }<br/>Language: ${book.language}`;

    li.appendChild(p);
    return mainDiv.append(ul.appendChild(li));
  });
}
booksInfo();
