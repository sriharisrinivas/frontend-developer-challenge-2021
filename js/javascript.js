let contentContainerEl = document.getElementById("content-container");

function createAndAppend(result) {
    
    let personCardEl = document.createElement("div");
    personCardEl.classList.add("person-card-container");
    contentContainerEl.appendChild(personCardEl);

    let imageContainerEl = document.createElement("div");
    imageContainerEl.classList.add("image-container");
    personCardEl.appendChild(imageContainerEl);

    let personImageEl = document.createElement("img");
    personImageEl.src = result.picture.large;
    personImageEl.classList.add("image");
    imageContainerEl.appendChild(personImageEl);

    let verticalLineEl = document.createElement("h2");
    verticalLineEl.classList.add("vertical-line");
    personCardEl.appendChild(verticalLineEl);

    let personDetailsContainerEl = document.createElement("div");
    personDetailsContainerEl.classList.add("person-details-container");
    personCardEl.appendChild(personDetailsContainerEl);

    let personName = result.name.title + " " + result.name.first + " " + result.name.last;

    let nameEl = document.createElement("h1");
    nameEl.textContent = personName;
    nameEl.classList.add("details-style")
    personDetailsContainerEl.appendChild(nameEl);

    let personEmail = result.email;

    let emailEl = document.createElement("h1");
    emailEl.textContent = personEmail;
    emailEl.classList.add("details-style");
    personDetailsContainerEl.appendChild(emailEl);

    let address = result.location.street.number + ", " + result.location.street.name + ", " + 
    result.location.city + ", " + result.location.state + ", " + result.location.country + ", " +
    result.location.postcode;

    let personAddressEl = document.createElement("h1");
    personAddressEl.textContent = address;
    personAddressEl.classList.add("details-style", "pt-3");
    personDetailsContainerEl.appendChild(personAddressEl);
}


function displayResults(results) {
    for (let result of results) {
        //console.log(result)
        createAndAppend(result);
    }
}

let url = "https://randomuser.me/api/?results=10";
let options = {
    method: "GET"
};

fetch(url, options)
  .then(function(response) {
      return response.json();
  })
  .then(function(jsonData) {
      //console.log(jsonData)
      let { results } = jsonData
      //console.log(results)
      displayResults(results);
  })

