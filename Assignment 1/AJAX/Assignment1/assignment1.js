// AJAX assignment 1
// 8/31/2017
// Sarah Omernik

function verifyTextEntry() {
    var message = document.getElementById("message");

    if (document.getElementById("username").value) {

        message.innerHTML = username.value;

    } else {
        message.innerHTML = "Username is a required field";
    }

}