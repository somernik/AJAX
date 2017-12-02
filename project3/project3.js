/*

	AJAX Project 3
	Sarah Omernik
	
	Allow users to add new tasks.
	The user should enter a task description and click the add button.
	The add button should then callback to the server to insert a new task.
	Once the new task is added to the database, the server side code will output the new task as json.
	Upon receiving the response, the task should be added to the list of all tasks

	Allow users the ability to delete tasks.
	Each tasks in the list of all tasks should include a button that will remove
	the task from the database using server side code and remove the task from 
	the user interface using client side code.

	All of the taks on the page should be output when the page initially loads 
	(using client side code). The server side code has a method to retrieve all tasks as xml. 
	You should use ajax to retrieve the xml string of all tasks and output all of the tasks, using client side dhtml.

*/

$(document).ready(function(){

	$.ajax("ToDo/allTasks.php", {
		async: true,
		type: "GET",
		success: function(tasks) {

			$(tasks).find('task').each(function(){
				var id = $(this).find('id').text();
				var description = $(this).find('description').text();

				// Add each item to page
				addTaskToPage(id, description);
			});

		},
		error: function(error) {
			//notify user of error
			console.log('Error: ' + response.responseText);
		},
		responseType: "xml"
	})
 
    $("#add").click(function() {

        $.post("ToDo/addTask.php", {"description": $("#task").val()}, function(task) {

			var id = task.id;
			var description = task.description;

            // add item to page
			addTaskToPage(id, description);

		}, "json").fail(function(response) {
			console.log('Error: ' + response.responseText);
		});	
		
	})

});

/*
	This function adds a div with the task's description and a delete button to remove the task
*/
function addTaskToPage(taskId, description) {
	var div = $("<div>");
	div.attr("id", taskId);

	var listElement = $("<p>");
	
	var img = $("<input>");
	img.attr("type", "image");
	img.attr("src", "delete.png");

	img.click(function() {

		$.ajax("ToDo/deleteTask.php", {
			async: true,
			success: function(data) {
				// remove element
				$("#" + taskId).remove();

			},
			data: {'id': taskId},
			error: function(error) {
				//notify user of error
				console.log('Error: ' + response.responseText);
			}
		})

	});

	div.append(img); 
	listElement.html(description).appendTo(div);

	div.appendTo($("body"));

}