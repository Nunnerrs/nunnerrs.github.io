var gatchaType = document.getElementById("gachaType");
var submit = document.getElementById("submit");
var onePull = document.getElementById("onePull");
var tenPull = document.getElementById("tenPull");
var largePull = 10;
var oneStars = false;
var twoStars = false;
var fiveStars = true;
var oneStarChance = 0;
var twoStarChance = 0;
var threeStarChance = 85;
var fourStarChance = 13;
var fiveStarChance = 2;
var max = 100;

// ★ 🎫 🥚

function pull(pulls) {
    let rewards = {};
    for (let i = 1; i <= pulls; i++) {
        let pull = Math.floor(Math.random() * max) + 1;
        if (oneStars == true && pull <= oneStarChance) {
            rewards.push("1");
            continue;
        };
        if (oneStars == true && twoStars == true && pull > oneStarChance && pull <= twoStarChance) {
            rewards.push("2");
            continue;
        };
        if (twoStars == true && pull > twoStarChance && pull <= threeStarChance) {
            rewards.push("3");
            continue;
        };
        if (pull > threeStarChance && pull <= fourStarChance) {
            rewards.push("4");
            continue;
        };
        if (fiveStars == true && pull > fourStarChance && pull <= fiveStarChance) {
            rewards.push("5");
            continue;
        };
        alert("u pulled a " + rewards[rewards.length - 1] + "-star!!");
    };
};

function changeType(type) {
    if (type == 1) {
        largePull = 10;
        oneStars = false;
        twoStars = false;
        fiveStars = true;
        oneStarChance = 0;
        twoStarChance = 0;
        threeStarChance = 85;
        fourStarChance = 13;
        fiveStarChance = 2;
        max = 100;
        alert("set to rpg");
        else if (type == 2) {
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
            else if (type == 3) {
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
                else if (type == 4) {
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
        };
    };
};

onePull.addEventListener("onclick", pull(1));
tenPull.addEventListener("onclick", pull(largePull));
submit.addEventListener("onclick", changeType(gachaType.value));
