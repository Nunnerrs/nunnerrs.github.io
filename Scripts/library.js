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
    ],
};

function openBook(bookId) {
    alert("opened book #" + bookId);
    currentBook = bookId;
    book.style = "visibility: visible";
    pageL.innerHTML = "";
    pageR.innerHTML = books["book" + currentBook][0];
    pageNumL = -1;
    pageNumR = 0;
};

function backPage() {
    if (pageNumL > -1) {
        alert("flipped page back");
        pageNumL -= 2;
        pageNumR -= 2;
        pageL.innerHTML = books["book" + currentBook][pageNumL]];
        pageR.innerHTML = books["book" + currentBook][pageNumR]];
        if (pageNumL <= -1) {
            pageL.innerHTML = "";
        };
        if (pageNumR >= books["book" + currentBook].length) {
            pageR.innerHTML = "";
        };
    };
};

function closeBook() {
    book.style = "visibility: hidden";
    pageL.innerHTML = "";
    pageR.innerHTML = "";
    pageNumL = -1;
    pageNumR = 0;
    currentBook = null;
    alert("closed book #" + currentBook);
};

function nextPage() {
    if (books["book" + currentBook][pageNumL + 2]) {
        alert("flipped page forward");
        pageNumL += 2;
        pageNumR += 2;
        pageL.innerHTML = books["book" + currentBook][pageNumL]];
        pageR.innerHTML = books["book" + currentBook][pageNumR]];
        if (pageNumR >= books["book" + currentBook].length) {
            pageR.innerHTML = "";
        };
    };
};

book.style = "visibility: hidden";
pageL.innerHTML = "";
pageR.innerHTML = "";
back.style = "visibility: hidden";
close.style = "visibility: hidden";
next.style = "visibility: hidden";

//document.getElementById("book1").addEventListener("click", openBook(1));
