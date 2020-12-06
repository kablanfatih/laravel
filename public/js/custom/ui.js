class UI {
    constructor() {
        this.profileDiv = document.getElementById("profile");
        this.emailInput = document.getElementById("email");
        this.passwordInput = document.getElementById("password");
        this.cardBody = document.querySelector(".card-body");
    }

    clearInput() {
        this.emailInput.value = "";
        this.passwordInput.value = "";

    }

    showUserInfo(user) {
        this.profileDiv.innerHTML = `
        
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
             <img class="img-fluid mb-2" src="${user.restaurant.image}">
             <hr>
             <div id="fullName"><strong>${user.restaurant.name}</strong></div>
             <hr>
             <div id="bio">${user.restaurant.phone}</div>
            </div>
          <div class="col-md-8">
                <li class="list-group">
                    <li class="list-group-item borderzero">
                       <span id="company">${user.name + " " + user.surname}</span>
                     
                    </li>
                 
                    <li class="list-group-item borderzero">
                        <span id="mail">${user.email}</span>
                        
                    </li>
                      
                    <li class="list-group-item borderzero">
                        <img id="logo" class="img-fluid mb-2" src="${user.restaurant.logo}" alt="image">
                        
                    </li>
                
                </div>
                
          </div>
    </div>
        `;
    }

    clearUserFromUI() {
        while (this.profileDiv.firstElementChild !== null) {
            this.profileDiv.removeChild(this.profileDiv.firstElementChild);

        }
    }

    showError(message) {
        const div = document.createElement("div");

        div.className = "alert alert-danger";
        div.textContent = message;

        this.cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000);

    }
}