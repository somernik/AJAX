/*
    AJAX Assignment 3
    Sarah Omernik
    9/17/2017
*/
var init = function() {
    var student1 = new Student();

    student1.setName("Student One");
    student1.setEmail("student1@matc.edu");

    alert("Name: " + student1.getName() + "; Email: " + student1.getEmail() + ";");

    var student2 = new Student();
    student2.register("sjobs@mac.com", "iPhone development");
}

// class definition
function Student() {
    var name;
    var email;

    //public accessor methods
	this.getName = function() {
        return name;
    }

    this.setName = function(value) {
        name = value;
    }

    this.getEmail = function() {
        return email;
    }

    this.setEmail = function(value) {
        email = value;
    }

    Student.prototype.register = function(email, courseName) {
        alert(email +" registered for the " + courseName + " course.");
    }
}
