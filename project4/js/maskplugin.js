/*
    AJAX Project 4
    Sarah Omernik
    Input mask plugin example
*/
$(document).ready(function(){
    /*
        This plugin allows you to define any type of mask you want, assigning it to a specific selector.
    */
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.phone_us').mask('(000) 000-0000');
    $('.money').mask('000,000,000,000,000.00', {reverse: true});
    $('.ip_address').mask('000.000.000.000');
});