var title = document.getElementById("title");
var button = document.getElementById("clickButton");
var checkboxes = document.getElementById("checkboxes");
var cb = Array.prototype.slice.call(checkboxes.querySelectorAll("*"));

function click() {
    var clicks = document.getElementById('clicks');
    var newClicks = Number(clicks.innerHTML) + 1;
    clicks.innerHTML = newClicks;
};

button.addEventListener("onclick",
    var clickMsg = document.getElementById('clickMsg');
    if (Number(newClicks) == 50) {
        clickMsg.innerHTML = 'wow you did it';
    };
    if (Number(newClicks) == 100) {
        clickMsg.innerHTML = 'oh you got 100 clicks now thats nice';
    };
    if (Number(newClicks) == 150) {
        clickMsg.innerHTML = 'um you know you can stop now';
    };
    if (Number(newClicks) == 250) {
        clickMsg.innerHTML = '…';
    };
    if (Number(newClicks) == 300) {
        clickMsg.innerHTML = 'ur clicking a lot huh…';
    };
    if (Number(newClicks) == 350) {
        clickMsg.innerHTML = 'w-well just so you know…';
    };
    if (Number(newClicks) == 400) {
        clickMsg.innerHTML = 'I\'M NOT GONNA ADD ANY MORE MESSAGES AFTER THIS, OKAY?!';
    };
    if (Number(newClicks) == 450) {
        clickMsg.innerHTML = 'h-hey why\'re you still clicking this button??';
    };
    if (Number(newClicks) == 500) {
        clickMsg.innerHTML = 'oh I SEE WHAT YOU\'RE TRYNA DO!';
    };
    if (Number(newClicks) == 550) {
        clickMsg.innerHTML = 'u wanna something like…';
    };
    if (Number(newClicks) == 600) {
        clickMsg.innerHTML = 'THE SECRET CODE FOR THE CHECKBOXES!!!';
    };
    if (Number(newClicks) == 650) {
        clickMsg.innerHTML = 'well i AIN\'T TELLIN YA!';
    };
    if (Number(newClicks) == 700) {
        clickMsg.innerHTML = '…';
    };
    if (Number(newClicks) == 750) {
        clickMsg.innerHTML = 'i said, I AIN\'T TELLIN YA!';
    };
    if (Number(newClicks) == 800) {
        clickMsg.innerHTML = 'do u REALLY expect me to tell you…?';
    };
    if (Number(newClicks) == 850) {
        clickMsg.innerHTML = 'well…you\'ve been clicking for a while now…';
    };
    if (Number(newClicks) == 900) {
        clickMsg.innerHTML = 'YOU BETTER NOT BE USING AN AUTO-CLICKER THOUGH or else SHAME ON U';
    };
    if (Number(newClicks) == 950) {
        clickMsg.innerHTML = 'i\'ll tell you the secret code…at 1,500 CLICKS!';
    };
    if (Number(newClicks) == 1000) {
        clickMsg.innerHTML = 'ok, so you\'re really dedicated and hit 1,000 clicks, huh?';
    };
    if (Number(newClicks) == 1050) {
        clickMsg.innerHTML = 'the next time you\'ll get a message from me is gonna be at 1,250 clicks!! so get clickin\'!';
    };
    if (Number(newClicks) == 1250) {
        clickMsg.innerHTML = 'u really wanna know what it is, huh…';
    };
    if (Number(newClicks) == 1300) {
        clickMsg.innerHTML = 'ok ok i\'ll tell you already…';
    };
    if (Number(newClicks) == 1350) {
        clickMsg.innerHTML = 'the secret code…';
    };
    if (Number(newClicks) == 1400) {
        clickMsg.innerHTML = '…for the checkboxes…';
    };
    if (Number(newClicks) == 1450) {
        clickMsg.innerHTML = '…IS……………';
    };
    if (Number(newClicks) == 1500) {
        clickMsg.innerHTML = 'make the letter "N" okay? you\'re welcome, but it doesn\'t really do anything yet so ummm……';
    };
);
