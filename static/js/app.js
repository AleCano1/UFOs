// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//build a table
//function buildTable(data) {
 //   tbody.html("");
  //}
//data is an object that refrences the data being imported
//for each is the keywordsto create a for loopin JS
//dataRow is a parameter that will be used as a value
//when the function is called
 // data.forEach((dataRow) => {
//});

//It tells JS to find the <tbody> tag within the HTML and add a tablerow("tr")
//let row = tbody.append("tr");

//with object.values, we're telling JS to reference one object
//from the arrayof UFO sightings.
//(dataRow) as argument, we're saying that we want the values to go into the DataRow
//forEach(val) we specify that we want one objectper row.
//Object.values(dataRow).forEach((val) => {
//});

//create a variable to appenddata to table
//let cell = row.append("td");

//add the values, we are exctracting only the textof the value
//this value holds only each value fromthe object
//cell.text(val);

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }