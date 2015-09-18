$(document).ready(function(){
    $('.slider').slider({
        full_width: true,
        height:500
    });

    $('ul.tabs').tabs();

    $(".button-collapse").sideNav();

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
        hover: true,
        gutter: 2,
        belowOrigin: true,
        alignment: 'left'
    });
});
////////// Active Script For HeadBar/////////
$('ul#HeadBar').children().click(function(){
    $(this).addClass('active');
    $(this).parents('#HeadBar').children().not(this).removeClass('active');
});