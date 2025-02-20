var age = 1;
if (localStorage.getItem("age") != null) {
    age = Number(localStorage.getItem("age"));
};

const rocks = {
    good: {
        super: ["mr-rockhead.png"],
        clean: ["pearl-rock.png"],
        happy: ["playful-rock.png"],
        cheese: ["cheese-rock.png"],

        good: ["kawaii-rock.png", "bird-rock.png", "mount-rushmore.png"],
        neutral: ["ponytail-rock.png", "headband-rock.png", "bush-rock.png", "roblox-rock.png", "slamo-rock.png"],
        bad: ["adopt-me-rock.png", "cheeky-rock.png", "moai.png"],
    },
    bad: {
        good: ["bricks.png", "man-rock.png", "expressionless-rock.png"],
        neutral: ["potato-rock.png", "egg-rock.png", "house-rock.png", "goggly-eyed-rock.png"],
        bad: ["moldy-rock.png", "magma.png", "eroded-rock.png", "obese-rock.png"],
    }
};

const tools = {
    plant: "plant.png",
    shower: "shower.png",
    sponge: "sponge.png",
}

const bools = [true, false, false];

const defaultNames = ["Rocky", "Rocko", "Pebbles", "The Rock", "BaRock Obama"];
var name = defaultNames[Math.floor(Math.random() * (defaultNames.length - 1))];
if (localStorage.getItem("name") && age > 0) {
    name = localStorage.getItem("name");
};

let names = document.getElementsByTagName("name");
for (let i = 0; i < names.length; i++) {
    names[i].innerHTML = name;
};

var faves = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)];
if (localStorage.getItem("faves") && age > 0) {
    faves = localStorage.getItem("faves");
};

var sadEmojis = ["😢", "😭", "😿", "T-T", "ToT", "TnT", "T^T", ":(", ":[", "i^i"];

const deathMessages = {
    hunger: ["Your rock died from hunger.", "You didn't feed your rock and it starved to death."],
    filth: ["Your rock died from filth.", "You didn't bathe your rock and it died from bacteria buildup."],
    depression: ["Your rock died from depression.", "You didn't play with your rock and it got depressed."],
};

var full = document.getElementById("full");
if (localStorage.getItem("full") && age > 0) {
    full = localStorage.getItem("full");
};
var clean = document.getElementById("clean");
if (localStorage.getItem("clean") && age > 0) {
    clean = localStorage.getItem("clean");
};
var happy = document.getElementById("happy");
if (localStorage.getItem("happy") && age > 0) {
    happy = localStorage.getItem("happy");
};
var timesHungry = 0;
if (localStorage.getItem("timesHungry") && age > 0) {
    timesHungry = localStorage.getItem("timesHungry");
};
var timesDirty = 0;
if (localStorage.getItem("timesDirty") && age > 0) {
    timesDirty = localStorage.getItem("timesDirty");
};
var timesSad = 0;
if (localStorage.getItem("timesSad") && age > 0) {
    timesBored = localStorage.getItem("timesSad");
};
var visibleF = false;
var visibleC = false;
var ticking = true;

var favicon = document.getElementById("favicon");
var ageDisplay = document.getElementById("age");
var rock = document.getElementById("rock");
var alerts = document.getElementById("alerts");
var tool = document.getElementById("tool");
var feedButton = document.getElementById("feedButton");
var foodLabel = document.getElementById("foodLabel");
var foodList = document.getElementById("foodList");
var setFood = document.getElementById("setFood");
var bathButton = document.getElementById("bathButton");
var bathLabel = document.getElementById("bathLabel");
var toolList = document.getElementById("toolList");
var setTool = document.getElementById("setTool");
var playButton = document.getElementById("playButton");
var renameButton = document.getElementById("renameButton");
var pauseButton = document.getElementById("pauseButton");
var importButton = document.getElementById("importButton");
var exportButton = document.getElementById("exportButton");

function save() {
    localStorage.setItem("age", age);
    localStorage.setItem("name", name);
    localStorage.setItem("faves", faves);
    localStorage.setItem("full", full);
    localStorage.setItem("clean", clean);
    localStorage.setItem("happy", happy);
    localStorage.setItem("timesHungry", timesHungry);
    localStorage.setItem("timesDirty", timesDirty);
    localStorage.setItem("timesSad", timesSad);
    //localStorage.setItem("", );
}

function death(type) {
    ticking = false;
    tool.style.visibility = "hidden";
    feedButton.style.visibility = "hidden";
    foodList.style.visibility = "hidden";
    setFood.style.visibility = "hidden";
    bathButton.style.visibility = "hidden";
    toolList.style.visibility = "hidden";
    setTool.style.visibility = "hidden";
    playButton.style.visibility = "hidden";
    renameButton.style.visibility = "hidden";
    pauseButton.style.visibility = "hidden";
    importButton.style.visibility = "hidden";
    exportButton.style.visibility = "hidden";
    
    if (document.getElementById("hunger")) {
        document.getElementById("hunger").remove();
    };
    if (document.getElementById("filth")) {
        document.getElementById("filth").remove();
    };
    if (document.getElementById("depression")) {
        document.getElementById("depression").remove();
    };
    
    let deathType = "hunger";
    if (type == 2) {
        deathType = "filth";
    } else if (type == 3) {
        deathType = "depression";
    };
    
    let deathAlert = document.createElement("h3");
    let sadEmoji = sadEmojis[Math.floor(Math.random() * (sadEmojis.length - 1))];
    let deathMessage = deathMessages[deathType][Math.floor(Math.random() * (deathMessages[deathType].length - 1))];
    deathAlert.innerHTML = sadEmoji + " " + deathMessage + " " + sadEmoji;
    alerts.appendChild(deathAlert);
    let reload = document.createElement("button");
    reload.innerHTML = "Restart game";
    reload.addEventListener("onclick", function() {location.reload()});
    alerts.appendChild(reload);
};

function tick() {
    if (ticking == true) {
        age = Number(Number(age + 0.01).toFixed(2));
        ageDisplay.innerHTML = age;
        
        let hungry = bools[Math.floor(Math.random() * (bools.length - 1))];
        if (hungry == true) {
            full.innerHTML = Number(full.innerHTML) - 2;
            if (Number(full.innerHTML) < 1) {
                death(1);
            } else if (Number(full.innerHTML) < 50 && !document.getElementById("hunger")) {
                timesHungry++;
                let notif = document.createElement("h3");
                notif.innerHTML = name + " is getting hungry!";
                notif.id = "hunger";
                alerts.appendChild(notif);
            };
        };

        let dirty = bools[Math.floor(Math.random() * (bools.length - 1))];
        if (dirty == true) {
            clean.innerHTML = Number(clean.innerHTML) - 2;
            if (Number(clean.innerHTML) < 1) {
                death(2);
            } else if (Number(clean.innerHTML) < 50 && !document.getElementById("filth")) {
                timesDirty++;
                let notif = document.createElement("h3");
                notif.innerHTML = name + " is getting dirty!";
                notif.id = "filth";
                alerts.appendChild(notif);
            };
        };
        
        let bored = bools[Math.floor(Math.random() * (bools.length - 1))];
        if (bored == true) {
            happy.innerHTML = Number(happy.innerHTML) - 2;
            if (Number(happy.innerHTML) < 1) {
                death(3);
            } else if (Number(happy.innerHTML) < 50 && !document.getElementById("depression")) {
                timesSad++;
                let notif = document.createElement("h3");
                notif.innerHTML = name + " is becoming depressed!";
                notif.id = "depression";
                alerts.appendChild(notif);
            };
        };
        
        if (age >= 2.5 && age < 7.5) {
            if (timesHungry < 4 && timesDirty < 4 && timesSad < 4) {
                rock.src = "kid-rock-happy.png";
            } else {
                rock.src = "kid-rock-sad.png";
            };
        } else if (age <= 7.5) {
            if (timesHungry < 3 && timesDirty < 3 && timesSad < 3) {
                if (rock.src == "kid-rock-happy.png") {
                    rock.src = rocks["good"]["super"][Math.floor(Math.random() * (rocks["good"]["super"].length - 1))];
                };
            } else if (timesDirty <= 1) {
                rock.src = rocks["good"]["clean"][Math.floor(Math.random() * (rocks["good"]["clean"].length - 1))];
            } else if (timesSad <= 1) {
                rock.src = rocks["good"]["happy"][Math.floor(Math.random() * (rocks["good"]["happy"].length - 1))];
            } else if (timesHungry <= 4 && timesDirty <= 4 && timesSad <= 4) {
                if (rock.src == "kid-rock-happy.png") {
                    rock.src = rocks["good"]["good"][Math.floor(Math.random() * (rocks["good"]["good"].length - 1))];
                } else {
                    rock.src = rocks["bad"]["good"][Math.floor(Math.random() * (rocks["bad"]["good"].length - 1))];
                };
            } else if (timesHungry <= 7 && timesDirty <= 7 && timesSad <= 7) {
                if (rock.src == "kid-rock-happy.png") {
                    rock.src = rocks["good"]["neutral"][Math.floor(Math.random() * (rocks["good"]["neutral"].length - 1))];
                } else {
                    rock.src = rocks["bad"]["neutral"][Math.floor(Math.random() * (rocks["bad"]["neutral"].length - 1))];
                };
            } else if (timesHungry >= 8 && timesDirty >= 8 && timesSad >= 8) {
                if (rock.src == "kid-rock-happy.png") {
                    rock.src = rocks["good"]["bad"][Math.floor(Math.random() * (rocks["good"]["bad"].length - 1))];
                } else {
                    rock.src = rocks["bad"]["bad"][Math.floor(Math.random() * (rocks["bad"]["bad"].length - 1))];
                };
            };
        };
    };
    save();
};

function override(event) {
    event.preventDefault();
};

function saveTool(event) {
    event.dataTransfer.setData("tool", event.target.id);
};

function use(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("tool");
    if (data == "plant" || data == "rock kibbles" || data == "cheese" || data == "gigagrowth gummies") {
        let fullness = Number(full.innerHTML);
        let inc = 5;
        if (fullness < 100 && fullness + inc <= 100) {
            full.innerHTML = fullness + inc;
            if (data == "gigagrowth gummies") {
                rock.height = rock.height * 1.05;
                rock.width = rock.width * 1.05;
            };
        } else if (fullness < 100 && fullness + inc > 100) {
            full.innerHTML = 100;
            if (data == "gigagrowth gummies") {
                rock.height = rock.height * 1.05;
                rock.width = rock.width * 1.05;
            };
        };
    };
    if (data == "shower" || data == "sponge") {
        let cleanliness = Number(clean.innerHTML);
        let inc = 5;
        if (cleanliness < 100 && cleanliness + inc <= 100) {
            clean.innerHTML = cleanliness + inc;
        } else if (cleanliness < 100 && cleanliness + inc > 100) {
            clean.innerHTML = 100;
        }
    }
}

function applyFood() {
    let food = foodList.value;
    switch(food) {
        case "plant":
            tool.src = "plant.png";
        break
        case "rock kibbles":
            tool.src = "rock-kibbles.png";
        break
        case "cheese":
            tool.src = "cheese.png";
        break
        case "gigagrowth gummies":
            tool.src = "gigagrowth-gummies.png";
        break
    }
}

function toggleFood() {
    if (visibleF == true) {
        visibleF = false;
        applyFood();
        tool.style.visibility = "visible";
        foodLabel.style.visibility = "hidden";
        foodList.style.visibility = "hidden";
        setFood.style.visibility = "hidden";
    } else {
        visibleF = true;
        tool.style.visibility = "hidden";
        foodLabel.style.visibility = "visible";
        foodList.style.visibility = "visible";
        setFood.style.visibility = "visible";
    }
    if (visibleC == true) {
        visibleC = false;
        bathLabel.style.visibility = "hidden";
        toolList.style.visibility = "hidden";
        setTool.style.visibility = "hidden";
    }
}

function applyTool() {
    let tool = toolList.value;
    switch(tool) {
        case "shower":
            tool.src = "shower.png";
            break
        case "sponge":
            tool.src = "sponge.png";
            break
    };
};

function toggleTool() {
    if (visibleC == true) {
        visibleC = false;
        applyTool();
        tool.style.visibility = "visible";
        bathLabel.style.visibility = "hidden";
        toolList.style.visibility = "hidden";
        setTool.style.visibility = "hidden";
    } else {
        visibleC = true;
        tool.style.visibility = "hidden";
        bathLabel.style.visibility = "visible";
        toolList.style.visibility = "visible";
        setTool.style.visibility = "visible";
    };
    if (visibleF == true) {
        visibleF = false;
        foodLabel.style.visibility = "hidden";
        foodList.style.visibility = "hidden";
        setFood.style.visibility = "hidden";
    };
};

function play() {
    let happiness = Number(happy.innerHTML);
    let inc = 1; // Increment
    if (happiness < 100 && happiness + inc <= 100) {
        happy.innerHTML = happiness + inc;
    } else if (happiness < 100 && happiness + inc > 100) {
        happy.innerHTML = 100;
    };
};

function rename() {
    let newName = prompt("Enter a new name for " + name);
    if (newName.trim() != "" && newName != null) {
        name = newName.trim();
        alert("Set new name to " + newName.trim());
    };
};

function toggleTicking() {
    if (ticking == false) {
        ticking = true;
        pauseButton.innerHTML = "Pause game";
    } else {
        ticking = false;
        pauseButton.innerHTML = "Unpause game";
    };
};

function importData() {
    //let data = prompt("Paste your game data here");
};

function exportData() {
    /*localStorage.setItem("age", age);
        localStorage.setItem("name", name);
        localStorage.setItem("faves", faves);
        localStorage.setItem("full", full);
        localStorage.setItem("clean", clean);
        localStorage.setItem("happy", happy);
        localStorage.setItem("timesHungry", timesHungry);
        localStorage.setItem("timesDirty", timesDirty);
        localStorage.setItem("timesSad", timesSad);*/
    let data = 1;
    let encodedData = window.btoa(unescape(encodeURIComponent(data)));
    //navigator.clipboard.writeText(encodedData);
    //alert("Copied game data to clipboard! Save this somewhere (e.g. in online notepad)");
};

window.onload = setInterval(tick, 1000);
rock.ondragover = override;
rock.ondrop = use;
tool.ondragstart = saveTool;