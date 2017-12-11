/*
 AJAX Project 4
 Sarah Omernik

 JQuery Clockpicker Plugin
 link: http://weareoutman.github.io/clockpicker/jquery.html

 */

$(document).ready(function() {

    $('.clockpicker#first').clockpicker({
        placement: 'right',
        autoclose: true,
        align: 'left',
        default: '18:00'
    });

     $('.clockpicker#second').clockpicker({
        placement: 'top',
        align: 'right',
        donetext: 'Done Selecting'
    });

});