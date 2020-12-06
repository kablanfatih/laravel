class Login {

    constructor(){
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        this.url = proxyUrl + "http://bigibun.invimobile.com/api/cms/auth/login";
    }

    async getUser(email, password){
        const user = JSON.stringify({email: email, password: password});
        const responseUser = await fetch(this.url,{
            method: 'POST',
            body: user,
            headers: {
                'Content-Type': 'application/json',
            },

        });
        return await responseUser.json();
    }
}