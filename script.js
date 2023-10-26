var tablinks = document.getElementsByClassName('sub_link');
var tabcontents = document.getElementsByClassName('content');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active_link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab");
}

var element = document.getElementById('certi');
var images = ["images/first.jpg", "images/two.jpg", "images/three.jpg", "images/four.jpg", "images/five.jpg"]
var num = 0;
function next() {
    num++;
    if (num >= images.length) {
        num = 0;
        element.src = images[num];
    }
    else {
        element.src = images[num];
    }
}
function back() {
    num--;
    if (num < 0) {
        num = images.length - 1;
        element.src = images[num];
    }
    else {
        element.src = images[num];
    }
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
