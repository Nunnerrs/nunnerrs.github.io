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
var pullText = "You pulled: ";
var max = 100;
var mode = 0;

const rewardTypes = [
    //3-stars, 4-stars, 5-stars
    [
        ["⭐⭐⭐ Black Tassel", "⭐⭐⭐ Bloodtainted Greatsword", "⭐⭐⭐ Cool Steel", "⭐⭐⭐ Debate Club", "⭐⭐⭐ Emerald Orb", "⭐⭐⭐ Ferrous Shadow", "⭐⭐⭐ Harbinger of Dawn", "⭐⭐⭐ Magic Guide", "⭐⭐⭐ Raven Bow", "⭐⭐⭐ Sharpshooter's Oath", "⭐⭐⭐ Skyrider Sword", "⭐⭐⭐ Slingshot", "⭐⭐⭐ Thrilling Tales of Dragon Tales", "⭐⭐⭐ White Tassel"];
        ["⭐⭐⭐⭐ Amber ", "⭐⭐⭐⭐ Barbara ", "⭐⭐⭐⭐ Bennett ", "⭐⭐⭐⭐ Diona ❄", "⭐⭐⭐⭐ Fiscl ⚡", "⭐⭐⭐⭐ Gorou 直", "⭐⭐⭐⭐ Kaeya ❄", "⭐⭐⭐⭐ Lisa ⚡", "⭐⭐⭐⭐ Ningguang 直", "⭐⭐⭐⭐ Noelle 直", "⭐⭐⭐⭐ Razor ⚡", "⭐⭐⭐⭐ Shikanoin Heizou ", "⭐⭐⭐⭐ Sucrose ", "⭐⭐⭐⭐ Xiangling ", "⭐⭐⭐⭐ Xingqiu ", "⭐⭐⭐⭐ Xinyan ", "⭐⭐⭐⭐ Yanfei "],
        ["⭐⭐⭐⭐⭐ Albeido 直", "⭐⭐⭐⭐⭐ Arataki Itto ", "⭐⭐⭐⭐⭐ Diluc ", "⭐⭐⭐⭐⭐ Ganyu ❄", "⭐⭐⭐⭐⭐ Hu Tao ", "⭐⭐⭐⭐⭐ Jean ", "⭐⭐⭐⭐⭐ Keqing ⚡", "⭐⭐⭐⭐⭐ Klee ", "⭐⭐⭐⭐⭐ Mona ", "⭐⭐⭐⭐⭐ Nahida ", "⭐⭐⭐⭐⭐ Nilou ", "⭐⭐⭐⭐⭐ Qiqi ❄", "⭐⭐⭐⭐⭐ Raiden Shogun ⚡", "⭐⭐⭐⭐⭐ Sangonomiya Kokomi ", "⭐⭐⭐⭐⭐ Wanderer ", "⭐⭐⭐⭐⭐ Yae Miko ⚡", "⭐⭐⭐⭐⭐ Yoimiya ", "⭐⭐⭐⭐⭐ Zhongli 直"]
    ],
    
    //2-stars, 3-stars, 4-stars
    [
        ["⭐⭐ Ako Udagawa", "⭐⭐ Arisa Ichigaya", "⭐⭐ Aya Maruyama", "⭐⭐ CHU²", "⭐⭐ Hina Hikawa", "⭐⭐ Kasumi Toyama", "⭐⭐ LAYER", "⭐⭐ Misaki Okusawa", "⭐⭐ Nanami Hiromachi", "⭐⭐ Ran Mitake", "⭐⭐ Rui Yashio", "⭐⭐ Sayo Hikawa", "⭐⭐ Tae Hanazono", "⭐⭐ Yukina Minato"],
        ["⭐⭐⭐ Ako Udagawa", "⭐⭐⭐ Arisa Ichigaya", "⭐⭐⭐ Aya Maruyama", "⭐⭐⭐ CHU²", "⭐⭐⭐ Hina Hikawa", "⭐⭐⭐ Kasumi Toyama", "⭐⭐⭐ LAYER", "⭐⭐⭐ Misaki Okusawa", "⭐⭐⭐ Nanami Hiromachi", "⭐⭐⭐ Ran Mitake", "⭐⭐⭐ Rui Yashio", "⭐⭐⭐ Sayo Hikawa", "⭐⭐⭐ Tae Hanazono", "⭐⭐⭐ Yukina Minato"],
        ["⭐⭐⭐⭐ Ako Udagawa", "⭐⭐⭐⭐ Arisa Ichigaya", "⭐⭐⭐⭐ Aya Maruyama", "⭐⭐⭐⭐ CHU²", "⭐⭐⭐⭐ Hina Hikawa", "⭐⭐⭐⭐ Kasumi Toyama", "⭐⭐⭐⭐ LAYER", "⭐⭐⭐⭐ Misaki Okusawa", "⭐⭐⭐⭐ Nanami Hiromachi", "⭐⭐⭐⭐ Ran Mitake", "⭐⭐⭐⭐ Rui Yashio", "⭐⭐⭐⭐ Sayo Hikawa", "⭐⭐⭐⭐ Tae Hanazono", "⭐⭐⭐⭐ Yukina Minato"]
    ],
    
    //Common, Uncommon, Rare, Ultra Rare, Legendary
    [
        [""],
        ["Magic Panda"],
        ["Dice"],
        ["Red Dice", "Circus Stack"],
        ["Golden Lion"]
    ],
    
    //Common, Unique, Rare, Epic, Legendary
    [
        ["Magic Mouse"],
        ["Magic Panda"],
        ["Dice"],
        ["Red Dice", "Circus Stack"],
        ["Golden Lion"]
    ]
];

const rewards = [];

submit.addEventListener("click", function() {
    let type = gachaType.value;
    if (type == 1) {
        largePullAmount = 10;
        //oneStars = false;
        //twoStars = false;
        //fiveStars = true;
        oneStarChance = 0;
        twoStarChance = 0;
        threeStarChance = 85;
        fourStarChance = 14;
        fiveStarChance = 1;
        pullText = "You pulled: ";
        max = 100;
        alert("set to rpg");
    } else if (type == 2) {
        largePullAmount = 10;
        //oneStars = false;
        //twoStars = true;
        //fiveStars = false;
        oneStarChance = 0;
        twoStarChance = 885;
        threeStarChance = 85;
        fourStarChance = 30;
        fiveStarChance = 0;
        pullText = "You pulled: ";
        max = 1000;
        alert("set to band");
    } else if (type == 3) {
        largePullAmount = 0;
        //oneStars = true;
        //twoStars = true;
        //fiveStars = true;
        oneStarChance = 22;
        twoStarChance = 19;
        threeStarChance = 34;
        fourStarChance = 20;
        fiveStarChance = 5;
        pullText = "You hatched: ";
        max = 100;
        alert("set to adopt");
    } else if (type == 4) {
        largePullAmount = 3;
        //oneStars = true;
        //twoStars = true;
        //fiveStars = true;
        oneStarChance = 394;
        twoStarChance = 265;
        threeStarChance = 200;
        fourStarChance = 140;
        fiveStarChance = 1;
        pullText = "You hatched: ";
        max = 1000;
        alert("set to bubblegum");
    };
    if (largePullAmount <= 1) {
        largePull.style = "visibility: hidden;";
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
    let rewardNames = rewardTypes[type];
    let reward = null;

    if (type == 1) {
        if (pull <= threeStarChance) {
            reward = 3;
        };
        if (pull > threeStarChance && pull <= threeStarChance + fourStarChance) {
            reward = 4;
            continueButton.style = "color: rgb(200, 150, 255); visibility: visible;";
        };
        if (pull > threeStarChance + fourStarChance && pull <= threeStarChance + fourStarChance + fiveStarChance) {
            reward = 5;
            continueButton.style = "color: rgb(255, 175, 100); visibility: visible;"
        };
        rewards.push(rewardNames[reward - 3][Math.floor(Math.random() * (rewardNames[reward - 3].length - 1))]);
        message.innerHTML = "Click to continue";
        continueButton.innerHTML = "★";
    };
    if (type == 2) {
        if (pull <= twoStarChance) {
            reward = 2;
        };
        if (pull > twoStarChance && pull <= twoStarChance + threeStarChance) {
            reward = 3;
        };
        if (pull > twoStarChance + threeStarChance && pull <= twoStarChance + threeStarChance + fourStarChance) {
            reward = 4;
        };
        rewards.push(rewardNames[reward - 2][Math.floor(Math.random() * (rewardNames[reward - 2].length - 1))]);
        message.innerHTML = "Click to cut";
        continueButton.innerHTML = "🎫";
    };
    if (type == 3 || type == 4) {
        if (pull <= oneStarChance) {
            reward = 1;
        };
        if (pull > oneStarChance && pull <= oneStarChance + twoStarChance) {
            reward = 2;
        };
        if (pull > oneStarChance + twoStarChance && pull <= oneStarChance + twoStarChance + threeStarChance) {
            reward = 3;
        };
        if (pull > oneStarChance + twoStarChance + threeStarChance && pull <= oneStarChance + twoStarChance + threeStarChance + fourStarChance) {
            reward = 4;
        };
        if (pull > oneStarChance + twoStarChance + threeStarChance + fourStarChance && pull <= oneStarChance + twoStarChance + threeStarChance + fourStarChance + fiveStarChance) {
            reward = 5;
        };
        rewards.push(rewardNames[reward - 1][Math.floor(Math.random() * (rewardNames[reward - 1].length - 1))]);
        message.innerHTML = "Click to hatch";
        continueButton.innerHTML = "🥚";
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
    //alert(largePullAmount + " pull…");
    onePull.style = "visibility: hidden";
    largePull.style = "visibility: hidden";
    message.style = "visibility: visible;";
    continueButton.style = "visibility: visible;";
    let highest = 3;

    for (let i = 1; i <= largePullAmount; i++) {
        //alert("1 pull…");
        let type = gachaType.value;
        let pull = Math.floor(Math.random() * max) + 1;
        let rewardNames = rewardTypes[type];
        let reward = null;

        if (type == 1) {
            if (pull <= threeStarChance) {
                reward = 3;
            };
            if (i == largePullAmount) {
                reward = 4;
            };
            if (pull > threeStarChance && pull <= threeStarChance + fourStarChance) {
                reward = 4;
                if (highest < 4) {
                    highest = 4;
                };
            };
            if (pull > threeStarChance + fourStarChance && pull <= threeStarChance + fourStarChance + fiveStarChance) {
                reward = 5;
                highest = 5;
            };
            rewards.push(rewardNames[reward - 3][Math.floor(Math.random() * (rewardNames[reward - 3].length - 1))]);
        };
        if (type == 2) {
            if (pull <= twoStarChance) {
                reward = 2;
            };
            if (i == largePullAmount) {
                reward = 3;
            };
            if (pull > twoStarChance && pull <= twoStarChance + threeStarChance) {
                reward = 3;
            };
            if (pull > twoStarChance + threeStarChance && pull <= twoStarChance + threeStarChance + fourStarChance) {
                reward = 4;
            };
            rewards.push(rewardNames[reward - 2][Math.floor(Math.random() * (rewardNames[reward - 2].length - 1))])
        };
        if (type == 3 || type == 4) {
            if (pull <= oneStarChance) {
                reward = 1;
            };
            if (pull > oneStarChance && pull <= oneStarChance + twoStarChance) {
                reward = 2;
            };
            if (pull > oneStarChance + twoStarChance && pull <= oneStarChance + twoStarChance + threeStarChance) {
                reward = 3;
            };
            if (pull > oneStarChance + twoStarChance + threeStarChance && pull <= oneStarChance + twoStarChance + threeStarChance + fourStarChance) {
                reward = 4;
            };
            if (pull > oneStarChance + twoStarChance + threeStarChance + fourStarChance && pull <= oneStarChance + twoStarChance + threeStarChance + fourStarChance + fiveStarChance) {
                reward = 5;
            };
            rewards.push(rewardNames[reward - 1][Math.floor(Math.random() * (rewardNames[reward - 1].length - 1))]);
        };
        //alert("u pulled a " + rewards[rewards.length - 1] + "-star!!");
    };
    
    if (highest == 4) {
        continueButton.style = "color: rgb(200, 150, 255); visibility: visible;"
    };
    if (highest == 5) {
        continueButton.style = "color: rgb(255, 175, 100); visibility: visible;"
    };
    if (Number(gatchaType.value) == 1) {
        message.innerHTML = "Click to continue";
        continueButton.innerHTML = "★";
    };
    if (Number(gatchaType.value) == 2) {
        message.innerHTML = "Click to cut";
        continueButton.innerHTML = "🎫";
    };
    if (Number(gatchaType.value) == 3 || Number(gatchaType.value) == 4) {
        message.innerHTML = "Click to hatch";
        continueButton.innerHTML = "🥚";
    };
    mode = 1;
    alert(typeof gachaType.value);
});

continueButton.addEventListener("click", function() {
    if (mode == 1) {
        mode = 2;
        message.innerHTML = pullText;
        if (rewards[1]) {
            for (let i = 0; i < rewards.length; i++) {
                message.innerHTML = message.innerHTML + rewards[i] + ", ";
            };
        } else {
            message.innerHTML = pullText + rewards[0];
        };
        message.style = "visibility: visible;";
        continueButton.innerHTML = "OK";
        continueButton.style = "color: rgb(220, 60, 125); visibility: visible;";
        onePull.style = "visibility: hidden;";
        largePull.style = "visibility: hidden;";
        rewards.length = 0;
        //alert("awards are displayed!");
    } else if (mode == 2) {
        mode = 0;
        message.innerHTML = "";
        message.style = "visibility: hidden;";
        continueButton.innerHTML = "";
        continueButton.style = "visibility: hidden;";
        onePull.style = "visibility: visible;";
        if (largePullAmount > 1) {
            largePull.style = "visibility: visible;";
        };
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
