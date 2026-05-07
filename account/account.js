// Code is taken from https://www.w3schools.com/howto/howto_js_toggle_password.asp, with some modifications to fit the project.
export function togglePassword() {
    const x = document.getElementById("pswInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

const checkbox = document.getElementById("show-password");
if (checkbox) {
    checkbox.addEventListener("change", togglePassword);
}

const loginForm = document.querySelector("#login-form");
const BASE_API_URL = 'https://v2.api.noroff.dev';
const AUTH_LOGIN_URL = `${BASE_API_URL}/auth/login`;

async function loginUser(url, data) {
    try {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, postData);
        const json = await response.json();
        const accessToken = json.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        return json;
    } catch (error) {
        console.error(error)
    }
}

async function fetchWithToken(url) {
    try {
        const token = localStorage.getItem('accessToken');
        const getData = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, getData);
        const json = await response.json();
    } catch (error) {
        console.error(error);
    }
}

const options = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": apiKey.data.key
    }
}
    
const response = await fetch(AUTH_LOGIN_URL, options)
const data = await response.json()


async function checkUserStatus() {
    const token = localStorage.getItem('accessToken');
    validatedUser(token);
    if (!!token) {
        alert("Please log in or register an account in order to add products to shopping cart.")
    }
}



function onLoginFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formFields = Object.fromEntries(formData);
    loginUser(AUTH_LOGIN_URL, formFields);
    window.location.replace('../index.html');
}

loginForm.addEventListener("submit", onLoginFormSubmit);