var message = new Array();
var reps = 2;
var speed = 600;
var p = message.length;
var T = "";
var C = 0;
var mC = 0;
var s = 0;
var sT = null;
if (reps < 1) reps = 1;

function doTheThing() {
    A()
}

function A() {
    s++;
    if (s > 13) {
        s = 1
    }
    if (s == 1) {
        document.title = 'C_ '
    }
    if (s == 2) {
        document.title = 'Co_ '
    }
    if (s == 3) {
        document.title = 'Cos_ '
    }
    if (s == 4) {
        document.title = 'Cosm_ '
    }
    if (s == 5) {
        document.title = 'Cosmi_ '
    }
    if (s == 6) {
        document.title = 'Cosmic_ '
    }
    if (s == 7) {
        document.title = 'Cosmic G_ '
    }
    if (s == 8) {
        document.title = 'Cosmic Ga_ '
    }
    if (s == 9) {
        document.title = 'Cosmic Gam_ '
    }
    if (s == 10) {
        document.title = 'Cosmic Gami_ '
    }
    if (s == 11) {
        document.title = 'Cosmic Gamin_ '
    }
    if (s == 12) {
        document.title = 'Cosmic Gaming_ '
    }
    if (s == 13) {
        document.title = 'Cosmic Gaming_ '
    }
    if (s == 14) {
        document.title = 'Cosmic Gaming_ '
    }
    if (s == 15) {
        document.title = 'Cosmic Gaming_ '
    }
    if (s == 16) {
        document.title = '_ '
    }
    if (s == 17) {
        document.title = '_ '
    }
    if (C < (17 * reps)) {
        sT = setTimeout("A()", speed);
        C++
    } else {
        C = 0;
        s = 0;
        mC++;
        if (mC > p - 1) mC = 0;
        sT = null;
        doTheThing()
    }
}
doTheThing();
