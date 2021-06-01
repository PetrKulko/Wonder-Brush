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
}).mask("(999) 999-9999");
$("#phone").mask("(999) 999-9999");

$("#date").click(function () {
    $(this).setCursorPosition(0);
}).mask("99/9999");
$("#date").mask("99/9999");

$("#cvv").click(function () {
    $(this).setCursorPosition(0);
}).mask("999");
$("#cvv").mask("999");