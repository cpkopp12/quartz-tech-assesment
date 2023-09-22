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
const mainElsRow = document.createElement("div");
mainElsRow.setAttribute("class","row");
mainEls.appendChild(mainElsRow);
const formEl = document.querySelector("#search");
const searchInputEl = document.querySelector("#search-name");
const showAllBtnEl = document.querySelector("#show-all-data-btn");

//Loop through getData() object array and get index coresponding to a given name
//if no names match search return -1
var nameSearch = function(dataObject, searchedName) {

    for(let i = 0; i < dataObject.length; i++) {
        if (searchedName === dataObject[i].name) {
            return i;
        } 
    }

    return -1;
}

//function to load data card
var loadDataCard = function(cardIndex) {


    //create card element
    var cardEl = document.createElement("div");
    cardEl.setAttribute("class","card m-2");
    cardEl.setAttribute("style","width: 18rem")

    //name as card header
    var cardName = document.createElement("div");
    cardName.setAttribute("class","card-header");
    cardName.innerHTML = dataList[cardIndex].name;

    

    //rest of card data as unordered list
    var ulEl = document.createElement("ul");
    ulEl.setAttribute("class","list-group list-group-flush");
    
    var idEl = document.createElement("li");
    idEl.setAttribute("class","list-group-item");
    idEl.innerHTML = "Id: " + dataList[cardIndex].id;
    ulEl.appendChild(idEl);

    var cityEl = document.createElement("li");
    cityEl.setAttribute("class","list-group-item");
    cityEl.innerHTML = "City: " + dataList[cardIndex].city;
    ulEl.appendChild(cityEl);

    var stateEl = document.createElement("li");
    stateEl.setAttribute("class","list-group-item");
    stateEl.innerHTML = "State: " + dataList[cardIndex].state;
    ulEl.appendChild(stateEl);

    var animalEl = document.createElement("li");
    animalEl.setAttribute("class","list-group-item");
    animalEl.innerHTML = "Favorite Animal: " + dataList[cardIndex].favoriteAnimal;
    ulEl.appendChild(animalEl);

    var colorEl = document.createElement("li");
    colorEl.setAttribute("class","list-group-item");
    colorEl.innerHTML = "Favorite Color: " + dataList[cardIndex].favoriteColor;
    ulEl.appendChild(colorEl);

    
    //append name and rest of data to the card element
    cardEl.appendChild(cardName);
    cardEl.appendChild(ulEl);

    //append the card element to the bootstrap container
    mainElsRow.appendChild(cardEl);

}

//Load all data by looping through list given by getData()
var loadAllDataCards = function() {

    //Remove current data
    mainElsRow.replaceChildren();

    //loop through cards by index
    for (let i=0; i<dataList.length; i++) {
        loadDataCard(i);
    }

}

//search form sumbit handler function
var formSubmitHandler = function(event){
    event.preventDefault();
    
    //get name from input
    var name = searchInputEl.value;
    var nameIndex = nameSearch(dataList, name);

    if ( nameIndex != -1){
        //remove current data
        mainElsRow.replaceChildren();

        //show searched data
        loadDataCard(nameIndex);
    } else {
        // either alert user name not found or prompt to enter name
        if (name) {
            alert('Name not found.');
        } else {
            alert('Please enter a name to search.');
        }
    }

    //clear search bar
    searchInputEl.value = '';
};

//show all btn handler function
var showAllClickHandler = function(event) {
    event.preventDefault();

    //clear current data
    mainElsRow.replaceChildren();

    //load all data cards
    loadAllDataCards();
}

//initially load all data
loadAllDataCards();

//event listeners, form and show all btn
formEl.addEventListener("submit", formSubmitHandler);
showAllBtnEl.addEventListener("click", showAllClickHandler);
