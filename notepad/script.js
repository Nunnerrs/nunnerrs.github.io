var b = document.body;
var menu = document.querySelector("#menu");
var scBtn = document.querySelector("#spellcheck");
var saveBtn = document.querySelector("#save");
var sc = true;

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

load();
t.oninput = save;
var menuBtns = menu.childNodes;
for (let i = 0; i < menuBtns.length; i++) {
    menuBtns[i].onmousedown = function(){bDown(this)};
    menuBtns[i].onmouseup = function(){bUp(this)};
    menuBtns[i].onmouseleave = function(){bUp(this)};
};
scBtn.onclick = toggleSpellCheck;
saveBtn.onclick = save;