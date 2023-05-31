var b = document.body;
var t = document.querySelector("#title");
var canvas = document.querySelector("#canvas");
var fs = document.querySelector("#fullscreen");
var c = canvas.getContext("2d");
const p = {
    color: "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 75%)",
    hat: 0,
    size: 25,
};
const hats = ["", "tophat"];
var room = 1;
const rooms = {
    titles: ["", "Room 1", "Room 2",],
    bg: ["#000000", "#252525", "#4BC84B"],
    grid: 25,
    map: [
        `
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        `,
        `
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        3,3,5,5,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3|
        3,3,5,5,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3|
        3,3,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3|
        3,3,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3|
        3,3,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
        3,3,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        `,
        `
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|
        `,
    ],
    walls: [
    	// X1, X2, Y1, Y2, X1 exception, X2 exc., Y1 exc., Y2 exc.
    	[p.size, canvas.width - p.size, p.size, canvas.height - p.size, false, false, false, false],
        [p.size + 50, canvas.width - p.size - 50, p.size + 50, canvas.height - p.size - 50, false, true, false, false],
        [p.size, canvas.width - p.size, p.size, canvas.height - p.size, false, false, false, false],
    ],
};

var x = canvas.width / 2;
var y = canvas.height / 2;
var s = 5;
var vx = 0;
var vy = 0;
var title = false;
var titleText = "";

const colors = [
// /* COLOR */			"",

/* Background */	rooms.bg[room],
/* White */			"#FFFFFF",
/* Black */			"#000000",
/* Tan */			"rgb(225, 200, 150)",
/* Blue */			"rgb(200, 235, 255)",
/* Brown */			"rgb(125, 75, 25)",
/* Light Gray */	"#EEEEEE",
]
const draw = {
    player: function() {
        // head/body thing
        c.fillStyle = p["color"];
        c.beginPath();
        c.arc(x, y, p.size, 0, 2 * Math.PI);
        c.fill();
        // eyes
        c.fillStyle = "#000000";
        c.beginPath();
        c.arc(x - 10, y - 4, 5, 0, 2 * Math.PI);
        c.fill();
        c.beginPath();
        c.arc(x + 10, y - 4, 5, 0, 2 * Math.PI);
        c.fill();
        // mouth
        c.beginPath();
        c.arc(x, y + 7, 10, 0, 1 * Math.PI);
        c.fill();
    },
    sibling: function(x2, y2) {
        // head/body thing
        let color = p["color"].split("100%");
        c.fillStyle = color[0] + "100%, 50%)";
        c.beginPath();
        c.arc(x2, y2, p.size, 0, 2 * Math.PI);
        c.fill();
        // eyes
        c.fillStyle = "#000000";
        c.beginPath();
        c.arc(x2 - 10, y2 - 4, 5, 0, 2 * Math.PI);
        c.fill();
        c.beginPath();
        c.arc(x2 + 10, y2 - 4, 5, 0, 2 * Math.PI);
        c.fill();
        // mouth
        c.beginPath();
        c.arc(x2, y2 + 20, 12, 10, 5.7);
        c.lineWidth = 3;
        c.lineCap = "round";
        c.stroke();
    },
    tophat: function() {
        // rim
        c.fillStyle = "#444444";
        c.fillRect(x - 30, y - 25, 60, 10);
        // tall
        c.fillStyle = "#444444";
        c.fillRect(x - 20, y - 65, 40, 30);
        // band
        c.fillStyle = "#EEEEEE";
        c.fillRect(x - 20, y - 35, 40, 10);
    },
};

function clear() {
    c.clearRect(0, 0, canvas.width * 2, canvas.height * 2);
};

function bg() {
    let rows = rooms["map"][room].trim().split("|");
    for (let i = 0; i < rows.length; i++) {
        let layout = rows[i].trim().split(",");
        for (let i2 = 0; i2 < layout.length; i2++) {
            c.fillStyle = colors[Number(layout[i2].trim())];
            c.fillRect(i2 * rooms.grid, i * rooms.grid, rooms.grid, rooms.grid);
        };
        switch (room) {
            case 1:
                draw.sibling(137.5, 75);
            break;
        }
    };
};

function update() {
    clear();
    colors[0] = rooms.bg[room];
    bg();
    let walls = rooms.walls[room];
    let xg = false; // check if the vx was already given
    let yg = false; // check if the vy was already given
    if (walls[4] == false) {
        if (x > walls[0]) {
            xg = true;
            x += vx;
            setTimeout(function(){if (x <= walls[0]) {x += 5}}, 50);
        } else {
            x = walls[0] + 1;
        };
    };
    if (walls[5] == false) {
        if (x < walls[1]) {
            if (xg == false) {
                x += vx;
            };
        } else {
            x = walls[1] - 1;
        };
    };
    if (walls[6] == false) {
        if (y > walls[2]) {
            yg = true;
            y += vy;
            setTimeout(function(){if (y <= walls[2]) {y += 5}}, 50);
        } else {
            y = walls[2] + 1;
        };
    };
    if (walls[7] == false) {
        if (y < walls[3]) {
            if (yg == false) {
                y += vy;
            };
        } else {
            y = walls[3] - 1;
        };
    };
    // configure custom walls & exits
    switch (room) {
        case 1:
            if (x >= canvas.width - 75 && (y < 150 || y > 350)) {
                x = canvas.width - 75;
            };
            if (x >= canvas.width - 55 && y >= 150 && y <= 350) {
                room = 2;
                x = 80;
                notif(rooms["titles"][2]);
            };
        break;
        case 2:
            if (x <= 55 && y >= 150 && y <= 350) {
                room = 1;
                x = canvas.width - 80;
                notif(rooms["titles"][1]);
            };
        break;
    };
    draw.player();
    if (p.hat > 0) {
        draw[hats[p.hat]]();
    };
    if (title == true) {
    	let color = p["color"].split(")");
        c.fillStyle = color[0] + ", 75%)";
    	c.fillRect(0, 20, canvas.width, 40);
        c.textAlign = "center";
        c.font = "bold 32px Courier New";
        color = p["color"].split("100%");
        c.fillStyle = color[0] + "100%, 50%)";
        c.fillText(titleText, canvas.width/2, 52);
        c.fillStyle = "#FFFFFF";
        c.fillText(titleText, canvas.width/2, 50);
    };
};

function move(e) {
    switch (e.key.toLowerCase()) {
        case "w":
            vy = -s;
        break;
        case "s":
            vy = s;
        break;
        case "a":
            vx = -s;
        break;
        case "d":
            vx = s;
        break;
    };
};

function stop(e) {
    let k = e.key.toLowerCase();
    if (k == "w" || k == "s") {
        vy = 0;
    };
    if (k == "a" || k == "d") {
        vx = 0;
    };
};

function notif(text) {
    let tt = text;
    titleText = tt;
    title = true;
    setTimeout(function(){
        if (tt == text) {
            titleText = "";
            title = false;
        };
    }, 3000);
};

function fullscreen() {
    if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
        canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) {
        canvas.msRequestFullscreen();
    };
};

notif("Room 1");
setInterval(update, 25);
b.onkeydown = move;
b.onkeyup = stop;
fs.onclick = fullscreen;