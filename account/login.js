// Code is taken from https://www.w3schools.com/howto/howto_js_toggle_password.asp, with some modifications to fit the project.
function togglePassword() {
let x = document.getElementById("pswInput");
if (x.type === "password") {
x.type = "text";
} else {
x.type = "password";
}
}

/* Set logged-in status */
navigator.login.setStatus("logged-in");

/* Set logged-out status */
navigator.login.setStatus("logged-out");

//code is taken from https://mollify.noroff.dev/content/feu1/javascript-1/module-4/managing-web-forms?nav=course (Module 4, Managing web Forms with JavaScript) and modified to fit the project.

const form = document.getElementById("loginForm");