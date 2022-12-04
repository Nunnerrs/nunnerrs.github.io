/*
To Do:
• delete change food button & food img on death
*/ 
var age = 1;
const defaultNames = ["Rocky", "Rocko", "Pebbles", "The Rock", "BaRock Obama"];
var name = defaultNames[Math.floor(Math.random() * 5)];
for (let i = 1; i <= 6; i++) {
    document.getElementById("name" + i).innerHTML = name;
};
var food = "plant";
var bathTool = "shower";
const faves = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)];
var full = document.getElementById("fullPercent");
var clean = document.getElementById("cleanPercent");
var happy = document.getElementById("happyPercent");
var lightsOn = true;
var visibleF = false;
var visibleC = false;
var mode = "";

var favicon = document.getElementById("favicon");
var ageDisplay = document.getElementById("age");
var rock = document.getElementById("rock");
var notif1 = document.getElementById("notif1");
var notif2 = document.getElementById("notif2");
var notif3 = document.getElementById("notif3");
var equip = document.getElementById("equip");
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
function lights() {
    if (lightsOn == false) {
        notif1.innerHTML = "";
        notif2.innerHTML = "";
        notif3.innerHTML = "";
        document.getElementsByTagName("body")[0].style = "background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);";
        age += 0.0625;
        full.innerHTML = full.innerHTML - 5;
        clean.innerHTML = clean.innerHTML - 5;
        happy.innerHTML = happy.innerHTML - 5;
        lightsOn = true;
    } else {
        const sleepNoises = ["*sleeps*", "*zzZZ*", "(( _ _ ))..zzzZZ", "(_ _).oO"];
        notif1.innerHTML = name + " is currently asleep. Toggle the lights again to start a new day (this will increase " + name + "'s age but will lower their stats)";
        notif2.innerHTML = sleepNoises[Math.floor(Math.random() * 4)];
        document.getElementsByTagName("body")[0].style = "background-color: rgb(25, 25, 25); color: rgb(255, 255, 255);";
        lightsOn = false;
    };
    ageDisplay.innerHTML = age;
    full = document.getElementById("fullPercent");
    clean = document.getElementById("cleanPercent");
    happy = document.getElementById("happyPercent");
        if (full.innerHTML <= 30 && lightsOn == true) {
            notif1.innerHTML = name + "'s hunger is low!";
        } else if (lightsOn == true) {
            notif1.innerHTML = "";
        };
        if (full.innerHTML < 1) {
            sleepButton.remove();
            feedButton.remove();
            bathButton.remove();
            playButton.remove();
            renameButton.remove();
            notif1.innerHTML = "Oh no! Your pet rock, " + name + ", has died of starvation. Reload the page to raise a new rock";
        };
        if (clean.innerHTML <= 30 && lightsOn == true) {
            notif2.innerHTML = name + "'s cleanliness is low!";
        } else if (lightsOn == true) {
            notif2.innerHTML = "";
        };
        if (clean.innerHTML < 1) {
            if (sleepButton) {
                sleepButton.remove();
            };
            if (feedButton) {
                feedButton.remove();
            };
            if (bathButton) {
                bathButton.remove();
            };
            if (playButton) {
                playButton.remove();
            };
            if (renameButton) {
                renameButton.remove();
            };
            notif2.innerHTML = "Uh oh! Your pet rock, " + name + ", got sick from the germs on them and died. Reload the page to raise a new rock";
        };
        if (happy.innerHTML <= 30 && lightsOn == true) {
            notif3.innerHTML = name + "'s happiness is low!";
        } else {
            notif3.innerHTML = "";
        };
        if (happy.innerHTML < 1) {
            if (sleepButton) {
                sleepButton.remove();
            };
            if (feedButton) {
                feedButton.remove();
            };
            if (bathButton) {
                bathButton.remove();
            };
            if (playButton) {
                playButton.remove();
            };
            if (renameButton) {
                renameButton.remove();
            };
            notif3.innerHTML = "D: Your pet rock, " + name + ", died from sadness. Reload the page to raise a new rock";
        };
        if (age >= 1.5 && age <= 1.75) {
            notif1.innerHTML = name + " grew older!";
            if (full > 70 && clean > 70 && happy > 70) {
                rock.src = "https://nunners.w3spaces.com/kid-rock-happy.png";
                rock.height = "200px";
                favicon.href = "https://nunners.w3spaces.com/kid-rock-happy.png";
            } else {
                rock.src = "https://nunners.w3spaces.com/kid-rock-sad.png";
                rock.height = "200px";
                favicon.href = "https://nunners.w3spaces.com/kid-rock-sad.png";
            };
        };
    };
    function toggleFood() {
        if (visibleF == true) {
            equip.style = "transform: scaleX(0.25); visibility: hidden;";
            foodLabel.style = "visibility: hidden;";
            changeFood.style = "visibility: hidden;";
            setFood.style = "visibility: hidden;";
            visibleF = false;
            mode = "";
        } else {
            switch(food) {
                case "plant":
                    equip.src = "https://nunners.w3spaces.com/plant.png";
                case "white":
                    equip.src = "https://nunners.w3spaces.com/white-pebbles.png";
                case "variety":
                    equip.src = "https://nunners.w3spaces.com/variety-pebbles.png";
            }
            equip.style = "transform: scaleX(0.25); visibility: visible;";
            foodLabel.style = "visibility: visible;";
            changeFood.style = "visibility: visible;";
            setFood.style = "visibility: visible;";
            bathLabel.style = "visibility: hidden;";
            changeTool.style = "visibility: hidden;";
            setTool.style = "visibility: hidden;";
            visibleF = true;
            visibleC = false;
            mode = "f";
        };
    };
    function override(event) {
        event.preventDefault();
    };
    function feed(event) {
        event.preventDefault();
        const eatingNoises = ["Yum!", "Mmmm...", "Nom nom", "*eats*", "*bites*", "*chomp*", "*enjoyz food*"]
        notif1.innerHTML = eatingNoises[Math.floor(Math.random() * 7)];
        if (Number(full.innerHTML) + 5 >= 100) {
            full.innerHTML = 100;
        } else {
            full.innerHTML = Number(full.innerHTML) + 5;
        };
    };
    function changeFood() {
        alert(changeFood.name);
        if (changeFood.name == "plant") {
            food = "plant";
            equip.src = "../plant.png";
        } else if (changeFood.name == "white") {
            food = "white";
            equip.src = "../white-pebbles.png";
        } else {
            food = "variety"
            equip.src = "../variety-pebbles.png";
        };
    };
    function toggleBath() {
        if (visibleC == true) {
            equip.style = "transform: scaleX(0.25); visibility: hidden;";
            bathLabel.style = "visibility: hidden;";
            changeTool.style = "visibility: hidden;";
            setTool.style = "visibility: hidden;";
            visibleC = false;
        } else {
            equip.style = "transform: scaleX(0.25); visibility: visible;";
            bathLabel.style = "visibility: visible;";
            changeTool.style = "visibility: visible;";
            setTool.style = "visibility: visible;";
            foodLabel.style = "visibility: hidden;";
            changeFood.style = "visibility: hidden;";
            setFood.style = "visibility: hidden;";
            visibleC = true;
            visibleF = false;
        };
    };
    function bathe() {
        if (Number(clean.innerHTML) + 5 < 100) {
            clean.innerHTML = Number(clean.innerHTML) + 5;
        } else {
            clean.innerHTML = 100;
        };
    };
    function play() {
        if (Number(happy.innerHTML) + 5 < 100) {
            happy.innerHTML = Number(happy.innerHTML) + 5;
        } else {
            happy.innerHTML = 100;
        };
    };
    function rename() {
        let newName = prompt("What would you like to rename " + name + " to?");
        if (newName !== "" && newName !== null && newName !== " ") {
            for (let i = 1; i <= 6; i++) {
                document.getElementById("name" + i).innerHTML = newName;
            };
        };
    };
};
