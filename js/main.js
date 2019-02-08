
$(document).ready(function () {

        var height_device = $(window).height();
        var width_device = $(window).width();
        var s_top = $(window).scrollTop(); // текущий отступ от верха
        var section1 = $("#section1").offset().top;
        var section2 = $("#section2").offset().top;
        var section3 = $("#section3").offset().top;
        var section4 = $("#section4").offset().top;
        var height_work = section3 - section2;
        var height_foot = section3 - section4;

$(".work .section" ).css("height", height_work);
$(".work" ).css("height", height_work);

$(window).scroll(function (e) {
    s_top = $(window).scrollTop();
    $(".section_wrap .section").removeClass('focus');

    if (s_top >= section1 && s_top <= section2)
    $(".main .section ").addClass('focus');

    if (s_top >= section1 && s_top <= section2)
    $(".header .header_nav ul li .lang").css('color','#fff');

    if (s_top >= section1 && s_top <= section2)
    $(".header .header_nav .nav_item a").css('color','#fff');

    if (s_top >= section1 && s_top <= section2)
    $(".header .logo .company_name ").css('color','#fff');

    if (s_top >= section1 && s_top <= section2)
    $(".header .header_nav ul li .lang").css('color','#fff');

    if(s_top >= (section2 + (height_work-section2)) && s_top <= section4)
    $(".work .section" ).addClass('focus');

    if (s_top >= section2 && s_top <= section3)
    $(".header .header_nav .nav_item a").css('color','#111');
        $(".header").addClass('bg_head');
    if (s_top >= section2 && s_top <= section3)
    $(".header .logo .company_name ").css('color','#111');

    if (s_top >= section2 && s_top <= section3)
    $(".header .header_nav ul li .lang").css('color','#111');

    if (s_top >= section2 && s_top <= section3)
    $('[data-name="work"]').addClass('active');
    else $('[data-name="work"]').removeClass('active');

    if (s_top >= section3 && s_top <= section4)
    $(".header .header_nav ul li .lang").css('color','#fff');

    if (s_top >= section3 && s_top <= section4)
    $(".header .header_nav .nav_item a").css('color','#fff');

    if (s_top >= section3 && s_top <= section4)
    $(".header .logo .company_name ").css('color','#fff');

    if (s_top >= section3 && s_top <= section4)
    $(".header .header_nav ul li .lang").css('color','#fff');

    if (s_top >= section3 && s_top <= section4)
    $('[data-name="about"]').addClass('active');
    else $('[data-name="about"]').removeClass('active');


//  <========= Fixed script About section ==========>
// if (s_top >= section3 && s_top <= section4){
// $(".about .section").addClass('focus');
//     }

});

});

function func(){
    $("#language").toggleClass('lang_show');
    $('#caret').toggleClass('rot');
};

$( ".control_form" ).focus(function() {
    $(this).parent().addClass('right');
});

$( ".control_form" ).focusout(function() {
    $(this).parent().removeClass('right');
});

$(".order_btn").on("click",function(){
    $(".order_form").toggleClass('active_form');
    $(".content").toggleClass('active_form_section');
    $(".content .header").toggleClass('active_header');
});

$(".order_form .form_block .form_group .button").on("click",function(){
    $(this).html("<span>Loading...</span>");
});


$(".content .about .content-block .services .services__item a").on("click",function(){
    var id = $(this).data("id");
$('[data-show='+id+']').addClass('active').siblings().removeClass('active');
$('[data-item='+id+']').toggleClass('active').siblings().removeClass('active');

});

$(".content .about .screen1 .about_card .next_button").on("click",function(){
    $(".content .about .screen1").addClass('hide');
    $(".content .about .screen2").addClass('show');
});


$(".content .about .screen2 .about_card .next_button").on("click",function(){
    $(".content .about .screen2").removeClass('show');
    $(".content .about .screen1").removeClass('hide');
});
