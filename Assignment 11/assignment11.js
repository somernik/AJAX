/*
    AJAX Assignment 11
    Sarah Omernik

    in the .ready method, do the following:
        add tooltips to each of the input fields (email, password, birthdate) that indicate what the user should do - for example: enter your email
        change the birthdate textbox to a datepicker
        within the birthdate datepicker, allow the user to select the month and the year via a drop down list
*/

$(document).ready(function() {

    $("#inputEmail").tooltip({
        items: "#inputEmail",
        content: "Enter your email"
    });

    $("#inputPassword").tooltip({
        items: "#inputPassword",
        content: "Enter your password"
    });

    $("#inputBirthdate").tooltip({
        items: "#inputBirthdate",
        content: "Select your birthdate"
    });

    $("#inputBirthdate").datepicker({changeMonth:true, changeYear:true});
});