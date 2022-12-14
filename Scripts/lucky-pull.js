var gatchaType = document.getElementById("gachaType");
var submit = document.getElementById("submit");
var onePull = document.getElementById("onePull");
var largePull = document.getElementById("largePull");
var message = document.getElementById("message");
var continueButton = document.getElementById("continueButton");
var colorBlindHelp = document.getElementById("colorBlindHelp");
var colorBlindOn = false;
alert("began script!!!");
var largePullAmount = 10;
var oneStars = false;
var twoStars = false;
var fiveStars = true;
var oneStarChance = 0;
var twoStarChance = 0;
var threeStarChance = 85;
var fourStarChance = 13;
var fiveStarChance = 2;
var max = 100;

var rewards = [];

function changeType() {
    let type = gachaType.value;
    if (type == 1) {
        largePull = 10;
        oneStars = false;
        twoStars = false;
        fiveStars = true;
        oneStarChance = 0;
        twoStarChance = 0;
        threeStarChance = 85;
        fourStarChance = 14;
        fiveStarChance = 1;
        max = 100;
        alert("set to rpg");
    } else if (type == 2) {
        largePull = 10;
        oneStars = false;
        twoStars = true;
        fiveStars = false;
        oneStarChance = 0;
        twoStarChance = 885;
        threeStarChance = 85;
        fourStarChance = 30;
        fiveStarChance = 0;
        max = 1000;
        alert("set to band");
    } else if (type == 3) {
        largePull = 1;
        oneStars = true;
        twoStars = true;
        fiveStars = true;
        oneStarChance = 20;
        twoStarChance = 35;
        threeStarChance = 27;
        fourStarChance = 15;
        fiveStarChance = 3;
        max = 100;
        alert("set to adopt");
    } else if (type == 4) {
        largePull = 3;
        oneStars = true;
        twoStars = true;
        fiveStars = true;
        oneStarChance = 394;
        twoStarChance = 265;
        threeStarChance = 200;
        fourStarChance = 140;
        fiveStarChance = 1;
        max = 1000;
        alert("set to bubblegum");
    };
};

function doPull() {
    alert("1 pull…");
    onePull.style = "visibility: hidden;";
    tenPull.style = "visibility: hidden;";
    message.style = "visibility: visible;";
    continueButton.style = "visibility: visible;";

    let pull = Math.floor(Math.random() * max) + 1;

    if (oneStars == true && pull <= oneStarChance) {
        rewards.push("1");
    };
    if (oneStars == true && twoStars == true && pull > oneStarChance && pull <= twoStarChance) {
        rewards.push("2");
    };
    if (oneStars == false && twoStars == true && pull <= twoStarChance) {
        rewards.push("2");
    };
    if (twoStars == true && pull > twoStarChance && pull <= threeStarChance) {
        rewards.push("3");
    };
    if (twoStars == false && gatchaType.value == "1" && pull <= threeStarChance) {
        rewards.push("3");
    };
    if (pull > threeStarChance && pull <= fourStarChance) {
        rewards.push("4");
    };
    if (fiveStars == true && pull > fourStarChance && pull <= fiveStarChance) {
        rewards.push("5");
    };
    alert("u pulled a " + rewards[rewards.length - 1] + "-star!!");
};

function doLargePull() {
    alert(largePullAmount + " pull…");
    message.style = "visibility: visible;";
    continueButton.style = "visibility: visible;";
    let highest = 3;

    for (let i = 1; i <= largePullAmount; i++) {
        alert("1 pull…");
        let pull = Math.floor(Math.random() * max) + 1;

        if (oneStars == true && pull <= oneStarChance) {
            rewards.push("1");
            continue;
        };
        if (oneStars == true && twoStars == true && pull > oneStarChance && pull <= twoStarChance) {
            rewards.push("2");
            continue;
        };
        if (oneStars == false && twoStars == true && pull <= twoStarChance) {
            rewards.push("2");
            continue;
        };
        if (twoStars == true && pull > twoStarChance && pull <= threeStarChance) {
            rewards.push("3");
            continue;
        };
        if (twoStars == false && gatchaType.value == "1" && pull <= threeStarChance) {
            rewards.push("3");
            continue;
        };
        if (pull > threeStarChance && pull <= fourStarChance) {
            rewards.push("4");
            if (gachaType.value == "1") {
                if (highest < 4) {
                    highest = 4;
                };
            };
            continue;
        };
        if (fiveStars == true && pull > fourStarChance && pull <= fiveStarChance) {
            rewards.push("5");
            if (gachaType.value == "1") {
                if (highest < 5) {
                    highest = 5;
                };
            };
            continue;
        };
        alert("u pulled a " + rewards[rewards.length - 1] + "-star!!");
    };
    
    if (highest == 4) {
        continueButton.style = "color: rgb(200, 150, 255); visibility: visible;"
    };
    if (highest == 5) {
        continueButton.style = "color: rgb(255, 175, 100); visibility: visible;"
    };
    if (gatchaType.value == "1") {
        message.innerHTML = "Click to continue";
        continueButton.innerHTML = "★";
    };
    if (gatchaType.value == "2") {
        message.innerHTML = "Click to cut";
        continueButton.innerHTML = "🎫";
    };
    if (gatchaType.value == "3") {
        message.innerHTML = "Click to hatch";
        continueButton.innerHTML = "🥚";
    };
    alert("completed execution");
};

function reward() {
    message.innerHTML = rewards.toString();
    onePull.style = "visibility: visible;";
    tenPull.style = "visibility: visible;";
    message.style = "visibility: hidden;";
    continueButton.style = "visibility: hidden;";
    rewards = [];
    alert("awards are displayed!");
};

function colorBlind() {
    if (colorBlindOn == true) {
        document.html.class = "colorBlind";
        colorBlindOn = false;
    } else {
        document.html.class = "";
        colorBlindOn = true;
    };
    alert("set color blind mode to " + colorBlindOn);
};

submit.addEventListener("onclick", changeType);
onePull.addEventListener("onclick", doPull);
largePull.addEventListener("onclick", doLargePull);
continueButton.addEventListener("onclick", reward);
colorBlindHelp.addEventListener("onclick", colorBlind);
