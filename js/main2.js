$(document).ready(main);

var contador = 1;

function main() {
    $('.menu_bar').click(function() {

        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    });

};
    // Mostramos y ocultamos submenus
    $('.submenu').click(function() {
        $(this).children('.children').slideToggle();
    });
}

$(document).ready(function() {
    $('.ir-arriba').click(function() {
        $('body,html').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
});
