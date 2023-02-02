var clicks = 0;
if (localStorage.getItem("clicks") != null) {
    clicks = Number(localStorage.getItem("clicks"));
};
var clickCounter = document.getElementById("clicks");
var increment = document.getElementById("increment");
var clickButton = document.getElementById("clickButton");
var upgradeButton = document.getElementById("upgradeButton");
var importButton = document.getElementById("importButton");
var textButton = document.getElementById("textButton");
var cpc = document.getElementById("cpc");
var c2u = document.getElementById("c2u");

setInterval(function() {
    localStorage.setItem("clicks", clicks);
}, 100);

function click() {
    clicks += Number(increment.innerHTML);
    clickCounter.innerHTML = clicks;
}
function importClicks() {
    var cc = prompt("Enter the number of clicks to import");
    if (Math.floor(Number(cc)) > 0) {
        if (clicks != 0) {
            clicks += Math.floor(Number(cc));
            alert("Set clicks to " + (clicks + Math.floor(Number(cc))));
        };   
    };
    clickCounter.innerHTML = clicks;
};
function toggleText() {
    var button = document.getElementById("clickButton")
    if (button.innerHTML != "") {
        button.innerHTML = "";
    } else {
        button.innerHTML = "Click Me!";
    }
};
function upgradeClick() {
    if (clicks >= c2u.innerHTML) {
        increment.innerHTML++;
        cpc.innerHTML = Number(cpc.innerHTML) + 1;
        c2u.innerHTML = Math.round(Number(c2u.innerHTML) + 50 * (cpc.innerHTML * (1.5 + cpc.innerHTML / 3)));
    } else {
        let clicksLeft = Number(c2u.innerHTML) - clicks;
        alert("You don't have enough clicks to upgrade your click! (You're only " + clicksLeft + " clicks away!)");
    }
};

clickButton.addEventListener("onclick", click);
upgradeButton.addEventListener("onclick", upgradeClick);
importButton.addEventListener("onclick", importClicks);
textButton.addEventListener("onclick", toggleText);
