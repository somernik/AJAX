/*
    AJAX Assignment 5
    Sarah Omernik
*/
var students;

function outputStudents() {
    for (var i = 0; i < students.length; i++) {
        console.log("ID: " + students[i].id + "  EMAIL: " + students[i].email);
    }
}

var init = function() {

    students = [
        {
            "id": 1,
            "name": "Student 1",
            "email": "student1@gmail.com"
        },
        {   
            "id": 2,
            "name": "Student 2",
            "email": "student2@gmail.com"
        },
        {
            "id": 3,
            "name": "Student 3",
            "email": "student3@gmail.com"
        },
        {
            "id": 4,
            "name": "Student 4",
            "email": "student4@gmail.com"
        },
        {  
            "id": 5,
            "name": "Student 5",
            "email": "student5@gmail.com"
        }
    ]; // collection
    
    outputStudents();
}