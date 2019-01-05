$(document).ready(function(){
    //main menu
    var container = $(".menu_block");

    $(document).mouseup(function (e) {

        if(!container.is(e.currentTarget) && container.has(e.currentTarget).length === 0 ) {
            container.removeClass('active_menu');
            $('.burger_block' || '.burger_btn').click(function () {

                container.toggleClass('active_menu');
            });
        }
    });
    //slider modal
    $('.btn_modal_form').click(function () {
       alert('Working! Functional is empty.');
    });
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
