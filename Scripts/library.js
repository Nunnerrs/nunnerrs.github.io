var book = document.getElementById("book");
var pageL = document.getElementById("pageL");
var pageR = document.getElementById("pageR");
var back = document.getElementById("back");
var close = document.getElementById("close");
var next = document.getElementById("next");
var mobile = document.getElementById("mobile");
var currentBook = null;
var pageNumL = -1;
var pageNumR = 0;

const books = {
    book1: [
        "title",
        "a",
        "the end"
    ];
};

function openBook(bookId) {
    currentBook = bookId;
    let bookOpen = "book" + bookId;
    book.style = "visibility: visible";
    pageL.innerHTML = "";
    pageR.innerHTML = books[bookOpen[0]];
    pageNumL = -1;
    pageNumR = 0;
};

function backPage() {
    pageNumL -= 2;
    pageNumR -= 2;
    pageL.innerHTML = books[bookOpen[pageNumL]];
    pageR.innerHTML = books[bookOpen[pageNumR]];
};

function nextPage() {
    pageNumL += 2;
    pageNumR += 2;
    pageL.innerHTML = books[bookOpen[pageNumL]];
    pageR.innerHTML = books[bookOpen[pageNumR]];
};

book.style = "visibility: hidden";
pageL.innerHTML = "";
pageR.innerHTML = "";

document.getElementById("book1").addEventListener("click", openBook(1));
