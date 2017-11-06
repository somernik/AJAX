/*
    AJAX Assignment 9
    Sarah Omernik

    In the .ready method, do the following:
    Create an html button with the following details: value='click me', type='button', 
        and a click event handler that logs 'cubs stink' to the console
    Add a mouseover and mouseout event to the li tags in the toDoList. 
        The mouseover event should change the background color to yellow and the
        mouseout event should change the background color to white.
    Add a new list item to the toDoList. why does the new list item not have 
        the same mouseover and mouseout events attached?

        - The new li does not have the events attached because the events were
        attached before this item was made and therefore not attached to the
        new li item.

    Comment out the mouseout and mouseover events from above. 
    Instead of using the mouseover and mouseout events, change the code 
        to function the same way using the .on() event
    Verify that the mouseover and mouseout events work for the original 
        list items and the dynamically created list item
    Add a new button with the following details: value='remove mouse events', 
        and a click event handler that removes the mouseover and mouseout events 
        from all the list items (use the .off() event)
*/
function addYellow() {
    $(this).css("backgroundColor", "yellow");
}

function addWhite() {
    $(this).css("backgroundColor", "white");
}

(function($) {

	$(document).ready(function() {

		var button = $("<input>");
        button.attr("value", "click me");
        button.attr("type","button");

        button.click(function() {
            console.log("cubs stink");
        });

        $("#toDoList").after(button);

        /*
        $("#toDoList li").mouseover(function() {
            $(this).css("backgroundColor", "yellow");
        }).mouseout(function() {
            $(this).css("backgroundColor", "white");
        });
        */
        
        $("body").on("mouseover", "#toDoList li", addYellow);
        $("body").on("mouseout", "#toDoList li", addWhite);

        var newLi = $("<li>");
        newLi.text("vacuum living room");

        newLi.insertAfter($("#toDoList li:last-child"));
        /* The new li does not have the events attached because the events were
        attached before this item was made and therefore not attached to the
        new li item. */

        var buttonTwo = $("<input>");
        buttonTwo.attr("value", "remove mouse events");
        buttonTwo.attr("type","button");

        buttonTwo.click(function() {
            $("body").off("mouseover", "#toDoList li", addYellow);
            $("body").off("mouseout", "#toDoList li", addWhite);
        });

        button.after(buttonTwo);
		
	})
	
})(jQuery)





















