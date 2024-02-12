/*
to do:
• silly mode
• custom color
• fix volume
*/

// yes im that lazy
function find(id) {
	return document.getElementById(id);
}

var b = document.body;
var counter = find("counter");
var td = find("time-display");
var tp = find("toggle-pomo");
var stop = find("stop");

var time = 25.00;
var timerOn = false;

const intervals = {
	work: 25,
	sBreak: 5,
	lBreak: 15,
};
var int = "work";
var cycles = 0;

var intTimer = 1000; // default 1000 ms
var sound = "yippee";
var sounds = {
	bennett: find("bennett"),
    boom: find("boom"),
    bubbles: find("bubbles"),
	chime: find("chime"),
	snore: find("snore"),
    wow: find("wow"),
	yippee: find("yippee"),
};
var auto = false;
var silly = false;

// sidebar
var settingsBtn = find("settings-button");
var icon = settingsBtn.firstChild.firstChild;
var fsBtn = find("fullscreen-button");

// settings
var settings = find("settings");
var intCont = find("interval-container");
var workInt = find("work-interval");
var sBreakInt = find("short-break-interval");
var lBreakInt = find("long-break-interval");
var defaultBtn = find("default");

var notifSound = find("notif-sound");
var playSound = find("play-sound");

var saveBtn = find("save");
var cancelBtn = find("cancel");

function timer() {
	if (timerOn == true) {
		let timeInt;
		let currentInt = intervals[int];
		if (time == currentInt) {
			timeInt = [currentInt.toString(), "00"];
		} else {
			timeInt = time.toString().split(".");
		}
		//console.log(timeInt);
		let s = timeInt[1].slice(0, 2);
		if (s == 0) {
			if (time == currentInt) {
				time -= 0.41;
			} else {
				time -= 0.41;
			}
		} else {
			time -= 0.01;
		}
		timeInt = time.toString().split(".");
		let m = timeInt[0];
		let s1 = timeInt[1].slice(0, 2);
		let s2 = timeInt[1].slice(2, 3);
		s = Math.round(Number(s1 + "." + s2));
		if (s < 10) {
			s = "0" + s.toString();
		} else if (s == 60) {
			s = "00";
		}
		td.innerHTML = m + ":" + s;
		if (time <= 0) {
			cycles++;
			counter.innerHTML = cycles/2 + "/4 cycles";
			timerOn = false;
			let start = "Continue";
			let pbr = 1;
			if (cycles == 7) {
				pbr = 2;
				//pbr = Math.floor((Math.random() * 100) + 101)/100;
				int = "lBreak";
				start = silly == true ? "LONG BREAK!1!!1" : "Start Long Break";
			} else {
				if (int == "work") {
					int = "sBreak";
					start = silly == true ? "BREAK!!" : "Start Short Break";
				} else if (int == "lBreak") {
					cycles = 0;
					counter.innerHTML = "0/4 cycles";
					int = "work";
					start = silly == true ? "AGAIN AGAIN!" : "Start Pomodoro";
					stop.style.visibility = "hidden";
				} else {
					pbr = 0.5;
					//pbr = Math.floor((Math.random() * 51) + 50)/100;
					int = "work";
					start = silly == true ? "WORK NOWW" : "Start Work Timer";
				}
			}
			if (silly == false) {
				pbr = 1;
			}
			sounds[sound].playbackRate = pbr;
			sounds[sound].play();
			tp.innerHTML = start;
			time = intervals[int];
			td.innerHTML = intervals[int] + ":00";
			//console.log(int);
			if (auto == true && start != "Start Pomodoro") {
				togglePomo();
			}
		}
		stop.style.visibility = "visible";
	}
}

function togglePomo() {
	if (timerOn == true) {
		timerOn = false;
		if (time == intervals.work) {
			settingsBtn.disabled = false;
			icon.setAttribute("fill", "white");
		}
		tp.innerHTML = silly == true ? "unpause (enter the state of productivity)" : "Continue";
	} else {
		timerOn = true;
		settingsBtn.disabled = true;
		icon.setAttribute("fill", "rgb(100, 100, 100)");
		tp.innerHTML = silly == true ? "pause (no distractions)" : "Pause";
	}
}
tp.onclick = togglePomo;


function stopPomo() {
	timerOn = false;
	settingsBtn.disabled = false;
	icon.setAttribute("fill", "white");
	let w = intervals.work.toString();
	time = Number(w + ".00");
	td.innerHTML = w + ":00";
	int = "work";
	cycles = 0;
	counter.innerHTML = "0/4 cycles";
	stop.style.visibility = "hidden";
}
stop.onclick = stopPomo;

function showSettings() {
	if (settings.style.visibility == "visible") {
		cancelSettings();
	} else {
		settings.style.visibility = "visible";
	}
}
settingsBtn.onclick = showSettings;

function setDefault() {
	workInt.value = 25;
	sBreakInt.value = 5;
	lBreakInt.value = 15;
}
defaultBtn.onclick = setDefault;

function testSound() {
    sounds[sound].play();
};
playSound.onclick = testSound;

function saveSettings() {
	let s = true;
	let NO = [];
	if (time == intervals.work) {
		let t = Number(workInt.value);
		if (t >= workInt.min && t <= workInt.max) {
			time = Number(t.toString() + ".00");
			td.innerHTML = t + ":00";
			intervals.work = t;
		} else {
			NO.push(workInt);
			s = workInt;
		}
		t = Number(sBreakInt.value);
		if (t >= sBreakInt.min && t <= sBreakInt.max) {
			intervals.sBreak = t;
		} else {
			NO.push(sBreakInt);
			s = sBreakInt;
		}
		t = Number(lBreakInt.value);
		if (t >= lBreakInt.min && t <= lBreakInt.max) {
			intervals.lBreak = t;
		} else {
			NO.push(lBreakInt);
			s = lBreakInt;
		}
	}
	sound = notifSound.value;
	if (s == true) {
		settings.style.visibility = "hidden";
	} else {
		if (NO.length > 1) {
			NO.forEach(function(i){
				i.classList.add("error");
			});
		} else {
			if (typeof s == "object") {
				s.classList.add("error");
			}
		}
		//cancelSettings();
	}
}
saveBtn.onclick = saveSettings;

function cancelSettings() {
	workInt.classList.remove("error");
	workInt.value = intervals.work;
	sBreakInt.classList.remove("error");
	sBreakInt.value = intervals.sBreak;
	lBreakInt.classList.remove("error");
	lBreakInt.value = intervals.lBreak;
	settings.style.visibility = "hidden";
}
cancelBtn.onclick = cancelSettings;

function numberInput(e) {
	if (e.key == "." || e.key == "e") {
		e.preventDefault();
	}
}
let c = intCont.childNodes;
// loops through all children
c.forEach(function(i){
	// i is basically c[i]
	let div = i.childNodes;
	div.forEach(function(i){
		// nested loop
		if (i.tagName == "INPUT") {
			i.onfocus = function(){
				i.classList.remove("error");
			};
			i.onkeydown = numberInput;
		}
	})
});

function fullscreen() {
	let d = document.documentElement;
	let fs = document.fullscreen;
	console.log(fs);
	if (fs == false) {
		if (d.requestFullscreen) {
			d.requestFullscreen();
		} else if (d.webkitRequestFullscreen) {
			d.webkitRequestFullscreen();
		} else if (d.msRequestFullscreen) {
			d.msRequestFullscreen();
		}
	} else {
		let d = document;
		if (d.exitFullscreen) {
			d.exitFullscreen();
		} else if (d.webkitExitFullscreen) {
			d.webkitExitFullscreen();
		} else if (d.msExitFullscreen) {
			d.msExitFullscreen();
		}
	}
}
fsBtn.onclick = fullscreen;

b.onload = setInterval(timer, intTimer);
setTimeout(function(){find("line").style.width = "20em"}, 500);