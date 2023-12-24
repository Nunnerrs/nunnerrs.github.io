var popup = document.getElementById("nunnerday");
var bday = document.getElementById("bday");
var noBday = document.getElementById("noBday");
var seen = true;
if (localStorage.getItem("nunnerday2023") == "true") {
    seen = true;
};

if (seen != false) {
    popup.style.visibility = "hidden";
};

function close() {
    popup.style.visibility = "hidden";
};

function dontShow() {
    popup.style.visibility = "hidden";
    localStorage.setItem("nunnerday2023", true);
};

bday.onclick = close;
noBday.onclick = dontShow;