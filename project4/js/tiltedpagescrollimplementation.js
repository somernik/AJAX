/*
    AJAX Project 4
    Sarah Omernik
    Tilted Page Scroll Implementation
*/
$(document).ready(function() {
    $(".main").tiltedpage_scroll({
        sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
        angle: 50,                         // You can define the angle of the tilted section here.
        opacity: true,                     // You can toggle the opacity effect with this option.
        scale: true,                       // You can toggle the scaling effect here as well.
        outAnimation: true                 // In case you do not want the out animation, you can toggle this to false.
    });
});

