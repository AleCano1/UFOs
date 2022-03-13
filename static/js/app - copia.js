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

//With d3.select("#datetime"), for example, 
//we're telling D3 to look for the #datetime id in the HTML tags.
//By chaining .property("value"); to the d3.select function, 
//we're telling D3 not only to look for where our date values are stored on the webpage, 
//but to actually grab that information and hold it in the "date" variable.
//function handleClick() {
 //   let date = d3.select("#datetime").property("value");

 //to set a default filter and save it to a new variable. 
 //let filteredData = tableData;

 // pseudocode practice
//if (a date is entered) {
 //   Filter the default data to show only the date entered
//};
 //if (date) {
 //   filteredData = filteredData.filter(row => row.datetime === date);
//};
//It's basically saying, "Show only the rows where the date is 
//equal to the date filter we created above." 

  //tied to the filter button we'll build on our webpage.
  //d3.selectAll("#filter-btn").on("click", handleClick);
  //Our selector string contains the id for another HTML tag. 
  //(We'll assign a unique id to a button element in the HTML called "filter-btn".)
  //adding .on("click", handleClick);, we're telling D3 to execute our handleClick() 
  //function when the button with an id of filter-btn is clicked.
  //buildTable(tableData);

  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);