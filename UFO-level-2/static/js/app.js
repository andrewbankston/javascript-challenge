// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var input = d3.select("input")

var 

input.on("change", runAppend);

function runAppend() {
    // append the needed information from the input field to an array. then forEach through the array to build the string of .filter elements behind tableData
    d3.event.target.name = "active";
}

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var dateInput = d3.select("#datetime");
    var dateValue = dateInput.property("value");

    var cityInput = d3.select("#city");
    var cityValue = cityInput.property("value");

    var stateInput = d3.select("#state");
    var stateValue = stateInput.property("value");

    var countryInput = d3.select("#country");
    var countryValue = countryInput.property("value");

    var shapeInput = d3.select("#shape");
    var shapeValue = shapeInput.property("value");

    if (dateInput.name === "active") {
        console.log(dateInput.id)
        var filters = incident => incident.datetime === dateValue;
    }
    
    var filteredData = tableData.filter(filters);

    tbody.html("");

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}