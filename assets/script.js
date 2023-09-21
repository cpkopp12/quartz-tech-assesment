//GIVEN FUNCTION-------------------------------------------
function getData() {
    return [
        {
            "id": 1,
            "name": "Alice",
            "city": "Portland",
            "state": "Maine",
            "favoriteAnimal": "Starfish",
            "favoriteColor": "Blue"
        }, {
            "id": 2,
            "name": "Bob",
            "city": "Los Angeles",
            "state": "California",
            "favoriteAnimal": "Penguin",
            "favoriteColor": "Red"
        }, {
            "id": 3,
            "name": "Eddy",
            "city": "Greenville",
            "state": "South Carolina",
            "favoriteAnimal": "Dog",
            "favoriteColor": "Yellow"
        }, {
            "id": 4,
            "name": "Edwin",
            "city": "Stockton",
            "state": "California",
            "favoriteAnimal": "Gecko",
            "favoriteColor": "Green"
        }, {
            "id": 5,
            "name": "Allyson",
            "city": "San Diego",
            "state": "California",
            "favoriteAnimal": "Fox",
            "favoriteColor": "Orange"
        }
    ];
}

// REST OF JS CODE ----------------------------------
//data list
const dataList = getData();

// html elements
const mainEls = document.querySelector("#main-els");

//function to load data card
var loadDataCard = function() {

    console.log(dataList);
    //create card element
    var cardEl = document.createElement("div");
    cardEl.setAttribute("class","card");

    //name as card header
    var cardName = document.createElement("div");
    cardName.setAttribute("class","card-header");
    cardName.innerHTML = dataList[0].name;

    cardEl.appendChild(cardName);

    //rest of card data as unordered list
    var ulEl = document.createElement("ul");
    ulEl.setAttribute("class","list-group list-group-flush");
    
    var idEl = document.createElement("li");
    idEl.setAttribute("class","list-group-item");
    idEl.innerHTML = "Id: " + dataList[0].id;
    ulEl.appendChild(idEl);

    var cityEl = document.createElement("li");
    cityEl.setAttribute("class","list-group-item");
    cityEl.innerHTML = "City: " + dataList[0].city;
    ulEl.appendChild(cityEl);

    var stateEl = document.createElement("li");
    stateEl.setAttribute("class","list-group-item");
    stateEl.innerHTML = "State: " + dataList[0].state;
    ulEl.appendChild(stateEl);

    var animalEl = document.createElement("li");
    animalEl.setAttribute("class","list-group-item");
    animalEl.innerHTML = "Favorite Animal: " + dataList[0].favoriteAnimal;
    ulEl.appendChild(animalEl);

    var colorEl = document.createElement("li");
    colorEl.setAttribute("class","list-group-item");
    colorEl.innerHTML = "FavoriteColor: " + dataList[0].favoriteColor;
    ulEl.appendChild(colorEl);

    
    

    cardEl.appendChild(ulEl);





    mainEls.appendChild(cardEl);

}
loadDataCard();