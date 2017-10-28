/*
AJAX Assignment 8
Sarah Omernik

in the .ready method, do the following:

select all of the list item elements and change the text to 
'cubs stink' using the .text() method

select the element that has an id of 'header' and output the 
html content of the element to the console using the .html() method

select all of the elements that have a className of 'link' and 
output the total number of selected items to the console

select all of the td elements inside of tr tags with a className 
of 'odd'. Add a class to the td tags named 'oddColumn'
*/
$(document).ready(function() {
    $("li").text("cubs stink");

    console.log($("#header").html());

    console.log($(".link").length);

    $("tr.odd").addClass("oddColumn");

});