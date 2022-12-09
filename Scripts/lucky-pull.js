var wishType = document.getElementById("wishType");
var onePull = document.getElementById("onePull");
var tenPull = document.getElementById("tenPull");
var twoStars = false
var fiveStars = true
var twoStarChance = 0
var threeStarChance = 85
var fourStarChance = 13
var fiveStarChance = 2

function wish(pulls) {
    let pull = Math.floor(Math.random() * 100);
    alert(pull);
};

function changeType(type) {
    if (type == 1) {
        alert("set to rpg");
        else if (type == 2) {
            alert("set to girls band party");
            else if (type == 3) {
                alert("set to bgs");
            };
        };
    };
};
