var b = document.body;
var t = document.querySelector("#title");
var canvas = document.querySelector("#canvas");
var controls = document.querySelector("#controls");
var interactBtn = document.querySelector("#interact");
var c = canvas.getContext("2d");
var pc = Math.floor(Math.random() * 360);
var playerColor = "";
const p = {
    color: "hsl(" + pc + ", 100%, 75%)",
    hat: 0,
    sibling: "",
    size: 25,
};
if (pc) {
};
const names = [
/* Red */		[],
/* Orange */	[],
/* Yellow */	[],
/* Green */		[],
/* Blue */		[],
/* Purple */	[],
/* Pink */		[],
];

const hats = ["", "tophat"];
var room = 1;
const rooms = {
    titles: ["", "Home", "Outside",],
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
    	[p.size, canvas.width - p.size, p.size, canvas.height - (canvas.height * 0.25) - p.size, false, false, false, false],
        [p.size + 50, canvas.width - p.size - 50, p.size + 50, canvas.height - (canvas.height * 0.25) - p.size - 50, false, true, false, false],
        [p.size, canvas.width - p.size, p.size, canvas.height - (canvas.height * 0.25) - p.size, true, false, false, false],
    ],
};

var x = canvas.width / 2;
var y = canvas.height / 2 - (canvas.height * 0.125);
var s = 5;
var vx = 0;
var vy = 0;
var title = false;
var titleText = "";

const dialogs = [
							//1234567890123456789012345678901234567 <- LIMIT
// Enter text to test length: 

	// Room 1
	[
    	"Hey...I'm not really feeling so good.\n\nI'm pretty sick right now— *COUGH\nCOUGH*  :C\nCould you do me a favor? There's a\nfew things I want, but I can't get up\n'cause...you know. Anyways, I listed\nthem on the paper next to me.\n...You'll help? Aww, thanks buddy.",
        "Things to do: go outside",
    ],
    // Room 2
    [
    	"",
    ],
];
var dialog = false;
var dialogText = "";
var dialogLine = 0;
// room 1 sprites (index of 1): sibling, paper
var sprite = 0;
var interactable = false;
var interactText = "Interact";
var proceed = false;

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
    player: function(drawMouth) {
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
        //
        // mouth
        if (drawMouth != false) {
            c.fillStyle = "#000000";
            c.strokeStyle = "#000000";
            c.beginPath();
            c.arc(x, y + 7, 10, 0, 1 * Math.PI);
            c.lineCap = "butt";
            c.fill();
            c.stroke();
        };
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
        c.strokeStyle = "#000000";
        c.beginPath();
        c.arc(x2, y2 + 20, 12, 10, 5.7);
        c.lineWidth = 3;
        c.lineCap = "round";
        c.stroke();
    },
    paper: function(x2, y2) {
    	// paper
        c.fillStyle = colors[1];
        c.fillRect(x2, y2, 25, 40);
        // lines
        c.strokeStyle = colors[2];
        c.lineWidth = 2;
        c.lineCap = "round";
        for (let i = 0; i < 6; i++) {
        	c.beginPath();
            c.moveTo(x2 + 5, y2 + (i * 5) + 8);
            c.lineTo(x2 + 20, y2 + (i * 5) + 8);
            c.stroke();
        };
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
        c.fillStyle = p.color;
        c.fillRect(0, canvas.height * 0.75, canvas.width, 165);
        switch (room) {
            case 1:
            	draw.paper(62.5, 55);
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
                setTimeout(function(){if (x >= walls[1]) {x -= 5}}, 50);
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
    // configure dialogs, custom walls & exits
    switch (room) {
        case 1:
        	// sibling dialog
        	if (x > 150 && x <= 225 && y <= 200) {
            	sprite = 1;
                interactText = "Talk";
                interactable = true;
            // paper dialog
            } else if (x <= 125 && y <= 150) {
            	sprite = 2;
                interactText = "Read";
                interactable = true;
            } else {
            	sprite = 0;
                interactText = "Interact";
            	interactable = false;
    			dialogText = "";
                //console.log("not in range!");
            };
        	// right wall
            if (x >= canvas.width - 75 && (y < 160 || y > 345)) {
                x = canvas.width - 75;
            };
            // exit
            if (x >= canvas.width - 55 && y >= 160 && y <= 345) {
                room = 2;
                x = 80;
                notif(rooms["titles"][2]);
            };
        break;
        case 2:
        	// left wall
        	if (x <= 75 && (y < 160 || y > 345)) {
                x = 75;
            };
            // exit
            if (x <= 55 && y >= 160 && y <= 345) {
                room = 1;
                x = canvas.width - 80;
                notif(rooms["titles"][1]);
            };
        break;
    };
    draw.player(false);
    if (p.hat > 0) {
        draw[hats[p.hat]]();
    };
    if (interactable == true && dialog == false) {
        draw.player(true);
        if (p.hat > 0) {
            draw[hats[p.hat]]();
        };
        let offset = canvas.height * 0.8;
        let l = interactText.length;
    	// interact box
    	let color = p["color"].split("100%");
        c.fillStyle = color[0] + "100%, 25%)";
        c.strokeStyle = "#FFFFFF";
        c.lineWidth = 2;
    	c.roundRect(25, offset, 25 * l + 35, 50, 5);
        //c.stroke();
        c.fill();
        // interact text
        c.font = "bold 30px Courier New";
        c.textAlign = "left";
        c.fillStyle = "#FFFFFF";
        c.fillText(interactText, 75, offset + 35);
        // e
        c.fillStyle = "#FFFFFF";
        c.clearRect(36, offset + 10, 28, 29, 5);
        c.roundRect(35, offset + 10, 30, 30, 5);
        c.lineWidth = 2;
        c.stroke();
        c.fillStyle = "#000000";
        c.fillText("E", 41, offset + 34);
    };
    if (dialog == true) {
    	draw.player(true);
        if (p.hat > 0) {
            draw[hats[p.hat]]();
        };
    	let offset = canvas.height * 0.8;
    	// dialog box
    	let color = p["color"].split("100%");
        c.fillStyle = color[0] + "100%, 25%)";
        c.strokeStyle = "#FFFFFF";
        c.lineWidth = 4;
    	c.roundRect(25, offset, canvas.width - 50, 100, 5);
        c.stroke();
        c.fill();
        // text
        c.font = "bold 30px Courier New";
        c.textAlign = "left";
        c.fillStyle = "#FFFFFF";
        c.fillText(dialogText[dialogLine], 42.5, offset + 35);
        if (dialogText[dialogLine + 1]) {
        	c.fillText(dialogText[dialogLine + 1], 42.5, offset + 65)
        };
        if (proceed == true) {
        	proceed = false;
        	dialogLine += 2;
            if (dialogLine >= dialogText.length) {
            	dialog = false;
                dialogLine = 0;
                dialogText = "";
            }
        };
        c.strokeStyle = "#777777";
        c.fillStyle = "#777777";
        // continue
        /*c.beginPath();
        c.arc(canvas.width - 45, canvas.height - 69, 8, 0, 2 * Math.PI);
        c.stroke();
        c.fill();
        c.font = "600 18px Courier New";
        c.textAlign = "center";
        c.fillStyle = "#FFFFFF";
        c.fillText("▼", canvas.width - 45, canvas.height * 0.9375);*/
        c.fillStyle = "#FFFFFF";
        c.beginPath();
        c.moveTo(canvas.width - 53, canvas.height * 0.915);
        c.lineTo(canvas.width - 44.25, canvas.height * 0.935);
        c.lineTo(canvas.width - 35.5, canvas.height * 0.915);
        c.closePath();
        c.fill();
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
    draw.player(true);
    if (p.hat > 0) {
        draw[hats[p.hat]]();
    };
};

function move(key) {
	if (dialog == false) {
      switch (key) {
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
};

function detectKey(e) {
	let key = e.key.toLowerCase();
    if (key == " ") {
        e.preventDefault();
    };
	if (interactable == true) {
    	if (key == "e") {
            if (dialog == true) {
                if (dialogLine >= dialogText.length) {
                    dialog = false;
                    dialogLine = 0;
                    dialogText = "";
                } else {
                    proceed = true;
                };
            } else {
                interact();
            };
        };
        if (key == " ") {
            if (dialog == true) {
                if (dialogLine >= dialogText.length) {
                    dialog = false;
                    dialogLine = 0;
                    dialogText = "";
                } else {
                    proceed = true;
                };
            };
        };
    };
	move(key);
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

function interact() {
	vx = 0;
    vy = 0;
    dialogText = dialogs[room - 1][sprite - 1].split("\n");
    dialog = true;
};

function click(e) {
	let cPos = canvas.getBoundingClientRect();
	let px = e.clientX - cPos.left;
    let py = e.clientY - cPos.top;
    console.log(px, py);
	if (dialog == true && typeof dialogText == "object") {
        if (py > 500) {
      		if (dialogLine >= dialogText.length) {
            	dialog = false;
                dialogLine = 0;
                dialogText = "";
            } else {
            	proceed = true;
        	};
        };
    } else if (dialog == false && interactable == true) {
        if (py > 500) {
            interact();
        };
    };
};

notif(rooms.titles[1]);
setInterval(update, 25);
b.onkeydown = detectKey;
b.onkeyup = stop;
canvas.onclick = click;

let btns = controls.childNodes;
for (let i = 0; i < btns.length; i++) {
	console.log(btns[i].tagName);
	if (btns[i].tagName == "BUTTON") {
		btns[i].onmousedown = function(){move(btns[i].dataset.key)};
    	btns[i].onmouseup = function(){stop({key: btns[i].dataset.key})};
        btns[i].ontouchstart = function(){move(btns[i].dataset.key)};
    	btns[i].ontouchend = function(){stop({key: btns[i].dataset.key})};
    };
};
interactBtn.onclick = function(){
	if (dialog == true && typeof dialogText == "object") {
        if (dialogLine >= dialogText.length) {
          dialog = false;
          dialogLine = 0;
          dialogText = "";
        } else {
          proceed = true;
        };
    } else if (dialog == false && interactable == true) {
        interact();
    };
}