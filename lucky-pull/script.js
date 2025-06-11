var gachaType = document.getElementById("selector");
var submit = document.getElementById("submit");
var onePullBtn = document.getElementById("one-pull");
var largePullBtn = document.getElementById("large-pull");
var message = document.getElementById("message");
var genshin = document.getElementById("genshin");
var continueButton = document.getElementById("continueButton");
var darkModeBtn = document.getElementById("dark-mode");
var darkMode = false;
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
    [
        /* 3 */ ["⭐⭐⭐ Black Tassel 🗡️", "⭐⭐⭐ Bloodtainted Greatsword 🗡️", "⭐⭐⭐ Cool Steel 🗡️", "⭐⭐⭐ Debate Club 🗡️", "⭐⭐⭐ Emerald Orb 📖", "⭐⭐⭐ Ferrous Shadow 🗡️", "⭐⭐⭐ Harbinger of Dawn 🗡️", "⭐⭐⭐ Magic Guide 📖", "⭐⭐⭐ Raven Bow 🏹", "⭐⭐⭐ Sharpshooter's Oath 🏹", "⭐⭐⭐ Skyrider Sword 🗡️", "⭐⭐⭐ Slingshot 🏹", "⭐⭐⭐ Thrilling Tales of Dragon Slayers 📖", "⭐⭐⭐ White Tassel 🗡️"],
        /* 4 */ ["⭐⭐⭐⭐ Amber 🔥", "⭐⭐⭐⭐ Barbara 💧", "⭐⭐⭐⭐ Beidou ⚡️️", "⭐⭐⭐⭐ Bennett 🔥", "⭐⭐⭐⭐ Candace 💧", "⭐⭐⭐⭐ Charlotte ❄️", "⭐⭐⭐⭐ Chevreuse 🔥", "⭐⭐⭐⭐ Chongyun ❄️", "⭐⭐⭐⭐ Collei 🌱", "⭐⭐⭐⭐ Diona ❄️", "⭐⭐⭐⭐ Dori ⚡️", "⭐⭐⭐⭐ Dragon's Bane 🗡️", "⭐⭐⭐⭐ Faruzan 💨", "⭐⭐⭐⭐ Favonius Codex 📖", "⭐⭐⭐⭐ Favonius Bow 🏹", "⭐⭐⭐⭐ Favonius Greatsword 🗡️", "⭐⭐⭐⭐ Favonius Lance 🗡️", "⭐⭐⭐⭐ Favonius Sword 🗡️", "⭐⭐⭐⭐ Fischl ⚡️", "⭐⭐⭐⭐ Freminet ❄️", "⭐⭐⭐⭐ Gaming 🔥", "⭐⭐⭐⭐ Gorou 🪨", "⭐⭐⭐⭐ Iansan ⚡️", "⭐⭐⭐⭐ Ifa 💨", "⭐⭐⭐⭐ Kachina 🪨", "⭐⭐⭐⭐ Kaeya ❄️", "⭐⭐⭐⭐ Kujou Sara ⚡️", "⭐⭐⭐⭐ Kuki Shinobu ⚡️", "⭐⭐⭐⭐ Lan Yan 💨", "⭐⭐⭐⭐ Layla ❄️", "⭐⭐⭐⭐ Lisa ⚡️", "⭐⭐⭐⭐ Lynette 💨", "⭐⭐⭐⭐ Mika ❄️", "⭐⭐⭐⭐ Ningguang 🪨", "⭐⭐⭐⭐ Noelle 🪨", "⭐⭐⭐⭐ Ororon ⚡️", "⭐⭐⭐⭐ Rainslasher 🗡️", "⭐⭐⭐⭐ Razor ⚡️", "⭐⭐⭐⭐ Rosaria ❄️", "⭐⭐⭐⭐ Rust 🏹", "⭐⭐⭐⭐ Sacrificial Bow 🏹", "⭐⭐⭐⭐ Sacrificial Fragments 📖", "⭐⭐⭐⭐ Sacrificial Greatsword 🗡️", "⭐⭐⭐⭐ Sacrificial Sword 🗡️", "⭐⭐⭐⭐ Sayu 💨", "⭐⭐⭐⭐ Sethos ⚡️", "⭐⭐⭐⭐ Shikanoin Heizou 💨", "⭐⭐⭐⭐ Sucrose 💨", "⭐⭐⭐⭐ The Bell 🗡️", "⭐⭐⭐⭐ The Flute 🗡️", "⭐⭐⭐⭐ The Stringless 🏹", "⭐⭐⭐⭐ The Widsith 📖", "⭐⭐⭐⭐ Thoma 🔥", "⭐⭐⭐⭐ Xiangling 🔥", "⭐⭐⭐⭐ Xingqiu 💧", "⭐⭐⭐⭐ Xinyan 🔥", "⭐⭐⭐⭐ Yanfei 🔥", "⭐⭐⭐⭐ Yaoyao 🌱", "⭐⭐⭐⭐ Yun Jin 🪨"],
        /* 5 */ ["⭐⭐⭐⭐⭐ Albedo 🪨", "⭐⭐⭐⭐⭐ Arataki Itto 🪨", "⭐⭐⭐⭐⭐ Chasca 💨", "⭐⭐⭐⭐⭐ Chiori 🪨", "⭐⭐⭐⭐⭐ Citlali ❄️", "⭐⭐⭐⭐⭐ Clorinde ⚡️", "⭐⭐⭐⭐⭐ Cyno ⚡️", "⭐⭐⭐⭐⭐ Dehya 🔥", "⭐⭐⭐⭐⭐ Diluc 🔥", "⭐⭐⭐⭐⭐ Emilie 🌱", /*"⭐⭐⭐⭐⭐ Escoffier ❄️",*/ "⭐⭐⭐⭐⭐ Eula ❄️", "⭐⭐⭐⭐⭐ Furina 💧", "⭐⭐⭐⭐⭐ Ganyu ❄️", "⭐⭐⭐⭐⭐ Hu Tao 🔥", "⭐⭐⭐⭐⭐ Jean 💨", "⭐⭐⭐⭐⭐ Kaedehara Kazuha 💨", "⭐⭐⭐⭐⭐ Kamisato Ayaka ❄️", "⭐⭐⭐⭐⭐ Kamisato Ayato 💧", "⭐⭐⭐⭐⭐ Keqing ⚡️", "⭐⭐⭐⭐⭐ Kinich 🌱", "⭐⭐⭐⭐⭐ Klee 🔥", "⭐⭐⭐⭐⭐ Lyney 🔥", "⭐⭐⭐⭐⭐ Mavuika 🔥", "⭐⭐⭐⭐⭐ Mona 💧", "⭐⭐⭐⭐⭐ Mualani 💧", "⭐⭐⭐⭐⭐ Nahida 🌱", "⭐⭐⭐⭐⭐ Navia 🪨", "⭐⭐⭐⭐⭐ Neuvillette 💧", "⭐⭐⭐⭐⭐ Nilou 💧", "⭐⭐⭐⭐⭐ Qiqi ❄️", "⭐⭐⭐⭐⭐ Raiden Shogun ⚡️", "⭐⭐⭐⭐⭐ Sangonomiya Kokomi 💧", "⭐⭐⭐⭐⭐ Shenhe ❄️", "⭐⭐⭐⭐⭐ Sigewinne 💧", "⭐⭐⭐⭐⭐ Tartaglia 💧", "⭐⭐⭐⭐⭐ Tighnari 🌱", "⭐⭐⭐⭐⭐ Varesa ⚡️", "⭐⭐⭐⭐⭐ Venti 💨", "⭐⭐⭐⭐⭐ Wanderer 💨", "⭐⭐⭐⭐⭐ Wriothesley ❄️", "⭐⭐⭐⭐⭐ Xianyun 💨", "⭐⭐⭐⭐⭐ Xiao 💨", "⭐⭐⭐⭐⭐ Xilonen 🪨", "⭐⭐⭐⭐⭐ Yae Miko ⚡️", "⭐⭐⭐⭐⭐ Yelan 💧", "⭐⭐⭐⭐⭐ Yoimiya 🔥", "⭐⭐⭐⭐⭐ Yumemizuki Mizuki 💨", "⭐⭐⭐⭐⭐ Zhongli 🪨"]
    ],
    
    [
        /* 2 */ ["⭐⭐ Ako Udagawa", "⭐⭐ Arisa Ichigaya", "⭐⭐ Aya Maruyama", "⭐⭐ Chisato Shirasagi", "⭐⭐ CHU²", "⭐⭐ Eve Wakamiya", "⭐⭐ Hagumi Kitazawa", "⭐⭐ Himari Uehara", "⭐⭐ Hina Hikawa", "⭐⭐ Kanon Matsubara", "⭐⭐ Kaoru Seta", "⭐⭐ Kasumi Toyama", "⭐⭐ Kokoro Tsurumaki", "⭐⭐ LAYER", "⭐⭐ Lisa Imai", "⭐⭐ LOCKE", "⭐⭐ Mashiro Kurata", "⭐⭐ MASKING", "⭐⭐ Maya Yamato", "⭐⭐ Misaki Okusawa", "⭐⭐ Moca Aoba", "⭐⭐ Nanami Hiromachi", "⭐⭐ PAREO", "⭐⭐ Ran Mitake", "⭐⭐ Rimi Ushigome", "⭐⭐ Rinko Shirokane", "⭐⭐ Rui Yashio", "⭐⭐ Saaya Yamabuki", "⭐⭐ Sayo Hikawa", "⭐⭐ Tae Hanazono", "⭐⭐ Tomoe Udagawa", "⭐⭐ Touko Kirigaya", "⭐⭐ Tsugumi Hazawa", "⭐⭐ Tsukushi Futaba", "⭐⭐ Yukina Minato"],
        /* 3 */ ["⭐⭐⭐ Ako Udagawa", "⭐⭐⭐ Arisa Ichigaya", "⭐⭐⭐ Aya Maruyama", "⭐⭐⭐ Chisato Shirasagi", "⭐⭐⭐ CHU²", "⭐⭐⭐ Eve Wakamiya", "⭐⭐⭐ Hagumi Kitazawa", "⭐⭐⭐ Himari Uehara", "⭐⭐⭐ Hina Hikawa", "⭐⭐⭐ Kanon Matsubara", "⭐⭐⭐ Kaoru Seta", "⭐⭐⭐ Kasumi Toyama", "⭐⭐⭐ Kokoro Tsurumaki", "⭐⭐⭐ LAYER", "⭐⭐⭐ Lisa Imai", "⭐⭐⭐ LOCKE", "⭐⭐⭐ Mashiro Kurata", "⭐⭐⭐ MASKING", "⭐⭐⭐ Maya Yamato", "⭐⭐⭐ Misaki Okusawa", "⭐⭐⭐ Moca Aoba", "⭐⭐⭐ Nanami Hiromachi", "⭐⭐⭐ PAREO", "⭐⭐⭐ Ran Mitake", "⭐⭐⭐ Rimi Ushigome", "⭐⭐⭐ Rinko Shirokane", "⭐⭐⭐ Rui Yashio", "⭐⭐⭐ Saaya Yamabuki", "⭐⭐⭐ Sayo Hikawa", "⭐⭐⭐ Tae Hanazono", "⭐⭐⭐ Tomoe Udagawa", "⭐⭐⭐ Touko Kirigaya", "⭐⭐⭐ Tsugumi Hazawa", "⭐⭐⭐ Tsukushi Futaba", "⭐⭐⭐ Yukina Minato"],
        /* 4 */ ["⭐⭐⭐⭐ Ako Udagawa", "⭐⭐⭐⭐ Arisa Ichigaya", "⭐⭐⭐⭐ Aya Maruyama", "⭐⭐⭐⭐ Chisato Shirasagi", "⭐⭐⭐⭐ CHU²", "⭐⭐⭐⭐ Eve Wakamiya", "⭐⭐⭐⭐ Hagumi Kitazawa", "⭐⭐⭐⭐ Himari Uehara", "⭐⭐⭐⭐ Hina Hikawa", "⭐⭐⭐⭐ Kanon Matsubara", "⭐⭐⭐⭐ Kaoru Seta", "⭐⭐⭐⭐ Kasumi Toyama", "⭐⭐⭐⭐ Kokoro Tsurumaki", "⭐⭐⭐⭐ LAYER", "⭐⭐⭐⭐ Lisa Imai", "⭐⭐⭐⭐ LOCKE", "⭐⭐⭐⭐ Mashiro Kurata", "⭐⭐⭐⭐ MASKING", "⭐⭐⭐⭐ Maya Yamato", "⭐⭐⭐⭐ Misaki Okusawa", "⭐⭐⭐⭐ Moca Aoba", "⭐⭐⭐⭐ Nanami Hiromachi", "⭐⭐⭐⭐ PAREO", "⭐⭐⭐⭐ Ran Mitake", "⭐⭐⭐⭐ Rimi Ushigome", "⭐⭐⭐⭐ Rinko Shirokane", "⭐⭐⭐⭐ Rui Yashio", "⭐⭐⭐⭐ Saaya Yamabuki", "⭐⭐⭐⭐ Sayo Hikawa", "⭐⭐⭐⭐ Tae Hanazono", "⭐⭐⭐⭐ Tomoe Udagawa", "⭐⭐⭐⭐ Touko Kirigaya", "⭐⭐⭐⭐ Tsugumi Hazawa", "⭐⭐⭐⭐ Tsukushi Futaba", "⭐⭐⭐⭐ Yukina Minato"]
    ],
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
        //pullText = "You pulled: ";
        pullText = "";
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
        gachaText = "Based on the banners in Bandori (no 5-stars or MyGO!!!!! yet)";
        onePullText = "1 pull";
        largePullText = "10 pull";
        pullText = "You pulled:<br>";
        max = 1000;
        //alert("Set to Bandori");
    }
	if (mode == 0) {
		if (largePullAmount <= 1) {
			largePullBtn.style = "position: fixed; visibility: hidden";
		} else {
			largePullBtn.style = "visibility: visible";
		}
	}
    //message.innerHTML = gachaText;
}
setInterval(changeType, 250);

function genshinPull(data) {
    let stars = "⭐";
    let name = "Chicken Mushroom Skewer";
    let icon = "🍗";
    //if (!data.match("Dragon's Bane") && !data.match("Favonius ") && !data.match("Rainslasher") && !data.match("Rust") && !data.match("Sacrificial ") && !data.match("The ")) {
        data = data.split(" ");
        stars = data[0];
        if (data.length == 3) {
            name = data[1];
            icon = data[2];
        }
        if (data.length > 3) {
            name = data[1];
            for (let i = 2; i < data.length - 1; i++) {
                name += " " + data[i];
            }
            //name = data[1] + " " + data[2];
            icon = data[data.length - 1];
        }
    //}
    let td = document.createElement("td");
    td.innerHTML = "<span>" + icon + "</span><br>" + stars + "<br>" + name + "</td>";
    if (stars.length == 5) {
        td.style.borderColor = "rgb(255, 220, 100)";
    } else if (stars.length == 4) {
        td.style.borderColor = "rgb(200, 150, 255)";
    } else {
        td.style.borderColor = "rgb(150, 215, 235)";
    }
    genshin.appendChild(td);
}

function onePull() {
    //alert("1 pull…");
    onePullBtn.style = "position: fixed; visibility: hidden";
    largePullBtn.style = "position: fixed; visibility: hidden";
    message.style = "visibility: visible";
    continueButton.style = "visibility: visible";

    let type = gachaType.value;
    let pull = Math.floor(Math.random() * max) + 1;
    let rewardNames = rewardTypes[type - 1];
    let reward = null;

    if (type == 1) {
        if (pull <= threeStarChance) {
            reward = 3;
        }
        if (pull > threeStarChance && pull <= threeStarChance + fourStarChance) {
            reward = 4;
            continueButton.style = "color: rgb(200, 150, 255); visibility: visible;";
        }
        if (pull > threeStarChance + fourStarChance && pull <= threeStarChance + fourStarChance + fiveStarChance) {
            reward = 5;
            continueButton.style = "color: rgb(255, 220, 100); visibility: visible;"
        }
        rewards.push(rewardNames[reward - 3][Math.floor(Math.random() * (rewardNames[reward - 3].length - 1))]);
        message.innerHTML = "Click anywhere to continue";
        continueButton.innerHTML = "★";
        setTimeout(function(){document.body.onclick = continuePull;}, 250);
    }
    if (type == 2) {
        if (pull <= twoStarChance) {
            reward = 2;
        }
        if (pull > twoStarChance && pull <= twoStarChance + threeStarChance) {
            reward = 3;
        }
        if (pull > twoStarChance + threeStarChance && pull <= twoStarChance + threeStarChance + fourStarChance) {
            reward = 4;
        }
        rewards.push(rewardNames[reward - 2][Math.floor(Math.random() * (rewardNames[reward - 2].length - 1))]);
        message.innerHTML = "Click to cut";
        continueButton.innerHTML = "🎫";
        setTimeout(function(){document.body.onclick = continuePull;}, 250);
    }

    /*if (oneStars == true && pull <= oneStarChance) {
        rewards.push("1");
    }
    if (oneStars == true && twoStars == true && pull > oneStarChance && pull <= oneStarChance + twoStarChance) {
        rewards.push("2");
    }
    if (oneStars == false && twoStars == true && pull <= twoStarChance) {
        rewards.push("2");
    }
    if (oneStars == true && twoStars == true && pull > oneStarChance + twoStarChance && pull <= oneStarChance + twoStarChance + threeStarChance) {
        rewards.push("3");
    }
    if (oneStars == false && twoStars == true && pull > twoStarChance && pull <= twoStarChance + threeStarChance) {
        rewards.push("3");
    }
    if (twoStars == true && pull <= twoStarChance + threeStarChance) {
        rewards.push("3");
    }
    if (twoStars == false && pull <= threeStarChance) {
        rewards.push("3");
    }
    if (pull > threeStarChance && pull <= threeStarChance + fourStarChance) {
        rewards.push("4");
    }
    if (fiveStars == true && pull > threeStarChance + fourStarChance && pull <= threeStarChance + fourStarChance + fiveStarChance) {
        rewards.push("5");
    }*/
    mode = 1;
    //alert("u pulled a " + rewards[rewards.length - 1] + "-star!!");
}
onePullBtn.onclick = onePull

function largePull() {
    //alert(largePullAmount + " pull…");
    onePullBtn.style = "visibility: hidden";
    largePullBtn.style = "visibility: hidden";
    message.style = "visibility: visible;";
    continueButton.style = "visibility: visible;";
    let highest = 2;

    for (let i = 1; i <= largePullAmount; i++) {
        //alert("1 pull…");
        let type = gachaType.value;
        let pull = Math.floor(Math.random() * max) + 1;
        let rewardNames = rewardTypes[type - 1];
        let reward = null;

        if (type == 1) {
            if (pull <= threeStarChance) {
                reward = 3;
            }
            if (i == largePullAmount && highest < 4) {
                reward = 4;
                if (highest < 4) {
                    highest = 4;
                }
            }
            if (pull > threeStarChance && pull <= threeStarChance + fourStarChance) {
                reward = 4;
                if (highest < 4) {
                    highest = 4;
                }
            }
            if (pull > threeStarChance + fourStarChance && pull <= threeStarChance + fourStarChance + fiveStarChance) {
                reward = 5;
                highest = 5;
            }
            rewards.push(rewardNames[reward - 3][Math.floor(Math.random() * (rewardNames[reward - 3].length - 1))]);
        }
        if (type == 2) {
            if (pull <= twoStarChance) {
                reward = 2;
            }
            if (i == largePullAmount && highest < 3) {
                reward = 3;
            }
            if (pull > twoStarChance && pull <= twoStarChance + threeStarChance) {
                reward = 3;
            }
            if (pull > twoStarChance + threeStarChance && pull <= twoStarChance + threeStarChance + fourStarChance) {
                reward = 4;
            }
            rewards.push(rewardNames[reward - 2][Math.floor(Math.random() * (rewardNames[reward - 2].length - 1))])
        }
        //alert("u pulled a " + rewards[rewards.length - 1] + "-star!!");
    }
    
    setTimeout(function(){
        if (highest == 4) {
            continueButton.style = "color: rgb(200, 150, 255); visibility: visible;"
        }
        if (highest == 5) {
            continueButton.style = "color: rgb(255, 220, 100); visibility: visible;"
        }
    }, 150);
    if (Number(gachaType.value) == 1) {
        message.innerHTML = "Click to continue";
        continueButton.innerHTML = "★";
    }
    if (Number(gachaType.value) == 2) {
        message.innerHTML = "Click to cut";
        continueButton.innerHTML = "🎫";
    }
    mode = 1;
    setTimeout(function(){document.body.onclick = continuePull;}, 250);
}
largePullBtn.onclick = largePull;

function continuePull() {
    if (mode == 1) {
        mode = 2;
        message.innerHTML = pullText;
        //if (rewards[1]) {
        if (gachaType.value == 1) {
            for (let i = 0; i < rewards.length; i++) {
                genshinPull(rewards[i])
                //message.innerHTML = message.innerHTML + rewards[i] + ", ";
            }
        } else {
            for (let i = 0; i < rewards.length - 1; i++) {
                message.innerHTML += rewards[i] + ", ";
            }
            message.innerHTML += rewards[rewards.length - 1];
        }
        /*} else {
            message.innerHTML = pullText + rewards[0];
        }*/
        message.style = "visibility: visible;";
        continueButton.innerHTML = "OK";
        continueButton.style = "color: rgb(220, 60, 125); transition: none; visibility: visible;";
        //space.style = "position: fixed";
        onePullBtn.style = "position: fixed; visibility: hidden";
        largePullBtn.style = "position: fixed; visibility: hidden";
        rewards.length = 0;
        //alert("awards are displayed!");
    } else if (mode == 2) {
        mode = 0;
        message.innerHTML = gachaText;
        message.style = "visibility: hidden;";
        genshin.innerHTML = "";
        continueButton.innerHTML = "";
        continueButton.style = "visibility: hidden;";
        onePullBtn.style = "visibility: visible;";
        if (largePullAmount > 1) {
            largePullBtn.style = "visibility: visible;";
        }
        setTimeout(function(){document.body.onclick = null;}, 250);
    }
}
//continueButton.onclick = continuePull;

function toggleDarkMode() {
	if (darkMode == true) {
        darkMode = false;
        document.body.classList.remove("darkMode");
		darkModeBtn.innerHTML = "dark mode: off";
    	darkModeBtn.style = "background: white; color: black";
	} else {
        darkMode = true;
        document.body.classList.add("darkMode");
    	darkModeBtn.innerHTML = "dark mode: on";
		darkModeBtn.style = "background: black; color: white";
	}
}
darkModeBtn.onclick = toggleDarkMode;