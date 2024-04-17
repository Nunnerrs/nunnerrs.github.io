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
const stats = {
    flowers_give: false,
    flowers_gave: false,
};
const hats = ["", "tophat"];
var room = 1;

/*
When creating a new room, remember to…
• Add the title that should appear in rooms[titles] below
• Add the main background color for the room in rooms[bg] below
• Add the pixel map in rooms[map] below
• Add the wall collisions in rooms[walls] below the maps
• Add "case RM#:" in bg() and update() under the "switch(room)" for extra BG stuff and dialog/walls/exits (don't forget the "break;")
*/

const rooms = {
    titles: ["", "Home", "Outside", "Silly Street", "Front of Happy Mart", "Happy Mart"],
    bg: ["#000000", "#252525", "#4BC84B", "#4BC84B", "#4BC84B", "#E8F4FF"],
    grid: 25,
    map: [
        `
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        `,
        `
        t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t|
        t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t|
        t,t,w,w,1,1,1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t|
        t,t,w,w,1,1,1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t|
        t,t,_,_,l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t|
        t,t,_,_,l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t|
        t,t,_,_,l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1|
        t,t,_,_,l,l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,1|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t|
        t,t,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,t,t|
        t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t|
        t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t|
        `,
        `
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        1,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        1,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        1,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        1,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        t,t,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_|
        `,
        `
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        _,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,3,_,_,_,_,_,_,_,_,_,_,_,_,_|
        `,
        `
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,1|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,1|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1|
        3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,1|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,3,1|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        _,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,3,3,2,2|
        `,
        `
        l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l|
        l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l|
        l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        l,l,b,b,b,b,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        l,l,b,b,b,b,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        1,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        l,l,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,l,l|
        l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l|
        l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l|
        `,
    ],
    walls: [
    	// X1, X2, Y1, Y2, X1 exception, X2 exc., Y1 exc., Y2 exc.
        // default collisions:
    	[p.size, canvas.width - p.size, p.size, canvas.height - (canvas.height * 0.25) - p.size, false, false, false, false],
        // index begins at 1
/* House */					[p.size + 50, canvas.width - p.size - 50, p.size + 50, canvas.height - (canvas.height * 0.25) - p.size - 50, false, true, false, false],
/* Outside */				[p.size, canvas.width - p.size, p.size, canvas.height - (canvas.height * 0.25) - p.size, true, false, false, false],
/* Silly Str */				[p.size, canvas.width - p.size, p.size, canvas.height - (canvas.height * 0.25) - p.size, false, false, false, false],
/* Front of Happy Mart */	[p.size, canvas.width - p.size, p.size, canvas.height - (canvas.height * 0.25) - p.size, false, false, false, false],
/* Happy Mart */			[p.size + 50, canvas.width - p.size - 50, p.size + 50, canvas.height - (canvas.height * 0.25) - p.size - 50, true, false, false, false],
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

	// Room 1: House
	[
    	"Hey...I'm not really feeling so good.\n\nI'm pretty sick right now— *COUGH\nCOUGH*  :C\nCould you do me a favor? There's a\nfew things I want, but I can't get up\n'cause...you know. Anyways, I listed\nthem on the paper next to me.\n...You'll help? Aww, thanks buddy.",
        "Things to do: nothing in particular\n\nYou: I should get them some flowers\nfirst.",
        "A—Are those for me?? Thanks so much!\n\n*sniff* Mmmm! These smell so good.",
        "The room smells so much nicer now.\n\nOh, and I have a couple favors for\nyou.\nThey're listed on the paper beside\nme.",
        "Things to do: buy medicine",
    ],
    // Room 2: Outside
    [
    	"",
    ],
    // Room 3: Silly Street
    [
    	"",
    ],
    // Room 4: Front of Happy Mart
    [
    	"",
    ],
];
var dialog = false;
var dialogText = "";
var dialogLine = 0;
// room 1 sprites (index of 1): sibling, paper
// room 2 sprites: flower
var sprite = 0;
var interactable = false;
var interactText = "Interact";
var pickup = 0;
var proceed = false;

// The first pickup in the array is only there so the starting index is 1 (e.g. pickups[2][1] is the first flower in Room 2)
const pickups = [
// /* PICKUP */		false,
	[],

	// Room 1: House
    [
    false,
    /* Placeholder */	false,
    ],
    // Room 2: Outside
    [
    false,
    /* Flower */	false,
    /* Flower */	false,
    /* Flower */	false,
    /* Flower */	false,
    /* Flower */	false,
    /* Flower */	false,
    /* Flower */	false,
    /* Flower */	false,
    ],
    // Room 3: Silly Street
    [
    false,
    /* Placeholder */	false,
    ],
    // Room 4: Front of Happy Mart
    [
    false,
    /* Placeholder */	false,
    ],
    // Room 5: placeholder
    [
    false,
    /* Placeholder */	false,
    ],
];

const colors = {
// /* COLOR */      name: "",

/* Background */	_: rooms.bg[room],
/* White */		    "1": "#FFFFFF",
/* Black */		    "0": "#000000",
/* Tan */		    t: "rgb(225, 200, 150)",
/* Light Blue */    l: "rgb(200, 235, 255)",
/* Brown */		    w: "rgb(125, 75, 25)",
/* Light Gray */    "2": "#EEEEEE",
/* Gray */		    "3": "#CDCDCD",
/* Dark Green */    g: "#329632",
/* Blue */		    b: "#96CCFF",
/* LIGHT Blue */    e: "#F2F9FF",
}

const draw = {
    bush: function(x2, y2) {
        // big leaf
        c.fillStyle = colors["g"];
        c.beginPath();
        c.arc(x2, y2, 20, 0, 2 * Math.PI);
        c.fill();
        // small leaf
        c.beginPath();
        c.arc(x2 + 18, y2 + 12, 8, 0, 2 * Math.PI);
        c.fill();
        // small leaf part
        c.beginPath();
        c.arc(x2 + 10, y2 + 12, 8, 0, 2 * Math.PI);
        c.fill();
        // lef
        c.beginPath();
        c.arc(x2 - 8, y2 + 8, 12, 0, 2 * Math.PI);
        c.fill();
        // lef
        c.beginPath();
        c.arc(x2 - 18, y2 + 8, 12, 0, 2 * Math.PI);
        c.fill();
    },
    flower: function(x2, y2) {
    	// petals
        //c.fillStyle = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
        c.fillStyle = "#FF77AA"
        c.beginPath();
        c.arc(x2, y2 - 5, 6, 0, 2 * Math.PI);
        c.fill();
        c.beginPath();
        c.arc(x2, y2 + 5, 6, 0, 2 * Math.PI);
        c.fill();
        c.beginPath();
        c.arc(x2 - 5, y2, 6, 0, 2 * Math.PI);
        c.fill();
        c.beginPath();
        c.arc(x2 + 5, y2, 6, 0, 2 * Math.PI);
        c.fill();
        // center
        c.fillStyle = "#FFDF77"
        c.beginPath();
        c.arc(x2, y2, 5, 0, 2 * Math.PI);
        c.fill();
    },
    paper: function(x2, y2) {
    	// paper
        c.fillStyle = colors["1"];
        c.fillRect(x2, y2, 25, 40);
        // lines
        c.strokeStyle = colors["0"];
        c.lineWidth = 2;
        c.lineCap = "round";
        for (let i = 0; i < 6; i++) {
        	c.beginPath();
            c.moveTo(x2 + 5, y2 + (i * 5) + 8);
            c.lineTo(x2 + 20, y2 + (i * 5) + 8);
            c.stroke();
        };
    },
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
        // mouth
        if (drawMouth != false) {
            c.fillStyle = "#000000";
            c.strokeStyle = "#000000";
            c.beginPath();
            c.arc(x, y + 7, 10, 0, Math.PI);
            c.lineCap = "butt";
            c.fill();
            c.stroke();
        };
    },
    sibling: function(x2, y2, happy) {
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
        if (happy == true) {
            c.strokeStyle = "#000000";
            c.beginPath();
            c.arc(x2, y2 + 4, 10, 0.25 * Math.PI, -1.25 * Math.PI);
            c.lineWidth = 3;
            c.lineCap = "round";
            c.stroke();
        } else {
            c.strokeStyle = "#000000";
            c.beginPath();
            c.arc(x2, y2 + 20, 12, 10, 5.7);
            c.lineWidth = 3;
            c.lineCap = "round";
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
            c.fillStyle = colors[layout[i2].trim()];
            c.fillRect(i2 * rooms.grid, i * rooms.grid, rooms.grid, rooms.grid);
        };
        c.fillStyle = p.color;
        c.fillRect(0, canvas.height * 0.75, canvas.width, 165);
        switch (room) {
            case 1:
            	draw.paper(62.5, 55);
                if (stats.flowers_gave == true) {
                    draw.sibling(137.5, 75, true);
                    draw.flower(220, 70);
                    draw.flower(210, 90);
                    draw.flower(195, 75);
                    draw.flower(207, 80);
                } else {
                    draw.sibling(137.5, 75);
                };
            break;
            case 2:
                // bushes
                draw.bush(135, 75);
                draw.bush(135, 425);
            	// top flowers
                if (pickups[2][1] == false) {
            		draw.flower(140, 140);
                };
                if (pickups[2][2] == false) {
                	draw.flower(370, 65);
                };
                if (pickups[2][3] == false) {
                	draw.flower(575, 20);
                };
                if (pickups[2][4] == false) {
                	draw.flower(650, 180);
                };
                // bottom flowers
                if (pickups[2][5] == false) {
            		draw.flower(200, 350);
                };
                if (pickups[2][6] == false) {
                	draw.flower(690, 390);
                };
                if (pickups[2][7] == false) {
                	draw.flower(520, 320);
                };
                if (pickups[2][8] == false) {
                	draw.flower(340, 455);
                };
            break;
        }
    };
};

function update() {
    clear();
    colors["_"] = rooms.bg[room];
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
            // when updating this interaction range update the one in the "if (dialog == true) else" below (≈ 120 lines)
        	if (x > 150 && x <= 225 && y <= 200) {
                if (pickups[2][1] == true && pickups[2][2] == true && pickups[2][3] == true && pickups[2][4] == true && pickups[2][5] == true && pickups[2][6] == true && pickups[2][7] == true && pickups[2][8] == true && stats.flowers_gave == false) {
                    stats.flowers_give = true;
            	    sprite = 3;
                } else {
                    sprite = 1;
                };
                interactText = "Talk";
                interactable = true;
            // paper dialog
            } else if (x <= 125 && y <= 150) {
                if (stats.flowers_gave == true) {
                    sprite = 5;
                } else {
                    sprite = 2;
                };
                interactText = "Read";
                interactable = true;
            } else {
            	sprite = 0;
                interactText = "Interact";
            	interactable = false;
    			dialogText = "";
                //console.log("not in range!");
            };

            /*
        	// right wall
            if (x >= canvas.width - 75 && (y < 160 || y > 345)) {
                x = canvas.width - 75;
            };
            */

            // exit
            if (x >= canvas.width - 55 && y >= 160 && y <= 345) {
                room = 2;
                x = 80;
                notif(rooms["titles"][room]);
            };
        break;
        case 2:

            /*
        	// house walls
        	if (x <= 75 && (y < 160 || y > 345)) {
                x = 75;
            };
            */

            interactText = "Pick Up Flower"
            if (pickups[2][1] == false && x >= 115 && x <= 165 && y >= 115 && y <= 165) {
            	sprite = 1;
                pickup = 1;
                interactable = true;
            } else if (pickups[2][2] == false && x >= 345 && x <= 395 && y >= 40 && y <= 90) {
            	sprite = 1;
                pickup = 2;
                interactable = true;
            } else if (pickups[2][3] == false && x >= 550 && x <= 600 && y >= -5 && y <= 45) {
            	sprite = 1;
                pickup = 3;
                interactable = true;
            } else if (pickups[2][4] == false && x >= 625 && x <= 675 && y >= 155 && y <= 205) {
            	sprite = 1;
                pickup = 4;
                interactable = true;
            } else if (pickups[2][5] == false && x >= 175 && x <= 225 && y >= 325 && y <= 375) {
            	sprite = 1;
                pickup = 5;
                interactable = true;
            } else if (pickups[2][6] == false && x >= 665 && x <= 715 && y >= 365 && y <= 415) {
            	sprite = 1;
                pickup = 6;
                interactable = true;
            } else if (pickups[2][7] == false && x >= 495 && x <= 545 && y >= 295 && y <= 345) {
            	sprite = 1;
                pickup = 7;
                interactable = true;
            } else if (pickups[2][8] == false && x >= 315 && x <= 365 && y >= 430 && y <= 480) {
            	sprite = 1;
                pickup = 8;
                interactable = true;
            } else {
            	sprite = 0;
                pickup = 0;
                interactText = "Interact";
            	interactable = false;
    			dialogText = "";
                //console.log("not in range!");
            }
            // exit to house
            if (x <= 55 && y >= 160 && y <= 345) {
                room = 1;
                x = canvas.width - 80;
                notif(rooms["titles"][room]);
            };
            // exit to silly str
            if (x >= canvas.width - 25) {
                room = 3;
                x = 80;
                notif(rooms["titles"][room]);
            };
        break;
        case 3:
            // exit to front yard
            if (x <= 55) {
                room = 2;
                x = canvas.width - 80;
                notif("Front yard");
            };
            // exit to happy mart front
            if (x >= canvas.width - 55) {
                room = 4;
                x = 80;
                notif(rooms["titles"][room]);
            };
        break;
        case 4:

            /*
            // mart walls
        	if (x >= canvas.width - 75 && (y < 160 || y > 345)) {
                x = canvas.width - 75;
            };
            */

            // exit to silly str
            if (x <= 25) {
                room = 3;
                x = canvas.width - 80;
                notif(rooms["titles"][room]);
            };
            // exit to happy mart
            /*if (x >= canvas.width - 55 && y >= 160 && y <= 345) {
                room = 5;
                x = 80;
                notif(rooms["titles"][room]);
            };*/
        break;
        case 5:
            // exit to front of mart
            if (x <= 55 && y >= 160 && y <= 345) {
                room = 4;
                x = canvas.width - 80;
                notif(rooms["titles"][room]);
            };
        break;
        /*
        // top flowers
           draw.flower(300, 100);
           draw.flower(435, 140);
           draw.flower(575, 20);
        // bottom flowers
           draw.flower(200, 350);
           draw.flower(690, 390);
           draw.flower(520, 320);
           draw.flower(340, 454);
        */
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
    	c.roundRect(25, offset, 18 * l + 60, 50, 5);
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
        if (sprite == 3 && stats.flowers_give == true) {
            stats.flowers_give = true;
            stats.flowers_gave = true;
        };
    } else {
        // when updating this interaction range update the one in "sibling dialog" above
        if (stats.flowers_gave == true && room == 1 && x > 150 && x <= 225 && y <= 200) {
            sprite = 4;
        };
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
    if (dialogText[0] != "") {
    	dialog = true;
    } else {
    	if (interactText == "Pick Up Flower") {
        	console.log(pickup);
        	pickups[room][pickup] = true;
        };
    };
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

let btns = controls.children;
for (let i = 0; i < btns.length; i++) {
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
};