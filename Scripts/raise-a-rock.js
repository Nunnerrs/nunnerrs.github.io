var age = 1;
const rocks {
    good: {},
    neutral: {},
    bad: {}
};

const bools = [true, false, false];

const defaultNames = ["Rocky", "Rocko", "Pebbles", "The Rock", "BaRock Obama"];
var name = defaultNames[Math.floor(Math.random() * (defaultNames.length - 1))];

let names = document.getElementsByTagName("name");
for (let i = 0; i < names.length; i++) {
    names[i].innerHTML = name;
};

const faves = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)];
var full = document.getElementById("fullPercent");
var clean = document.getElementById("cleanPercent");
var happy = document.getElementById("happyPercent");
var visibleF = false;
var visibleC = false;
var ticking = false;

var favicon = document.getElementById("favicon");
var ageDisplay = document.getElementById("age");
var rock = document.getElementById("rock");
var notif1 = document.getElementById("notif1");
var notif2 = document.getElementById("notif2");
var notif3 = document.getElementById("notif3");
var tool = document.getElementById("tool");
var sleepButton = document.getElementById("sleepButton");
var feedButton = document.getElementById("feedButton");
var foodLabel = document.getElementById("foodLabel");
var changeFood = document.getElementById("changeFood");
var setFood = document.getElementById("setFood");
var bathButton = document.getElementById("bathButton");
var bathLabel = document.getElementById("bathLabel");
var changeTool = document.getElementById("changeTool");
var setTool = document.getElementById("setTool");
var playButton = document.getElementById("playButton");
var renameButton = document.getElementById("renameButton");

function tick() {
    if (ticking == true) {
        age += 0.01;
        ageDisplay.innerHTML = age;
        
        let hungry = bools[Math.floor(Math.random() * (bools.length - 1))];
        if (hungry == true) {
            full.innerHTML = Number(full.innerHTML) - 2;
        };
        
        let dirty = bools[Math.floor(Math.random() * (bools.length - 1))];
        if (dirty == true) {
            clean.innerHTML = Number(clean.innerHTML) - 2;
        };
        
        let bored = bools[Math.floor(Math.random() * (bools.length - 1))];
        if (bored == true) {
            bored.innerHTML = Number(bored.innerHTML) - 2;
        };
        
        if (age >= 2.5 && age < 7.5) {
            if (full >= 75 && clean >= 75 && happy >= 75) {
                rock.src = "../Assets/Raise-A-Rock/kid-rock-happy.png";
            } else {
                rock.src = "../Assets/Raise-A-Rock/kid-rock-sad.png";
            };
        } else if (age <= 7.5) {
            if (full >= 90 && clean >= 90 && happy >= 90) {
                rock.src = rocks[good][Math.floor(Math.random() * (rocks[good].length - 1));
            } else if (full >= 70 && full < 90 && clean >= 70 && clean < 90 && happy >= 70 && happy < 90) {
                rock.src = rocks[neutral][Math.floor(Math.random() * (rocks[neutral].length - 1));
            } else if (full < 70 && clean < 70 && happy < 70) {
                rock.src = rocks[bad][Math.floor(Math.random() * (rocks[bad].length - 1));
            };
        };
    };
};

window.onload = setInterval(tick, 1000);
