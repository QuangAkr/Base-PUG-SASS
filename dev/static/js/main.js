$(document).ready(function () {

    $(document).on('click', '.menu .close', function () {
        if ($(this).parent().hasClass('actived')) {
            $(this).parent().removeClass('actived');
            $('header .header').removeClass('actived');
        }
        else {
            $(this).parent().addClass('actived');
            $('header .header').addClass('actived');
        }
    });
});