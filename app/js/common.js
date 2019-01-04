$(document).ready(function(){
    //bx slider
    $('.slider').bxSlider();
});
'use strict';

var btns = Array.from(document.querySelectorAll('.btn_control'));
var prgs = Array.from(document.querySelectorAll('.widget_block'));

btns.map(function (btn) {
    btn.addEventListener('click', function () {
        // $('.widget_block').remove('active');
        var _this = this;

        prgs.map(function (prg) {
            _this.dataset.id == prg.dataset.id ? prg.style.display = 'block' : prg.style.display = "none";
        });
    });
});
