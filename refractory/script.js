var b = document.body;
var score = document.getElementById("score");
var session = document.getElementById("sessionHighScore");
var high = document.getElementById("highScore");
var pauseBtn = document.getElementById("pauseBtn");
var canvas = document.getElementById("canvas");
var start = document.getElementById("start");
var info = document.getElementById("info");
var indexDetails = document.getElementById("indexDetails");
var indexName = document.getElementById("indexName");
//var indexOrb = document.getElementById("indexOrb");
var indexOpen = true;
var c = canvas.getContext("2d");
var cooldown = false;
var points = 0;

var vel = 0;
var maxVel = 5;
var plr = canvas.width/2;
var lives = 5;
const bullets = [];
var bulletVel = 5;
const orbs = [];
var orbVel = 1;
var orbInt = 750;
var paused = true;

if (localStorage.getItem("refractory_highScore")) {
	high.innerHTML = localStorage.getItem("refractory_highScore");
};

function clear() {
    c.clearRect(0, 0, canvas.width, canvas.height);
};

const colors = {
    red: "rgb(255, 100, 100)",
    blue: "rgb(130, 205, 255)",
    white: "rgb(255, 255, 255)",
    gray: "rgb(125, 135, 150)",
    black: "rgb(0, 0, 0)",
    bg: "rgb(200, 245, 255)",
};

const orbColors = {
    red: "rgb(255, 100, 100)",
    orange: "rgb(255, 200, 100)",
    yellow: "rgb(255, 240, 100)",
    green: "rgb(100, 255, 100)",
    blue: "rgb(100, 150, 255)",
    purple: "rgb(175, 100, 255)",
};

const draw = {
    bullet: function(y){
        c.beginPath();
        c.strokeStyle = colors.blue;
        c.lineWidth = 20;
        c.lineCap = "round";
        c.moveTo(plr, y);
        c.lineTo(plr, y - 20);
        c.stroke();
    },
    heart: function(x, y, color){
        /*c.beginPath();
        c.strokeStyle = colors.red;
        c.fillStyle = colors.red;
        c.arc(x - 7.5, y + 5, 8, 0, 10);
        c.fill();
        c.beginPath();
        c.arc(x + 7.5, y + 5, 8, 0, 10);
        c.fill();
        c.beginPath();
        c.moveTo(x, y + 15);
        c.lineTo(x + 14, y + 10);
        c.lineTo(x, y + 40);
        c.lineTo(x - 14, y + 10);
        c.fill();*/
        c.fillStyle = color;
        c.font = "36px IBM Plex Sans KR";
        c.fillText("♥", x - 18, y - 4);
        /* // Mid point
        c.beginPath();
        c.moveTo(canvas.width/2, canvas.height/2);
        c.lineTo(canvas.width/2, canvas.height/2-15);
        c.stroke();*/
    },
    orb: function(x, y, color){
        c.beginPath();
        c.strokeStyle = color;
        c.fillStyle = color;
        c.arc(x, y, 35, 0, 10);
        c.fill();
    },
    player: function(){
        c.beginPath();
        c.strokeStyle = colors.white;
        c.fillStyle = colors.white;
        c.arc(plr, 400, 50, 0, 10);
        c.fill();
    },
};

function update() {
    // L-Edge: 100 — R-Edge: 900
    if (plr <= -50 && vel < 0) {
        plr = 1100;
    };
    if (plr >= 1100 && vel > 0) {
        plr = -50;
    };
    clear();
    if (paused == false) {
        plr += vel;
    } else {
        if (start.style.visibility == "hidden") {
            if (pauseBtn.innerHTML != "⟳") {
                c.fillStyle = colors.black;
                c.font = "32px Nunito";
                c.fillText("Paused", 25, 45);
            };
        };
    };
    if (bullets.length > 0) {
        for (let i = 0; i < bullets.length; i++) {
            let b = bullets[i];
            if (b.y > -15) {
                if (paused == false) {
                    b.y -= bulletVel;
                }
                if (orbs.length > 0) {
                    for (let i2 = 0; i2 < orbs.length; i2++) {
                        let o = orbs[i2];
                        if (b.x < o.x + 35 && b.x > o.x - 35) {
                            draw.bullet(b.y);
                            if (o.color != orbColors.blue) {
                                bullets.splice(i, 1);
                                orbs.splice(i2, 1);
                            };
                            if (o.color == orbColors.red || o.color == orbColors.orange) {
                                addPoints(10);
                            } else if (o.color == orbColors.green) {
                                lives -= 1;
                            } else if (o.color == orbColors.blue) {
                                addPoints(0.05);
                            };
                        } else {
                            draw.bullet(b.y);
                        };
                    };
                } else {
                    draw.bullet(b.y);
                };
            } else {
                bullets.splice(i, 1);
            };
        };
    };
    if (orbs.length > 0) {
        for (let i = 0; i < orbs.length; i++) {
            let o = orbs[i];
            if (o.y < 450) {
                if (paused == false) {
                    o.y += o.v;
                };
                if (o.x < plr + 50 && o.x > plr - 50 && o.y < 450 && o.y > 350) {
                    orbs.splice(i, 1);
                    if (o.color == orbColors.green) {
                        addPoints(10);
                    } else if (o.color == orbColors.blue) {
                        addPoints(5);
                    } else if (o.color == orbColors.purple) {
                        if (lives < 5) {
                            lives += 1
                        } else {
                            addPoints(10);
                        };
                    } else if (o.color == orbColors.red || o.color == orbColors.orange) {
                        lives -= 1;
                    };
                } else {
                    draw.orb(o.x, o.y, o.color);
                };
            } else {
                if (o.color == orbColors.green || o.color == orbColors.orange) {
                    lives -= 1;
                };
                orbs.splice(i, 1);
            };
        };
    };
    if (pauseBtn.innerHTML == "⟳") {
        c.fillStyle = colors.black;
        c.font = "32px Nunito";
        c.fillText("Game Over", 25, 45);
    };
    draw.player();
    let l = 5;
    for (let i = 180; i >= 40; i -= 35) {
        if (lives >= l) {
            draw.heart(canvas.width - i, 50, colors.red);
        } else {
            draw.heart(canvas.width - i, 50, colors.gray);
        };
        l -= 1;
    };
};

function orb() {
    let x = Math.floor(Math.random() * 925) + 40;
    let y = -40;
    let v = orbVel;
    var chances = [
        "red", "red", "red", "red", "red",
        "orange", "orange", "orange",
        "yellow", "yellow",
        "green", "green", "green", "green", "green",
        "blue",
        "purple",
    ];
    /*let keys = Object.keys(orbColors);
    let color = orbColors[keys[Math.floor(Math.random() * keys.length)]];*/
    let color = orbColors[chances[Math.floor(Math.random() * chances.length)]];
    orbs.push({x: x, y: y, v: v, color: color});
    //console.log(keys);
};

function addPoints(p) {
    points += p;
	displayPoints = Math.floor(points);
    score.innerHTML = displayPoints;
	if (Number(session.innerHTML) < points || session.innerHTML == "--") {
		session.innerHTML = displayPoints;
	};
	if (Number(high.innerHTML) < points || high.innerHTML == "--") {
		high.innerHTML = displayPoints;
		localStorage.setItem("refractory_highScore", displayPoints);
	};
};

function moveLeft() {
    vel = -maxVel;
};

function moveRight() {
    vel = maxVel;
};

function shoot() {
    if (cooldown == false && paused == false) {
        cooldown = true;
        bullets.push({x: plr, y: 350});
        setTimeout(function(){cooldown = false}, 500);
    };
};

function stop() {
    vel = 0;
};

function keyDown(e) {
    if (e.key == "a" || e.key == "ArrowLeft") {
        moveLeft();
    };
    if (e.key == "d" || e.key == "ArrowRight") {
        moveRight();
    };
    if (e.key == " " || e.key == "Enter" || e.key == "ArrowUp") {
        shoot();
    };
    if (e.key == "p") {
        pause();
    };
    if (e.key == "r") {
        restart();
    };
};

function keyUp(e) {
    if (e.key == "a" || e.key == "ArrowLeft" || e.key == "d" || e.key == "ArrowRight") {
        stop();
    };
};

function pause(mode, death) {
    if (mode != null && death == null) {
        paused = mode;
        pauseBtn.innerHTML = mode == true ? "▶" : "||";
    } else {
        if (paused == true && pauseBtn.innerHTML != "⟳") {
            paused = false;
            pauseBtn.innerHTML = "||";
            if (start.innerHTML != null || start.innerHTML.trim() != "") {
                start.innerHTML = null;
                start.style.visibility = "hidden";
                start.classList.add("ns");
                if (score.innerHTML == "--") {
                    score.innerHTML = "0";
                };
            };
        } else {
            paused = true;
            pauseBtn.innerHTML = "▶";
        };
    };
    if (death == true) {
        pauseBtn.innerHTML = "⟳";
        //console.log("YOU DIED");
    };
};

function restart() {
    pause(true);
    pauseBtn.innerHTML = "▶";
    plr = canvas.width/2;
    lives = 5;
    points = 0;
    score.innerHTML = "0";
    cooldown = false;
    orbInt = 750;
    orbVel = 1;
    bullets.splice(0, bullets.length);
    orbs.splice(0, orbs.length);
    start.innerHTML = "Press the ▶ button (top-right) to start";
    start.style.visibility = "visible";
    start.classList.remove("ns");
};

function click(e) {
    let p = canvas.getBoundingClientRect();
    let x = e.clientX - p.left;
    let y = e.clientY - p.top;
    console.log(x, y);
};

function toggleIndex() {
    if (indexOpen == true) {
        indexOpen = false;
    } else {
        indexOpen = true;
    }
};

function changeIndexOrb(orb) {
    if (orb == "default") {
        indexOrb.innerHTML = indexOpen == true ? "🔴" : "🟢";
    } else {
        indexOrb.innerHTML = orb;
    };
};

/*if (indexOpen == true) {
    indexDetails.open = "true";
};*/
b.onload = function(){setInterval(function() {
    if (lives <= 0) {
        pauseBtn.innerHTML = "⟳";
        pause(true, true);
    };
    update();
    if (document.hasFocus() == false && paused == false) {
        pause(true);
    };
    if (paused == false) {
        orbInt -= 100;
    };
}, 5)};
setInterval(function() {
    if (paused == false) {
        orbVel += 0.01;
    };
}, 500);
setInterval(function(){
    if (paused == false) {
        orb();
    };
}, orbInt);

b.onkeydown = keyDown;
b.onkeyup = keyUp;
info.onclick = window.scrollTo(0, document.body.scrollHeight);
indexName.onclick = function(){toggleIndex()};
/*
indexName.onmousedown = function(){changeIndexOrb("🟡")};
indexName.onmouseup = function(){changeIndexOrb("⚪️")};
indexName.onmouseleave = function(){changeIndexOrb("default")};
indexName.onmouseover = function(){changeIndexOrb("⚪️")};*/