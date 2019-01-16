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
    //send email
    $('.send_email_1').on('click', sendEmail);
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

