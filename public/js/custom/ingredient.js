class Ingredient {

    constructor() {

        this.token = sessionStorage.getItem("token");
        this.proxyUrl = "https://cors-anywhere.herokuapp.com/";
    }

    getIngredient = async () => {
        await fetch(this.proxyUrl + "http://bigibun.invimobile.com/api/cms/ingredient", {
            method: 'GET',
            credentials: 'include',
            withCredentials: true,
            //dataType: 'jsonp',
            //mode: "no-cors",
            headers: {
                "Accept": "*/*",
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.token
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson);
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
            });


    }

    editIngredient = async (id) => {
        const ingredient = JSON.stringify({name: "mayonezzz", status: 1});

        await fetch(this.proxyUrl + "http://bigibun.invimobile.com/api/cms/ingredient/"+ id, {
            method: 'PUT',
            body: ingredient,
            credentials: 'include',
            withCredentials: true,
            dataType: 'jsonp',
            //mode: "no-cors",
            headers: {
                "Accept": "*/*",
                'Content-Type': 'application/json',
                Authorization: "Bearer " + this.token
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson);
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
            });


    }


}