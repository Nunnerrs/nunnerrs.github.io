var b = document.body;
var note = 1; // current note
var totalNotes = 1; // total notes
var topBar = document.querySelector("#top-bar");
var sketchy = document.querySelector("#sketchy");
var sketchyFace = document.querySelector("#sketchy-face");
var sketchyDialog = document.querySelector("#sketchy-dialog");

var menu = document.querySelector("#menu");
var scBtn = document.querySelector("#spellcheck");
var sc = true;
var themeBtn = document.querySelector("#theme");
var darkTheme = false;
var saveBtn = document.querySelector("#save");

var noteTabs = document.querySelector("#note-tabs");
var notes = document.querySelector("#notes");
var notes1 = document.querySelector("#notes1");
var addNoteBtn = document.querySelector("#add-note");

var t = document.querySelector("#textbox");
var names = ["Notes 1"];

var nv = document.querySelector("#nv");

var mobile = false;
var w = document.body.clientWidth;
/*var height = document.body.clientHeight;
t.cols = width * (1/9);
t.rows = height / 20;*/

function get(name) {
    return localStorage.getItem(name);
}

var number = get("currentNote");
var total = get("totalNotes");
function load() {
    let n = "notes";
    if (number != null) {
        if (Number(number) == 1) {
            number = "";
        }
        let data = get(n + number);
        //console.log(n + number);
        if (data != null) {
            t.value = data;
            //console.log("data loaded: " + data);
        }
        if (Number(total) > 1) {
            console.log("there are " + total + " notes");
            for (let i = 1; i <= Number(total); i++) {
                //console.log(i);
                if (get("notes" + i) != null/* && get("notes" + i) != ""*/) {
                    addNote();
                } else {
                    //localStorage.removeItem("notes" + i);
                }
            }
			//console.log(note);
            save();
        }
        if (Number(number) != "") {
			note = Number(number);
            notes1.classList.remove("current");
            document.querySelector("#notes" + number).classList.add("current");
        }
    }
    let data = get("sc");
    if (data != null) {
        sc = data;
        if (data == "true") {
            sc = true;
        } else if (data == "false") {
            sc = false;
        }
        t.spellcheck = sc;
    }
    if (w <= 700) {
        mobile = true;
        document.getElementsByTagName("gap")[0].innerHTML = "&nbsp;";
    }
}

function save() {
    localStorage.setItem("darkMode", darkTheme);
    localStorage.setItem("sc", sc);
    setTimeout(function() {
        let n = "notes";
        if (note > 1) {
            n += note;
        }
        localStorage.setItem(n, document.querySelector("#textbox").value);
        //console.log("data saved: " + document.querySelector("#textbox").value);
    }, 1);
    localStorage.setItem("currentNote", note);
	console.log("there are " + totalNotes);
    localStorage.setItem("totalNotes", totalNotes);
    /*for (let i = 1; i <= totalNotes; i++) {
        localStorage.setItem("notes" + i + "_name", names[i - 1]);
    }*/
}
saveBtn.onclick = save;

var debounce = false;
function toggleMenu() {
    if (debounce == false) {
        if (menu.style.opacity == 0) {
            debounce = true;
            sketchy.style.marginLeft = "-65px";
            //menu.style.width = "175px";
            menu.style.opacity = 1;
            scBtn.disabled = false;
            themeBtn.disabled = false;
            saveBtn.disabled = false;
            sketchyDialog.style.visibility = "visible";
            let d = dialog[Math.floor(Math.random() * dialog.length)];
            if (d.match("--:--")) {
                let date = new Date();
                let h = date.getHours();
                let time = "AM";
                if (h > 12) {
                    h -= 12;
                    time = "PM";
                }
                let m = date.getMinutes();
                d = "It's " + h + ":" + m + " " + time + " right now.";
            }
            sketchyDialog.innerHTML = d;
            if (d.length < 20) {
                sketchyDialog.style.left = -(10 * d.length + 15) + "px";
            } else {
                if (w <= 1000) {
                    sketchyDialog.style.left = "-" + w / 4 + "px";
                    sketchyDialog.style.marginRight = w / 10 + "px";
                } else if (w <= 1500) {
                    sketchyDialog.style.left = "-" + w / 6 + "px";
                    sketchyDialog.style.marginRight = w / 15 + "px";
                } else {
                    sketchyDialog.style.left = "-" + w / 8 + "px";
                    sketchyDialog.style.marginRight = w / 20 + "px";
                }
                sketchyDialog.style.top = "0%";
            }
            setTimeout(function(){
                //sketchyDialog.style.visibility = "hidden";
                //sketchyDialog.innerHTML = "time to end it all.";
            }, d.split(" ").length * 1000 + 500);
        } else {
            debounce = true;
            sketchy.style.marginLeft = "50px";
            //menu.style.width = "0px";
            menu.style.opacity = 0;
            scBtn.disabled = true;
            themeBtn.disabled = true;
            saveBtn.disabled = true;
            sketchyDialog.style.visibility = "hidden";
            sketchyDialog.innerHTML = "how could you.";
        }
        setTimeout(function(){debounce = false}, 1000);
    }
}
sketchy.onclick = toggleMenu;

var bounce = false;
function silly(e) {
    e.preventDefault();
    if (bounce == false) {
        bounce = true;
        let faces = ["no-expression", "sad"];
        sketchyFace.src = "assets/sketchy-" + faces[Math.floor(Math.random() * faces.length)] + ".png";
        setTimeout(function(){
            sketchyFace.src = "assets/sketchy-happy.png";
            bounce = false;
        }, 1000);
    }
}
sketchy.oncontextmenu = silly;

function toggleSpellCheck() {
    sc = sc == true ? false : true;
    t.spellcheck = sc;
    save();
}
scBtn.onclick = toggleSpellCheck;

if (get("darkMode") == "true") {
    //theme();
}

function theme() {
    darkTheme = darkTheme == true ? false : true;
    let h = document.querySelector("#h");
    if (darkTheme == true) {
        /*b.classList.add("theme-dark");
        b.classList.remove("theme-light");*/
        b.style.background = "rgb(125, 105, 70)";
        h.style.color = "rgb(245, 225, 175)";

        t.style.background = "black";
        t.style.color = "white";
        nv.style.color = "rgb(125, 225, 205)";
    } else {
        /*b.classList.add("theme-light");
        b.classList.remove("theme-dark");*/
        b.style.background = "rgb(255, 235, 200)";
        h.style.color = "rgb(64, 59, 50)";

        t.style.background = "white";
        t.style.color = "black";
        nv.style.color = "rgb(0, 125, 100)";
    }
    save();
}
//themeBtn.onclick = theme;

function addNote(addToTotal) {
    let maxNotes = 10;
    if (totalNotes + 1 <= maxNotes || maxNotes == 0) {
        /*if (addToTotal != false) {
            totalNotes++;
        }*/
		totalNotes++;
        let n = document.createElement("button");
        n.classList.add("note-tab");
        n.id = "notes" + totalNotes;
        n.innerHTML = "Notes " + totalNotes;
        let t = totalNotes.toString();
        n.onclick = function(){switchNote(Number(t))};
        notes.appendChild(n);
        save();
    }
}
addNoteBtn.onclick = addNote;

function switchNote(n) {
    note = n;
    document.getElementsByClassName("current")[0].classList.remove("current");
    document.querySelector("#notes" + n).classList.add("current");
    if (n == 1) {
        n = "";
    }
    t.value = get("notes" + n);
    save();
}
notes1.onclick = function(){switchNote(1)};

function bDown(button) {
    button.style = "border-style: hidden hidden hidden hidden";
    button.style.marginTop = "1.5px";
}

function bUp(button) {
    button.style = "border-style: hidden hidden outset hidden";
}

load();
t.oninput = save;
window.onbeforeunload = save;
var menuBtns = menu.childNodes;
for (let i = 0; i < menuBtns.length; i++) {
    menuBtns[i].onmousedown = function(){bDown(this)};
    menuBtns[i].onmouseup = function(){bUp(this)};
    menuBtns[i].onmouseleave = function(){bUp(this)};
}
setInterval(function(){
    sketchyFace.src = "assets/sketchy-blink.png";
    setTimeout(function(){
        sketchyFace.src = "assets/sketchy-happy.png";
    }, 100);
}, 5000);