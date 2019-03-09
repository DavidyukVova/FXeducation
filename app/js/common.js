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
    var form_main = $(".form_container");

    $(document).mouseup(function (e) {

        if(!form_main.is(e.target) && form_main.has(e.target).length === 0 ) {
            form_main.removeClass('active_modal');
            $('.btn_modal_form').click(function () {

                form_main.toggleClass('active_modal');
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
    //send email
    $('.send_email_1').on('click', sendEmail);

    //form modal
    var form = $(".modal_wrap");
    var form2 = $(".modal_wrap_2");
    var form299 = $(".modal_wrap_299");
    var form999 = $(".modal_wrap_999");
    var form3 = $(".modal_wrap_3");

    $(document).mouseup(function (e) {

        if(!form.is(e.target) && form.has(e.target).length === 0 ) {
            form.removeClass('active_modal');
            document.getElementById('modal_btn').onclick = function() {
                form.toggleClass('active_modal');
            };
            $('.close').click(function () {

                form.removeClass('active_modal');
            });
        }
    });
    $(document).mouseup(function (e) {

        if(!form2.is(e.target) && form2.has(e.target).length === 0 ) {
            form2.removeClass('active_modal_next');
            document.getElementById('modal_btn_free').onclick = function() {
                form2.toggleClass('active_modal_next');
            };
            $('.close_modal').click(function () {

                form2.removeClass('active_modal_next');
            });
            document.getElementById('modal_btn_299').onclick = function() {
                form299.toggleClass('active_modal_next');
            };
        }
    });

    // 299
    $(document).mouseup(function (e) {

        if(!form299.is(e.target) && form299.has(e.target).length === 0 ) {
            form299.removeClass('active_modal_next');
            document.getElementById('modal_btn_299').onclick = function() {
                form299.toggleClass('active_modal_next');
            };
            $('.close_modal').click(function () {

                form299.removeClass('active_modal_next');
            });
        }
    });
    // 999
    $(document).mouseup(function (e) {

        if(!form999.is(e.target) && form999.has(e.target).length === 0 ) {
            form999.removeClass('active_modal_next');
            document.getElementById('modal_btn_999').onclick = function() {
                form999.toggleClass('active_modal_next');
            };
            $('.close_modal').click(function () {

                form999.removeClass('active_modal_next');
            });
        }
    });
    $(document).mouseup(function (e) {

        if(!form3.is(e.target) && form3.has(e.target).length === 0 ) {
            form3.removeClass('active_modal_s8');
            document.getElementById('modal_btn_3').onclick = function() {
                form3.toggleClass('active_modal_s8');
            };
            $('.close').click(function () {

                form3.removeClass('active_modal_s8');
            });
        }
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
function sendEmail() {
    var name1 = $('#name1').val(),
        email1 = $('#email1').val(),
        address1 = $('#addres1').val(),
        phone1 = $('#phone1').val(),
        country1 = $('#country1').val();
    if (name1!='' && email1!='' && address1!='' && phone1!='' && country1!='') {
        $.post (
            "core/mail.php",
            {
                "name1" : name1,
                "email1" : email1,
                "address1" : address1,
                "phone1" : phone1,
                "country1" : country1
            },
            function (data) {
                if (data==1) {
                    alert('Email sent!');
                    name1.value.innerHTML = '';
                    email1.value.innerHTML = '';
                    address1.value.innerHTML = '';
                    phone1.value.innerHTML = '';

                }
                else {
                    alert('Repeat actions');
                }
            }
        );
        return false;
    }
    else {
        alert('Field in all the fields!');
    }
    document.getElementById('name1').value = "";
    document.getElementById('email1').value = "";
    document.getElementById('address1').value = "";
    document.getElementById('phone1').value = "";
}

$("a.bottomLink").click(function() {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 900,
        easing: "swing"
    });
    return false;
});