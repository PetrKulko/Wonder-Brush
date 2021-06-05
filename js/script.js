$('input').on('input invalid', function () {
    this.setCustomValidity('')
    if (this.validity.valueMissing) {
        this.setCustomValidity("שדה חובה")
    }
    if (this.validity.typeMismatch) {
        this.setCustomValidity("שדה חובה")
    }
    if (this.validity.patternMismatch) {
        this.setCustomValidity("שדה חובה")
    }
});

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

$("#card").click(function () {
    $(this).setCursorPosition(0);
}).mask("9999-9999-9999-9999");
$("#card").mask("9999-9999-9999-9999");

$("#phone").click(function () {
    $(this).setCursorPosition(0);
}).mask("999-999-9999");
$("#phone").mask("999-999-99-99");

$("#date").click(function () {
    $(this).setCursorPosition(0);
}).mask("99/9999");
$("#date").mask("99/9999");

$("#cvv").click(function () {
    $(this).setCursorPosition(0);
}).mask("999");
$("#cvv").mask("999");




function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

const inputDate = document.getElementById('inputDate');
const req = document.querySelector('.cvvDate');
inputDate.addEventListener('click', showReq);
function showReq(e) {
    e.preventDefault();
    req.classList.add('active');
    inputDate.classList.add('active');
}