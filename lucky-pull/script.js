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
var threeStarChance = 943;
var fourStarChance = 51;
var fiveStarChance = 6;
var gachaText = "Based on the character wish in Genshin Impact";
var onePullText = "1 pull";
var largePullText = "10 pull";
var pullText = "You pulled: ";
var max = 1000;
var mode = 0;

const rewardTypes = [
    //3-stars, 4-stars, 5-stars
    [
        ["⭐⭐⭐ Black Tassel", "⭐⭐⭐ Bloodtainted Greatsword", "⭐⭐⭐ Cool Steel", "⭐⭐⭐ Debate Club", "⭐⭐⭐ Emerald Orb", "⭐⭐⭐ Ferrous Shadow", "⭐⭐⭐ Harbinger of Dawn", "⭐⭐⭐ Magic Guide", "⭐⭐⭐ Raven Bow", "⭐⭐⭐ Sharpshooter's Oath", "⭐⭐⭐ Skyrider Sword", "⭐⭐⭐ Slingshot", "⭐⭐⭐ Thrilling Tales of Dragon Tales", "⭐⭐⭐ White Tassel"],
        ["⭐⭐⭐⭐ Amber 🔥", "⭐⭐⭐⭐ Barbara 💧", "⭐⭐⭐⭐ Beidou ⚡️️", "⭐⭐⭐⭐ Bennett 🔥", "⭐⭐⭐⭐ Candace 💧", "⭐⭐⭐⭐ Chongyun ❄️", "⭐⭐⭐⭐ Collei 🌱", "⭐⭐⭐⭐ Diona ❄️", "⭐⭐⭐⭐ Dori ⚡️", "⭐⭐⭐⭐ Dragon's Bane", "⭐⭐⭐⭐ Faruzan 💨", "⭐⭐⭐⭐ Favonius Codex", "⭐⭐⭐⭐ Favonius Bow", "⭐⭐⭐⭐ Favonius Greatsword", "⭐⭐⭐⭐ Favonius Lance", "⭐⭐⭐⭐ Favonius Sword", "⭐⭐⭐⭐ Fiscl ⚡️", "⭐⭐⭐⭐ Gorou 🪨", "⭐⭐⭐⭐ Kaeya ❄️", "⭐⭐⭐⭐ Kujou Sara ⚡️", "⭐⭐⭐⭐ Kuki Shinobu ⚡️", "⭐⭐⭐⭐ Layla ❄️", "⭐⭐⭐⭐ Lisa ⚡️", "⭐⭐⭐⭐ Mika ❄️", "⭐⭐⭐⭐ Ningguang 🪨", "⭐⭐⭐⭐ Noelle 🪨", "⭐⭐⭐⭐ Rainslasher", "⭐⭐⭐⭐ Razor ⚡️", "⭐⭐⭐⭐ Rust", "⭐⭐⭐⭐ Sacrificial Bow", "⭐⭐⭐⭐ Sacrificial Fragments", "⭐⭐⭐⭐ Sacrificial Greatsword", "⭐⭐⭐⭐ Sacrificial Sword", "⭐⭐⭐⭐ Sayu 💨", "⭐⭐⭐⭐ Shikanoin Heizou 💨", "⭐⭐⭐⭐ Sucrose 💨", "⭐⭐⭐⭐ The Bell", "⭐⭐⭐⭐ The Flute", "⭐⭐⭐⭐ The Stringless", "⭐⭐⭐⭐ The Widsith", "⭐⭐⭐⭐ Thoma 🔥", "⭐⭐⭐⭐ Xiangling 🔥", "⭐⭐⭐⭐ Xingqiu 💧", "⭐⭐⭐⭐ Xinyan 🔥", "⭐⭐⭐⭐ Yanfei 🔥"],
        ["⭐⭐⭐⭐⭐ Albeido 🪨", "⭐⭐⭐⭐⭐ Arataki Itto 🪨", "⭐⭐⭐⭐⭐ Cyno ⚡️", "⭐⭐⭐⭐⭐ Dehya 🔥", "⭐⭐⭐⭐⭐ Diluc 🔥", "⭐⭐⭐⭐⭐ Eula ❄️", "⭐⭐⭐⭐⭐ Ganyu ❄️", "⭐⭐⭐⭐⭐ Hu Tao 🔥", "⭐⭐⭐⭐⭐ Jean 💨", "⭐⭐⭐⭐⭐ Kaedehara Kazuha 💨", "⭐⭐⭐⭐⭐ Kamisato Ayaka ❄️", "⭐⭐⭐⭐⭐ Kamisato Ayato 💧", "⭐⭐⭐⭐⭐ Keqing ⚡️", "⭐⭐⭐⭐⭐ Klee 🔥", "⭐⭐⭐⭐⭐ Mona 💧", "⭐⭐⭐⭐⭐ Nahida 🌱", "⭐⭐⭐⭐⭐ Nilou 💧", "⭐⭐⭐⭐⭐ Qiqi ❄️", "⭐⭐⭐⭐⭐ Raiden Shogun ⚡️", "⭐⭐⭐⭐⭐ Rosaria ❄️", "⭐⭐⭐⭐⭐ Sangonomiya Kokomi 💧", "⭐⭐⭐⭐⭐ Shenhe ❄️", "⭐⭐⭐⭐⭐ Tartaglia 💧", "⭐⭐⭐⭐⭐ Tighnari 🌱", "⭐⭐⭐⭐⭐ Venti 💨", "⭐⭐⭐⭐⭐ Wanderer 💨", "⭐⭐⭐⭐⭐ Xiao 💨", "⭐⭐⭐⭐⭐ Yae Miko ⚡️", "⭐⭐⭐⭐⭐ Yelan 💧", "⭐⭐⭐⭐⭐ Yoimiya 🔥", "⭐⭐⭐⭐⭐ Yun Jin 🪨", "⭐⭐⭐⭐⭐ Zhongli 🪨"]
    ],
    
    //2-stars, 3-stars, 4-stars
    [
        ["⭐⭐ Ako Udagawa", "⭐⭐ Arisa Ichigaya", "⭐⭐ Aya Maruyama", "⭐⭐ Chisato Shirasagi", "⭐⭐ CHU²", "⭐⭐ Eve Wakamiya", "⭐⭐ Hagumi Kitazawa", "⭐⭐ Himari Uehara", "⭐⭐ Hina Hikawa", "⭐⭐ Kanon Matsubara", "⭐⭐ Kaoru Seta", "⭐⭐ Kasumi Toyama", "⭐⭐ Kokoro Tsurumaki", "⭐⭐ LAYER", "⭐⭐ Lisa Imai", "⭐⭐ LOCKE", "⭐⭐ Mashiro Kurata", "⭐⭐ MASKING", "⭐⭐ Maya Yamato", "⭐⭐ Misaki Okusawa", "⭐⭐ Moca Aoba", "⭐⭐ Nanami Hiromachi", "⭐⭐ PAREO", "⭐⭐ Ran Mitake", "⭐⭐ Rimi Ushigome", "⭐⭐ Rinko Shirokane", "⭐⭐ Rui Yashio", "⭐⭐ Saaya Yamabuki", "⭐⭐ Sayo Hikawa", "⭐⭐ Tae Hanazono", "⭐⭐ Tomoe Udagawa", "⭐⭐ Touko Kirigaya", "⭐⭐ Tsugumi Hazawa", "⭐⭐ Tsukushi Futara", "⭐⭐ Yukina Minato"],
        ["⭐⭐⭐ Ako Udagawa", "⭐⭐⭐ Arisa Ichigaya", "⭐⭐⭐ Aya Maruyama", "⭐⭐⭐ Chisato Shirasagi", "⭐⭐⭐ CHU²", "⭐⭐⭐ Eve Wakamiya", "⭐⭐⭐ Hagumi Kitazawa", "⭐⭐⭐ Himari Uehara", "⭐⭐⭐ Hina Hikawa", "⭐⭐⭐ Kanon Matsubara", "⭐⭐⭐ Kaoru Seta", "⭐⭐⭐ Kasumi Toyama", "⭐⭐⭐ Kokoro Tsurumaki", "⭐⭐⭐ LAYER", "⭐⭐⭐ Lisa Imai", "⭐⭐⭐ LOCKE", "⭐⭐⭐ Mashiro Kurata", "⭐⭐⭐ MASKING", "⭐⭐⭐ Maya Yamato", "⭐⭐⭐ Misaki Okusawa", "⭐⭐⭐ Moca Aoba", "⭐⭐⭐ Nanami Hiromachi", "⭐⭐⭐ PAREO", "⭐⭐⭐ Ran Mitake", "⭐⭐⭐ Rimi Ushigome", "⭐⭐⭐ Rinko Shirokane", "⭐⭐⭐ Rui Yashio", "⭐⭐⭐ Saaya Yamabuki", "⭐⭐⭐ Sayo Hikawa", "⭐⭐⭐ Tae Hanazono", "⭐⭐⭐ Tomoe Udagawa", "⭐⭐⭐ Touko Kirigaya", "⭐⭐⭐ Tsugumi Hazawa", "⭐⭐⭐ Tsukushi Futara", "⭐⭐⭐ Yukina Minato"],
        ["⭐⭐⭐⭐ Ako Udagawa", "⭐⭐⭐⭐ Arisa Ichigaya", "⭐⭐⭐⭐ Aya Maruyama", "⭐⭐⭐⭐ Chisato Shirasagi", "⭐⭐⭐⭐ CHU²", "⭐⭐⭐⭐ Eve Wakamiya", "⭐⭐⭐⭐ Hagumi Kitazawa", "⭐⭐⭐⭐ Himari Uehara", "⭐⭐⭐⭐ Hina Hikawa", "⭐⭐⭐⭐ Kanon Matsubara", "⭐⭐⭐⭐ Kaoru Seta", "⭐⭐⭐⭐ Kasumi Toyama", "⭐⭐⭐⭐ Kokoro Tsurumaki", "⭐⭐⭐⭐ LAYER", "⭐⭐⭐⭐ Lisa Imai", "⭐⭐⭐⭐ LOCKE", "⭐⭐⭐⭐ Mashiro Kurata", "⭐⭐⭐⭐ MASKING", "⭐⭐⭐⭐ Maya Yamato", "⭐⭐⭐⭐ Misaki Okusawa", "⭐⭐⭐⭐ Moca Aoba", "⭐⭐⭐⭐ Nanami Hiromachi", "⭐⭐⭐⭐ PAREO", "⭐⭐⭐⭐ Ran Mitake", "⭐⭐⭐⭐ Rimi Ushigome", "⭐⭐⭐⭐ Rinko Shirokane", "⭐⭐⭐⭐ Rui Yashio", "⭐⭐⭐⭐ Saaya Yamabuki", "⭐⭐⭐⭐ Sayo Hikawa", "⭐⭐⭐⭐ Tae Hanazono", "⭐⭐⭐⭐ Tomoe Udagawa", "⭐⭐⭐⭐ Touko Kirigaya", "⭐⭐⭐⭐ Tsugumi Hazawa", "⭐⭐⭐⭐ Tsukushi Futara", "⭐⭐⭐⭐ Yukina Minato"]
    ],
    
    //Common, Uncommon, Rare, Ultra Rare, Legendary
    [
        ["Bali Starling", "Malaysian Tapir", "Maleo Bird"],
        ["Yellow-lipped Sea Krait", "Banded Palm Civet"],
        ["Gecko", "Tarsier",],
        ["Binturong", "Black Macaque", "Komodo Dragon"],
        ["Naga Dragon", "Tree Kangaroo"]
    ],
    
    //Common, Unique, Rare, Epic, Legendary
    [
        ["Magic Mouse"],
        ["Magic Panda"],
        ["Dice"],
        ["Red Dice"],
        ["Circus Stack"],
        ["Golden Lion"]
    ]
];

const rewards = [];

function changeType() {
    let type = gachaType.value;
    if (type == 1) {
        largePullAmount = 10;
        //oneStars = false;
        //twoStars = false;
        //fiveStars = true;
        oneStarChance = 0;
        twoStarChance = 0;
        threeStarChance = 943;
        fourStarChance = 51;
        fiveStarChance = 6;
        gachaText = "Based on the character wish in Genshin Impact";
        onePullText = "1 pull";
        largePullText = "10 pull";
        pullText = "You pulled: ";
        max = 1000;
        //alert("Set type to Genshin");
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
        gachaText = "Based on a general banner in Bandori";
        onePullText = "1 pull";
        largePullText = "10 pull";
        pullText = "You pulled: ";
        max = 1000;
        //alert("Set to Bandori");
    } else if (type == 3) {
        largePullAmount = 0;
        //oneStars = true;
        //twoStars = true;
        //fiveStars = true;
        oneStarChance = 35;
        twoStarChance = 25;
        threeStarChance = 20;
        fourStarChance = 16;
        fiveStarChance = 4;
        gachaText = "Based on the current Gumball Machine egg in Adopt Me! (Currently Southeast Asia Egg)";
        onePullText = "Hatch 1";
        largePullText = "--";
        pullText = "You hatched: ";
        max = 100;
        //alert("Set to Adopt Me!");
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
        gachaText = "Based on the retired Magic Egg in Bubble Gum Simulator";
        onePullText = "Hatch 1";
        largePullText = "Hatch 3";
        pullText = "You hatched: ";
        max = 1000;
        //alert("Set to Bubble gum");
    };
    if (largePullAmount <= 1) {
        largePull.style = "visibility: hidden;";
    };
    message.innerHTML = gachaText;
};

gachaType.addEventListener("touchend", changeType);
gatchaType.addEventListener("mouseout", changeType);/*function() {
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
        gachaText = "Based on the character wish in Genshin Impact";
        onePullText = "1 pull";
        largePullText = "10 pull";
        pullText = "You pulled: ";
        max = 100;
        //alert("Set type to Genshin");
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
        gachaText = "Based on a general banner in Bandori";
        onePullText = "1 pull";
        largePullText = "10 pull";
        pullText = "You pulled: ";
        max = 1000;
        //alert("Set to Bandori");
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
        gachaText = "Based on the current Gumball Machine egg in Adopt Me! (Currently Japan Egg)";
        onePullText = "Hatch 1";
        largePullText = "--";
        pullText = "You hatched: ";
        max = 100;
        //alert("Set to Adopt Me!");
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
        gachaText = "Based on the retired Magic Egg in Bubble Gum Simulator";
        onePullText = "Hatch 1";
        largePullText = "Hatch 3";
        pullText = "You hatched: ";
        max = 1000;
        //alert("Set to Bubble gum");
    };
    if (largePullAmount <= 1) {
        largePull.style = "visibility: hidden;";
    };
    message.innerHTML = gachaText;
});*/

onePull.addEventListener("click", function() {
    //alert("1 pull…");
    onePull.style = "visibility: hidden;";
    largePull.style = "visibility: hidden;";
    message.style = "visibility: visible;";
    continueButton.style = "visibility: visible;";

    let type = gachaType.value;
    let pull = Math.floor(Math.random() * max) + 1;
    let rewardNames = rewardTypes[type - 1];
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
            if (type == 4) {
                reward = 6;
            } else {
                reward = 5;
            };
        };
        if (type == 4 && reward == 4) {
            let rng = Math.floor(Math.random() * 10) + 1
            if (rng >= 1 && rng <= 4) {
                rewards.push(rewardNames[4][Math.floor(Math.random() * (rewardNames[4].length - 1))]);
            } else {
                rewards.push(rewardNames[3][Math.floor(Math.random() * (rewardNames[3].length - 1))]);
            };
        } else {
            rewards.push(rewardNames[reward - 1][Math.floor(Math.random() * (rewardNames[reward - 1].length - 1))]);
        };
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
        let rewardNames = rewardTypes[type - 1];
        let reward = null;

        if (type == 1) {
            if (pull <= threeStarChance) {
                reward = 3;
            };
            if (i == largePullAmount) {
                reward = 4;
                if (highest < 4) {
                    highest = 4;
                };
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
        message.innerHTML = gachaText;
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
