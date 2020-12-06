const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const clearUserButton = document.getElementById("clear-user");
const login = new Login();
const ui = new UI();
const ingredient = new Ingredient();

eventListeners();

function eventListeners() {
    loginButton.addEventListener("click", getUser);
    clearUserButton.addEventListener("click", clearUser);
}

function getUser() {
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (email === "") {
        alert("Email is invalid");
    } else if (password === "") {
        alert("Pass is invalid.");
    } else {
        login.getUser(email, password)
            .then(response => {
                console.log(response);
                ui.showUserInfo(response.data);
                clearUserButton.style.display = "block";
                ui.clearInput();
                sessionStorage.setItem("token", JSON.stringify(response.meta.token));
                ingredient.getIngredient().then(r => console.log(" r:  " + r));

            })
            .catch(err => ui.showError(err));
    }
}

function clearUser() {
    if (confirm("Are You Sure ?")) {
        ui.clearUserFromUI();
        clearUserButton.style.display = "none";
    }
}