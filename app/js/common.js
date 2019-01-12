$(document).ready(function(){
    //main menu
    var container = $(".menu_block");

    $(document).mouseup(function (e) {

        if(!container.is(e.target) && container.has(e.target).length === 0 ) {
            container.removeClass('active_menu');
            $('.burger_block' || '.burger_btn').click(function () {

                container.toggleClass('active_menu');
            });
        }

    });
    //slider modal
    var form = $(".form_container");

    $(document).mouseup(function (e) {

        if(!form.is(e.target) && form.has(e.target).length === 0 ) {
            form.removeClass('active_modal');
            $('.btn_modal_form').click(function () {

                form.toggleClass('active_modal');
            });
        }
    });
    //hover for section_3
    $('.item1').hover(function () {
        $('.top_content1').css("background-color", "#4cbd74");
    }, function () {
        $('.top_content1').css("background-color", "#364c4d");
    });
    $('.item2').hover(function () {
        $('.top_content2').css("background-color", "#4cbd74");
    }, function () {
        $('.top_content2').css("background-color", "#364c4d");
    });
    $('.item3').hover(function () {
        $('.top_content3').css("background-color", "#4cbd74");
    }, function () {
        $('.top_content3').css("background-color", "#364c4d");
    });
    //bx slider
    $('.slider').bxSlider();
});
'use strict';

var btns = Array.from(document.querySelectorAll('.btn_control'));
var prgs = Array.from(document.querySelectorAll('.section_5 .widget_block'));

btns.map(function (btn) {
    btn.addEventListener('click', function () {
        // $('.widget_block').remove('active');
        var _this = this;

        prgs.map(function (prg) {
            _this.dataset.id == prg.dataset.id ? prg.style.display = 'block' : prg.style.display = "none";
        });
    });
});

