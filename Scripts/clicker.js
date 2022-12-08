var clicks = 0;
var clickCounter = document.getElementById("clicks");
var increment = document.getElementById("increment");
var clickButton = document.getElementById("clickButton");
var upgradeButton = document.getElementById("upgradeButton");
var importButton = document.getElementById("importButton");
var textButton = document.getElementById("textButton");
var cpc = document.getElementById("cpc");
var c2u = document.getElementById("c2u");

function counter() {
    clicks += Number(increment.innerHTML);
    clickCounter.innerHTML = clicks;
}
function importClicks() {
    var cc = prompt("Enter the number of clicks to import");
    if (Math.floor(Number(cc)) > 0) {
        if (clicks != 0) {
            let yn = prompt("Add " + Math.floor(cc) + " to " + clicks + "? (Type in \"yes\" or \"no\")");
            if (yn.toLowerCase().indexOf("y") != -1) {
                alert("Set clicks to " + (clicks + Math.floor(Number(cc))));
                clicks += Math.floor(Number(cc));
            } else {
                alert("Set clicks to " + cc);
                clicks = Math.floor(Number(cc));
            }
        } else {
            alert("Set clicks to " + cc)
            clicks = Math.floor(Number(cc));
        }
    }
    clickCounter.innerHTML = clicks;
};
function toggleText() {
    var button = document.getElementById("clickButton")
    if (button.innerHTML != "Click Me!") {
        button.innerHTML = "Click Me!"
    } else {
        button.innerHTML = ""
    }
};
function upgradeClick() {
    if (clicks >= c2u.innerHTML) {
        increment.innerHTML++;
        cpc.innerHTML = Number(cpc.innerHTML) + 1;
        c2u.innerHTML = Math.round(Number(c2u.innerHTML) + 50 * (cpc.innerHTML * (1.5 + cpc.innerHTML / 3)));
    } else {
        let clicksLeft = Number(c2u.innerHTML) - clicks
        alert("You don't have enough clicks to upgrade your click! (Don't worry, you're only " + clicksLeft + " clicks away!)")
    }
};

clickButton.addEventListener("onclick", counter);
upgradeButton.addEventListener("onclick", upgradeClick);
importButton.addEventListener("onclick", importClicks);
textButton.addEventListener("onclick", toggleText);
