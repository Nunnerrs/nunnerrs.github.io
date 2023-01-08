var gatchaType = document.getElementById("gachaType");
var submit = document.getElementById("submit");
var onePull = document.getElementById("onePull");
var largePull = document.getElementById("largePull");
var message = document.getElementById("message");
var continueButton = document.getElementById("continueButton");
var colorBlindHelp = document.getElementById("colorBlindHelp");
var colorBlindOn = false;
var largePullAmount = 10;
//var oneStars = false;
//var twoStars = false;
//var fiveStars = true;
var oneStarChance = 0;
var twoStarChance = 0;
var threeStarChance = 85;
var fourStarChance = 13;
var fiveStarChance = 2;
var max = 100;
var mode = 0;

const rewards = [];

submit.addEventListener("click", function() {
    let type = gachaType.value;
    if (type == 1) {
        largePull = 10;
        //oneStars = false;
        //twoStars = false;
        //fiveStars = true;
        oneStarChance = 0;
        twoStarChance = 0;
        threeStarChance = 85;
        fourStarChance = 14;
        fiveStarChance = 1;
        max = 100;
        alert("set to rpg");
    } else if (type == 2) {
        largePull = 10;
        //oneStars = false;
        //twoStars = true;
        //fiveStars = false;
        oneStarChance = 0;
        twoStarChance = 885;
        threeStarChance = 85;
        fourStarChance = 30;
        fiveStarChance = 0;
        max = 1000;
        alert("set to band");
    } else if (type == 3) {
        largePull = 1;
        //oneStars = true;
        //twoStars = true;
        //fiveStars = true;
        oneStarChance = 20;
        twoStarChance = 35;
        threeStarChance = 27;
        fourStarChance = 15;
        fiveStarChance = 3;
        max = 100;
        alert("set to adopt");
    } else if (type == 4) {
        largePull = 3;
        //oneStars = true;
        //twoStars = true;
        //fiveStars = true;
        oneStarChance = 394;
        twoStarChance = 265;
        threeStarChance = 200;
        fourStarChance = 140;
        fiveStarChance = 1;
        max = 1000;
        alert("set to bubblegum");
    };
});

onePull.addEventListener("click", function() {
    //alert("1 pull…");
    onePull.style = "visibility: hidden;";
    largePull.style = "visibility: hidden;";
    message.style = "visibility: visible;";
    continueButton.style = "visibility: visible;";

    let type = gachaType.value;
    let pull = Math.floor(Math.random() * max) + 1;

    if (type == 1) {
        if (pull <= threeStarChance) {
            rewards.push("3");
        };
        if (pull > threeStarChance && pull <= threeStarChance + fourStarChance) {
            rewards.push("4");
        };
        if (pull > threeStarChance + fourStarChance && pull <= threeStarChance + fourStarChance + fiveStarChance) {
            rewards.push("5");
        };
    };
    if (type == 2) {
        if (pull <= twoStarChance) {
            rewards.push("2");
        };
        if (pull > twoStarChance && pull <= twoStarChance + threeStarChance) {
            rewards.push("3");
        };
        if (pull > twoStarChance + threeStarChance && pull <= twoStarChance + threeStarChance + fourStarChance) {
            rewards.push("4");
        };
    };
    if (type == 3 || type == 4) {
        if (pull <= oneStarChance) {
            rewards.push("1");
        };
        if (pull > oneStarChance && pull <= oneStarChance + twoStarChance) {
            rewards.push("2");
        };
        if (pull > oneStarChance + twoStarChance && pull <= oneStarChance + twoStarChance + threeStarChance) {
            rewards.push("3");
        };
        if (pull > oneStarChance + twoStarChance + threeStarChance && pull <= oneStarChance + twoStarChance + threeStarChance + fourStarChance) {
            rewards.push("4");
        };
        if (pull > oneStarChance + twoStarChance + threeStarChance + fourStarChance && pull <= oneStarChance + twoStarChance + threeStarChance + fourStarChance + fiveStarChance) {
            rewards.push("5");
        };
    };

    /*if (oneStars == true && pull <= oneStarChance) {
        rewards.push("1");
    };
    if (oneStars == true && twoStars == true && pull > oneStarChance && pull <= oneStarChance + twoStarChance) {
        rewards.push("2");
    };
    if (oneStars == false && twoStars == true && pull <= twoStarChance) {
        rewards.push("2");
    };
    if (oneStars == true && twoStars == true && pull > oneStarChance + twoStarChance && pull <= oneStarChance + twoStarChance + threeStarChance) {
        rewards.push("3");
    };
    if (oneStars == false && twoStars == true && pull > twoStarChance && pull <= twoStarChance + threeStarChance) {
        rewards.push("3");
    };
    if (twoStars == true && pull <= twoStarChance + threeStarChance) {
        rewards.push("3");
    };
    if (twoStars == false && pull <= threeStarChance) {
        rewards.push("3");
    };
    if (pull > threeStarChance && pull <= threeStarChance + fourStarChance) {
        rewards.push("4");
    };
    if (fiveStars == true && pull > threeStarChance + fourStarChance && pull <= threeStarChance + fourStarChance + fiveStarChance) {
        rewards.push("5");
    };*/
    mode = 1;
    //alert("u pulled a " + rewards[rewards.length - 1] + "-star!!");
});

largePull.addEventListener("click", function() {
    alert(largePullAmount + " pull…");
    message.style = "visibility: visible;";
    continueButton.style = "visibility: visible;";
    let highest = 3;

    for (let i = 1; i <= largePullAmount; i++) {
        //alert("1 pull…");
        let type = gachaType.value;
        let pull = Math.floor(Math.random() * max) + 1;

        if (type == 1) {
            if (pull <= threeStarChance) {
                rewards.push("3");
            };
            if (pull > threeStarChance && pull <= threeStarChance + fourStarChance) {
                rewards.push("4");
                if (highest < 4) {
                    highest = 4;
                };
            };
            if (pull > threeStarChance + fourStarChance && pull <= threeStarChance + fourStarChance + fiveStarChance) {
                rewards.push("5");
                highest = 5;
            };
        };
        if (type == 2) {
            if (pull <= twoStarChance) {
                rewards.push("2");
            };
            if (pull > twoStarChance && pull <= twoStarChance + threeStarChance) {
                rewards.push("3");
            };
            if (pull > twoStarChance + threeStarChance && pull <= twoStarChance + threeStarChance + fourStarChance) {
                rewards.push("4");
            };
        };
        if (type == 3 || type == 4) {
            if (pull <= oneStarChance) {
                rewards.push("1");
            };
            if (pull > oneStarChance && pull <= oneStarChance + twoStarChance) {
                rewards.push("2");
            };
            if (pull > oneStarChance + twoStarChance && pull <= oneStarChance + twoStarChance + threeStarChance) {
                rewards.push("3");
            };
            if (pull > oneStarChance + twoStarChance + threeStarChance && pull <= oneStarChance + twoStarChance + threeStarChance + fourStarChance) {
                rewards.push("4");
            };
            if (pull > oneStarChance + twoStarChance + threeStarChance + fourStarChance && pull <= oneStarChance + twoStarChance + threeStarChance + fourStarChance + fiveStarChance) {
                rewards.push("5");
            };
        };
        //alert("u pulled a " + rewards[rewards.length - 1] + "-star!!");
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
    mode = 1;
    //alert("completed execution");
});

continueButton.addEventListener("click", function() {
    if (mode == 1) {
        mode = 2;
        message.innerHTML = "you pulled: " + rewards.toString() + ". good job!!!";
        message.style = "visibility: visible;";
        continueButton.innerHTML = "OK";
        continueButton.style = "visibility: visible;";
        onePull.style = "visibility: visible;";
        largePull.style = "visibility: visible;";
        rewards.length = 0;
        //alert("awards are displayed!");
    } else if (mode == 2) {
        mode = 0;
        message.innerHTML = "";
        message.style = "visibility: hidden;";
        continueButton.innerHTML = "";
        continueButton.style = "visibility: hidden;";
    };
});

colorBlindHelp.addEventListener("click", function() {
    if (colorBlindOn == true) {
        document.html.class = "colorBlind";
        colorBlindOn = false;
    } else {
        document.html.class = "";
        colorBlindOn = true;
    };
    //alert("set color blind mode to " + colorBlindOn);
});