// Code is taken from https://www.w3schools.com/howto/howto_js_toggle_password.asp, with some modifications to fit the project.
function togglePassword() {
let x = document.getElementById("pswInput");
if (x.type === "password") {
x.type = "text";
} else {
x.type = "password";
}
}
