// yes im that lazy
function find(id) {
	return document.getElementById(id);
}
function s(key, item) {
	localStorage.setItem(key, item);
}
function g(key) {
	return localStorage.getItem(key);
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

var intTimer = 5; // default 1000 ms
if (intTimer < 1000 && (window.location.href.match("github") || window.location.href.match("netlify"))) {
	intTimer = 1000;
}
var sound = "yippee";
var sounds = {
	alarm: find("alarm"),
	bennett: find("bennett"),
    boom: find("boom"),
    bubbles: find("bubbles"),
	chime: find("chime"),
	chinese: find("chinese"),
	mash: find("mash"),
	pipe: find("pipe"),
	scream: find("scream"),
	siren: find("siren"),
	snore: find("snore"),
	windows: find("windows"),
    wow: find("wow"),
	yippee: find("yippee"),
};
if (g("timer_sound") != null) {
	sound = g("timer_sound");
	sounds[sound].selected = true;
}
var auto = false;
var notifs = false;
var silly = false;
var sillyText = {
	pomoStart: "click to start pomodoro",
	work: "WORK NOWW",
	sBreak: "BREAK!1!",
	lBreak: "LONG BREAK!1!!1",
	pomoEnd: "AGAIN AGAIN",
	pause: "pause (no distractions okay)",
	unpause: "unpause (back to work)",
	stop: "end time (do not click)",
	noTasks: "no tasks yet—you should add some",
	tasksDone: "yay you finished all the tasks!!",
};
var jpText = {
	pomoStart: "ポモドロはスタート",
	work: "ウォークタイマーはスタート",
	sBreak: "ショートブレーキはスタート",
	lBreak: "ロングブレークはスタート",
	pomoEnd: "ポモドロはスタート",
	pause: "ポーズ",
	unpause: "アンポーズ",
	stop: "ストップ",
	noTasks: "タスクスなし",
	tasksDone: "タスクスはコンプリート！",
};
var phText = {
	pomoStart: "Isimula ang pomodoro",
	work: "Isimula ang work timer",
	sBreak: "Isimula ang maikling break",
	lBreak: "Isimula ang mahabang break",
	pomoEnd: "Ulitin ang pomodoro",
	pause: "Ipause yung timer",
	unpause: "Unpause",
	stop: "Hinto",
	noTasks: "Walang tasks pa",
	tasksDone: "Tinapos mo yung lahat ng tasks :D",
};

var theme = {h: 120, s: 100, l: 70};

// sidebar
var settingsBtn = find("settings-button");
var icon = settingsBtn.firstChild.firstChild;
var taskBtn = find("tasks-button");
var fsBtn = find("fullscreen-button");

// tasks
var taskList = [];
var tasks = find("tasks");
var taskContainer = find("task-container");
var addTaskBtn = find("add-task");
var drag = find("drag");

// settings
var settings = find("settings");
var intCont = find("interval-container");
var workInt = find("work-interval");
var sBreakInt = find("short-break-interval");
var lBreakInt = find("long-break-interval");
var defaultBtn = find("default");
if (g("timer_work") != null) {
	let t = Number(g("timer_work"));
	time = Number(t.toString() + ".00");
	td.innerHTML = t + ":00";
	intervals.work = t;
	workInt.value = t;
}
if (g("timer_sBreak") != null) {
	let t = Number(g("timer_sBreak"));
	intervals.sBreak = t;
	sBreakInt.value = t;
}
if (g("timer_lBreak") != null) {
	let t = Number(g("timer_lBreak"));
	intervals.lBreak = t;
	lBreakInt.value = t;
}

var notifSound = find("notif-sound");
notifSound.value = sound;
var playSound = find("play-sound");

var color = find("color");
if (g("timer_color_h") != null && g("timer_color_s") != null && g("timer_color_l") != null) {
	let h = g("timer_color_h");
	let s = g("timer_color_s");
	let l = g("timer_color_l");
	theme = {h, s, l};
	color.value = HSLToHex(h, s, l);
	setTheme(h, s, l);
}

var notifBtn = find("notif");
if (g("timer_notifs") == "true") {
	notifs = true;
	notifBtn.dataset.enabled = true;
	notifBtn.innerHTML = "ON";
}

var autoBtn = find("auto");
if (g("timer_auto") == "true") {
	auto = true;
	autoBtn.dataset.enabled = true;
	autoBtn.innerHTML = "ON";
}

var sillyBtn = find("silly");
if (g("timer_silly") == "true") {
	silly = true;
	tp.innerHTML = sillyText.pomoStart;
	sillyBtn.dataset.enabled = true;
	sillyBtn.innerHTML = "ON";
}
if (silly == true) {
	taskContainer.innerHTML = sillyText.noTasks;
}

var saveBtn = find("save");
var cancelBtn = find("cancel");

function save() {
	s("timer_work", intervals.work);
	s("timer_sBreak", intervals.sBreak);
	s("timer_lBreak", intervals.lBreak);
	s("timer_sound", sound);
	s("timer_color_h", theme.h);
	s("timer_color_s", theme.s);
	s("timer_color_l", theme.l);
	s("timer_notifs", notifs);
	s("timer_auto", auto);
	s("timer_silly", silly);
}

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
			m++;
			s = "00";
		}
		td.innerHTML = m + ":" + s;
		if (time <= 0) {
			cycles++;
			let cycleText = "cycles";
			if (jp == true) {
				cycleText = "サイクル";
			} else if (ph == true) {
				cycleText = " cycle";
			}
			counter.innerHTML = cycles/2 + "/4 " + cycleText;
			timerOn = false;
			let start = "Continue";
			let pbr = 1;
			if (cycles == 7) {
				pbr = 2;
				//pbr = Math.floor((Math.random() * 100) + 101)/100;
				int = "lBreak";
				start = "Start Long Break"
				if (jp == true) {
					start = jpText.lBreak;
				} else if (ph == true) {
					start = phText.lBreak;
				} else if (silly == true) {
					start = sillyText.lBreak;
				}
			} else {
				if (int == "work") {
					int = "sBreak";
					start = "Start Short Break"
					if (jp == true) {
						start = jpText.sBreak;
					} else if (ph == true) {
						start = phText.sBreak;
					} else if (silly == true) {
						start = sillyText.sBreak;
					}
				} else if (int == "lBreak") {
					stopPomo();
				} else {
					pbr = 0.5;
					//pbr = Math.floor((Math.random() * 51) + 50)/100;
					int = "work";
					start = "Start Work Timer"
					if (jp == true) {
						start = jpText.work;
					} else if (ph == true) {
						start = phText.work;
					} else if (silly == true) {
						start = sillyText.work;
					}
				}
			}
			localStorage.setItem("timer_int", int);
			if (silly == false) {
				pbr = 1;
			}
			sounds[sound].playbackRate = pbr;
			sounds[sound].play();
			tp.innerHTML = start;
			notify(start, "");
			time = intervals[int];
			td.innerHTML = intervals[int] + ":00";
			//console.log(int);
			console.log(auto, cycles);
			if (cycles != 0) {
				tp.innerHTML = start;
				if (auto == true) {
					togglePomo();
				}
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
		if (jp == true) {
			tp.innerHTML = jpText.unpause;
		} else if (ph == true) {
			tp.innerHTML = phText.unpause;
		} else if (silly == true) {
			tp.innerHTML = sillyText.unpause;
		} else {
			tp.innerHTML = "Continue";
		}
	} else {
		timerOn = true;
		settingsBtn.disabled = true;
		icon.setAttribute("fill", "rgb(100, 100, 100)");
		if (jp == true) {
			tp.innerHTML = jpText.pause;
		} else if (ph == true) {
			tp.innerHTML = phText.pause;
		} else if (silly == true) {
			tp.innerHTML = sillyText.pause;
		} else {
			tp.innerHTML = "Pause";
		}
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
	if (jp == true) {
		tp.innerHTML = jpText.pomoEnd;
	} else if (ph == true) {
		tp.innerHTML = phText.pomoEnd;
	} else if (silly == true) {
		tp.innerHTML = sillyText.pomoEnd;
	} else {
		tp.innerHTML = "Start Pomodoro";
	}
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
    sounds[notifSound.value].play();
}
playSound.onclick = testSound;

function saveSettings() {
	let proceed = true;
	let NO = [];
	if (time == intervals.work) {
		let t = Number(workInt.value);
		if (t >= workInt.min && t <= workInt.max) {
			time = Number(t.toString() + ".00");
			td.innerHTML = t + ":00";
			intervals.work = t;
		} else {
			NO.push(workInt);
			proceed = workInt;
		}
		t = Number(sBreakInt.value);
		if (t >= sBreakInt.min && t <= sBreakInt.max) {
			intervals.sBreak = t;
		} else {
			NO.push(sBreakInt);
			proceed = sBreakInt;
		}
		t = Number(lBreakInt.value);
		if (t >= lBreakInt.min && t <= lBreakInt.max) {
			intervals.lBreak = t;
		} else {
			NO.push(lBreakInt);
			proceed = lBreakInt;
		}
	}
	sound = notifSound.value;
	notifs = notifBtn.dataset.enabled == "true" ? true : false;
	if (Notification.permission != "granted") {
		Notification.requestPermission()/*.then(function(p){
			if (p == "denied") {
				//alert("Notifications denied; please click Allow if you want to be notified whenever the intervals end.");
			}
		});*/
	}
	auto = autoBtn.dataset.enabled == "true" ? true : false;
	silly = sillyBtn.dataset.enabled == "true" ? true : false;
	if (jp == false && ph == false) {
		if (silly == true) {
			tp.innerHTML = sillyText.pomoStart;
			if (taskContainer.classList.value.match("no-tasks")) {
				if (taskContainer.innerHTML.match(/no/i)) {
					taskContainer.innerHTML = sillyText.noTasks;
				} else {
					taskContainer.innerHTML = sillyText.tasksDone;
				}
			}
		} else {
			tp.innerHTML = "Start Pomodoro";
			if (taskContainer.classList.value.match("no-tasks")) {
				taskContainer.innerHTML = "No tasks yet"; // if u change this change the one in deleteTask func
			}
		}
	}
	let hsl = hexToHSL(color.value);
	setTheme(hsl.h, hsl.s, hsl.l);
	
	if (proceed == true) {
		settings.style.visibility = "hidden";
		save();
	} else {
		if (NO.length > 1) {
			NO.forEach(function(i){
				i.classList.add("error");
			});
		} else {
			if (typeof proceed == "object") {
				proceed.classList.add("error");
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
	notifBtn.dataset.enabled = notifs;
	notifBtn.innerHTML = notifs == true ? "ON" : "OFF";
	autoBtn.dataset.enabled = auto;
	autoBtn.innerHTML = auto == true ? "ON" : "OFF";
	sillyBtn.dataset.enabled = silly;
	sillyBtn.innerHTML = silly == true ? "ON" : "OFF";
	let style = getComputedStyle(document.documentElement);
	let hex = HSLToHex(theme.h, theme.s, 70);
	//let hex = HSLToHex(theme.h, theme.s, theme.l);
	color.value = hex;
	color.style.backgroundColor = "hsl(" + theme.h + "deg, " + theme.s + "%, " + 25 + "%)";
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
	});
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

function colorPreview() {
	let hsl = hexToHSL(color.value);
	let h = hsl.h;
	let s = hsl.s;
	let l = hsl.l;
	color.style.backgroundColor = "hsl(" + h + "deg, " + s + "%, " + 25 + "%)";
	//console.log(color.value, h, s, l, color.style.backgroundColor);
}
color.onblur = colorPreview;

function setTheme(h, s, l) {
	theme = {h: h, s: s, l: l};
	let root = document.createElement("style");
	root.id = "custom-color";
	root.innerHTML = `:root {
		--main: hsl(` + h + "deg, " + s + `%, 70%);
    	--light: hsl(` + h + "deg, " + s + `%, 85%);
    	--dark: hsl(` + h + "deg, " + s + `%, 25%);
    	--settings: hsla(` + h + "deg, " + s + `%, 20%, 0.5);
		--settings-mobile: hsl(` + h + "deg, " + s + `%, 20%);
	}`;
	if (find("custom-color") != null) {
		find("custom-color").remove();
	}
	document.head.appendChild(root);
}

function toggleNotifs() {
	let e = notifBtn.dataset.enabled;
	if (e == "true") {
		notifBtn.dataset.enabled = false;
		notifBtn.innerHTML = "OFF";
	} else {
		notifBtn.dataset.enabled = true;
		notifBtn.innerHTML = "ON";
	}
}
notifBtn.onclick = toggleNotifs;

function notify(t, st, i /*text, subtext, icon*/) {
	if (notifs == true && Notification.permission == "granted" && document.hasFocus != true) {
		var n = new Notification(t, {st, i});
	}
}

function toggleAuto() {
	let e = autoBtn.dataset.enabled;
	if (e == "true") {
		autoBtn.dataset.enabled = false;
		autoBtn.innerHTML = "OFF";
	} else {
		autoBtn.dataset.enabled = true;
		autoBtn.innerHTML = "ON";
	}
}
autoBtn.onclick = toggleAuto;

function toggleSilly() {
	let e = sillyBtn.dataset.enabled;
	if (e == "true") {
		sillyBtn.dataset.enabled = false;
		sillyBtn.innerHTML = "OFF";
	} else {
		sillyBtn.dataset.enabled = true;
		sillyBtn.innerHTML = "ON";
	}
}
sillyBtn.onclick = toggleSilly;

function toggleTasks() {
	let t = tasks.style.visibility;
	if (t == "visible") {
		tasks.style.visibility = "hidden";
	} else {
		tasks.style.visibility = "visible";
	}
}
taskBtn.onclick = toggleTasks;

//let offset = 1;
function addTask(_, done = null, txt = "") {
	let t = document.createElement("div");
	/*if (done != null) {
		t.id = taskList.length - offset;
		offset++;
	} else {*/
		t.id = taskList.length;
	//}
	
	console.log(t.id, taskList);
	taskList.push({done: done, text: txt});
	saveTasks();
	
	let check = document.createElement("input");
	check.title = "Not yet completed";
	check.type = "checkbox";
	
	let text = document.createElement("div");
	text.classList.add("text");
	text.contentEditable = true;
	text.innerHTML = txt;
	text.onkeydown = function(e){
		taskList[t.id].text = text.innerHTML;
		saveTasks();
		setTimeout(function(){
			if (text.innerHTML == "" && e.key.length == 1 && e.key != " ") {
				text.innerHTML += e.key;
				let r = document.createRange();
				let s = window.getSelection();
				r.setStart(text.childNodes[0], 1);
				r.collapse(true);
				s.removeAllRanges();
				s.addRange(r);
			}
		}, 10);
	};
	
	let del = document.createElement("button");
	del.classList.add("delete-task");
	del.innerHTML = "×";
	
	if (done == true) {
		check.checked = true;
		completeTask(t.id, check, text);
	}
	check.onclick = function(){completeTask(t.id, check, text)};
	del.onclick = function(){deleteTask(t, del)};
	t.appendChild(check);
	t.appendChild(text);
	t.appendChild(del);
	
	let tc = taskContainer;
	if (tc.classList.value.match("no-tasks")) {
		tc.classList.remove("no-tasks");
		tc.innerHTML = "";
		tc.style.textAlign = "left";
	}
	taskContainer.appendChild(t);
}
addTaskBtn.onclick = addTask;

function deleteTask(t, btn) {
	if (btn.style.backgroundColor == "rgb(255, 0, 0)") {
		console.log(t.id);
		for (let i = t.id + 1; i < taskList.length; i++) {
			if (find(i)) {
				find(i).id = i - 1;
			}
		}
		taskList.splice(t.id, 1);
		t.remove();
		saveTasks();
		
		let tc = taskContainer;
		if (taskContainer.innerHTML == "") {
			tc.classList.add("no-tasks");
			if (jp == true) {
				tc.innerHTML = jpText.tasksDone;
			} else if (ph == true) {
				tc.innerHTML = phText.tasksDone;
			} else if (silly == true) {
				tc.innerHTML = sillyText.tasksDone;
			} else {
				tc.innerHTML = "You completed all the tasks!"; // if u change this change the one in saveSettings func
			}
			tc.style.textAlign = "";
		}
	} else {
		btn.style.backgroundColor = "rgb(255, 0, 0)";
		setTimeout(function(){
			if (btn != null) {
				btn.style.backgroundColor = "var(--dark)";
			}
		}, 1000);
	}
}

function completeTask(id, check, text) {
	if (check.checked == false) {
		taskList[id].done = false;
		text.classList.remove("completed");
		check.title = "Not yet completed";
	} else {
		taskList[id].done = true;
		text.classList.add("completed");
		check.title = "Completed!";
	}
	saveTasks();
}

function dragTasks() {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	drag.onmousedown = startDrag;
	
	function startDrag(e) {
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = endDrag;
		document.onmousemove = dragging;
		drag.style.cursor = "grabbing";
	}
	
	function dragging(e) {
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		tasks.style.top = (tasks.offsetTop - pos2) + "px";
		tasks.style.left = (tasks.offsetLeft - pos1) + "px";
	}
	
	function endDrag() {
		document.onmouseup = null;
		document.onmousemove = null;
		drag.style.cursor = "grab";
	}
}
dragTasks();

function saveTasks() {
	setTimeout(function(){
		let t = "";
		if (taskList.length > 0) {
			for (let i = 0; i < taskList.length; i++) {
				if (taskList[i].text != undefined && taskList[i].text != "undefined" && taskList[i].text != "") {
					t += taskList[i].done + "✯" + taskList[i].text + "✂";
				}
			}
			console.log(t);
			//**s("timer_tasks", t);
		} else {
			//**s("timer_tasks", null);
		}
	}, 10);
	//console.log(taskList);
}

b.onload = function(){
	let t = g("timer_tasks");
	if (t != null && t != "") {
		t = t.split("✂");
		for (let i = 0; i < t.length; i++) {
			let task = t[i].split("✯");
			let done = false;
			// we add save in the future…
			//let text = task[1].toString().trim();
			if (task[0] == "true") {
				done = true;
			}
			/*
			if (text != undefined && text != "undefined" && text != "") {
				taskList.push({done: done, text: text});
				addTask(0, done, text);
			}*/
		}
	}
	console.log(taskList);
	setInterval(timer, intTimer);
};

/*
chinese: find("chinese"),
	mash: find("mash"),
	pipe: find("pipe"),
	scream: find("scream"),
	snore: find("snore"),
	windows: find("windows"),
*/

// JP version

var jp = false;
if (jp == true || window.location.href.match(/#jp/i) || window.location.href.toLowerCase().match("jp")) {
	jp = true;
	find("h1").innerHTML = "じ—っ";
	line.remove();
	find("h2").innerHTML = "(staaare)";
	tp.innerHTML = jpText.pomoStart;
	stop.innerHTML = jpText.stop;
	find("settings-title").innerHTML = "セッティングス";
	find("work-text").innerHTML = "ウォーク";
	find("sBreak-text").innerHTML = "ショート ブレーク";
	find("lBreak-text").innerHTML = "ロング ブレーク";
	defaultBtn.innerHTML = "リセット";
	find("alarm-option").innerHTML = "アラーム クロック";
	find("bennett-option").innerHTML = "冒険だ冒険！";
	find("boom-option").innerHTML = "ドーン";
	find("bubbles-option").innerHTML = "かわいいのバブルス";
	find("chime-option").innerHTML = "チャイム";
	find("chinese-option").innerHTML = "中";
	find("mash-option").innerHTML = "モンスター マッシュ";
	find("pipe-option").innerHTML = "ガーン！";
	find("scream-option").innerHTML = "ギャー！";
	find("siren-option").innerHTML = "サイレン！";
	find("snore-option").innerHTML = "※スノル※ミミミ";
	find("windows-option").innerHTML = "ウィンドース XP";
	find("wow-option").innerHTML = "ウァアアウ";
	find("yippee-option").innerHTML = "ヤッタ〜";
	find("theme-text").innerHTML = "テーマ： ";
	find("tasks-title").innerHTML = "タスクス";
	if (taskContainer.classList.value.match("no-tasks")) {
		taskContainer.innerHTML = jpText.noTasks;
	}
	find("nunnerverse").innerHTML = "ナネルヴェルス²に行く";
}

// PH version
var ph = false;
if ((ph == true || window.location.href.match(/#ph/i) || window.location.href.toLowerCase().match("ph")) && jp == false) {
	ph = true;
	find("h1").innerHTML = "Palaging distrakted";
	find("h2").innerHTML = "(makakatulong kami)";
	tp.innerHTML = phText.pomoStart;
	stop.innerHTML = phText.stop;
	find("settings-title").innerHTML = "Setting";
	find("work-text").innerHTML = "Trabaho (lol)";
	find("sBreak-text").innerHTML = "Maikling break";
	find("lBreak-text").innerHTML = "Mahabang break";
	defaultBtn.innerHTML = "Reset to default";
	find("alarm-option").innerHTML = "HUY GISING NA";
	find("bennett-option").innerHTML = "bouken da bouken";
	find("boom-option").innerHTML = "VINE BUM";
	find("bubbles-option").innerHTML = "kyut na bubble";
	find("chime-option").innerHTML = "ding";
	find("chinese-option").innerHTML = "nagriring yung phone mo";
	find("mash-option").innerHTML = "monster mash";
	find("pipe-option").innerHTML = "METAL PIPE";
	find("siren-option").innerHTML = "WANG WANG";
	find("scream-option").innerHTML = "SIGAW";
	find("snore-option").innerHTML = "*SNORE* MIMIMI";
	find("windows-option").innerHTML = "windows xp startup";
	find("wow-option").innerHTML = "waaaauw";
	find("yippee-option").innerHTML = "YEHEYYY";
	find("theme-text").innerHTML = "Tema: ";
	find("tasks-title").innerHTML = "Mga task";
	if (taskContainer.classList.value.match("no-tasks")) {
		taskContainer.innerHTML = phText.noTasks;
	}
	find("tip").innerText = "Dapat palaging nakabukas ang tab nito o naka split-screen ka para maggagana ito!"
	find("nunnerverse").innerHTML = "Papunta sa NanerBers²";
}

setTimeout(function(){
	if (find("line")) {
		find("line").style.width = "20em";
	}
}, 500);

// check if mobile
const devices = [/Android/i, /BlackBerry/i, /iPhone/i, /iPad/i, /iPod/i, /webOS/i, /Windows Phone/i];
var mobile = false;
devices.forEach(function(i){
	if (navigator.userAgent.match(i) != null) {
		mobile = true;
		//console.log("mobile device spotted! " + i);
	}
});
if (mobile == true) {
	settingsBtn.innerHTML = "≡";
	fsBtn.style.visibility = "hidden";
	settings.style.background = "var(--settings-mobile)";
	settings.style.opacity = 0.95;
	notifBtn.disabled = true;
	console.log("mobile mode ON");
}









// color functions pls ignore
function hexToHSL(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min){
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        
        h /= 6;
    }

    h = Math.round(h*360);
    s = Math.round(s*100);
    l = Math.round(l*100);

    return { h, s, l };
}

function HSLToHex(h, s, l) {
    l /= 100;
    let a = s * Math.min(l, 1 - l) / 100;
    let f = n => {
        let k = (n + h / 30) % 12;
        let color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
	return `#${f(0)}${f(8)}${f(4)}`;
}