var b = document.body;
var menu = document.querySelector("#menu");
var scBtn = document.querySelector("#spellcheck");
var themeBtn = document.querySelector("#theme");
var saveBtn = document.querySelector("#save");
var sc = true;
var darkTheme = false;
if (localStorage.getItem("darkMode") == "true") {
    window.onload = function(){theme()};
}

var t = document.querySelector("#textbox");
var w = document.body.clientWidth;
var h = document.body.clientHeight;
t.cols = w * (1/9);
t.rows = h * (7/20) - (h * 0.2);

function load() {
    let data = localStorage.getItem("notes");
    if (data != null) {
        document.querySelector("#textbox").value = data;
        //console.log("data loaded: " + data);
    };
    data = localStorage.getItem("sc");
    if (data != null) {
        sc = data;
        if (data == "true") {
            sc = true;
        } else if (data == "false") {
            sc = false;
        };
        t.spellcheck = sc;
    };
};

function save() {
    localStorage.setItem("darkMode", darkTheme);
    localStorage.setItem("sc", sc);
    setTimeout(function() {
        localStorage.setItem("notes", document.querySelector("#textbox").value);
        //console.log("data saved: " + document.querySelector("#textbox").value);
    }, 1);
};

function bDown(button) {
    button.style = "border-style: outset hidden hidden hidden";
};

function bUp(button) {
    button.style = "border-style: hidden hidden outset hidden";
};

function toggleSpellCheck() {
    scBtn.style = "border-style: outset hidden hidden hidden";
    sc = sc == true ? false : true;
    t.spellcheck = sc;
    save();
    setTimeout(function(){scBtn.style = "border-style: hidden hidden outset hidden"}, 25);
};

function theme() {
    darkTheme = darkTheme == true ? false : true;
    //let h = document.querySelector("#h");
    let nv = document.querySelector("#nv");
    if (darkTheme == true) {
        b.classList.add("theme-dark");
        b.classList.remove("theme-light");
        /*b.style.backgroundColor = "rgb(125, 105, 70)";
        h.style.color = "rgb(245, 225, 175)";
        t.style.backgroundColor = "black";
        t.style.color = "white";*/
        nv.style.color = "rgb(125, 225, 205)";
    } else {
        b.classList.add("theme-light");
        b.classList.remove("theme-dark");
        /*b.style.backgroundColor = "rgb(255, 235, 200)";
        h.style.color = "rgb(64, 59, 50)";
        t.style.backgroundColor = "white";
        t.style.color = "black";*/
        nv.style.color = "rgb(0, 125, 100)";
    };
    save();
};

load();
t.oninput = save;
var menuBtns = menu.childNodes;
for (let i = 0; i < menuBtns.length; i++) {
    menuBtns[i].onmousedown = function(){bDown(this)};
    menuBtns[i].onmouseup = function(){bUp(this)};
    menuBtns[i].onmouseleave = function(){bUp(this)};
};
scBtn.onclick = toggleSpellCheck;
themeBtn.onclick = theme;
saveBtn.onclick = save;