const ExcelJS = require('exceljs');

// Create a new workbook
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Sheet1');

// // Add data to the worksheet
// const data = [
//     ['Name', 'Age', 'Country'],
//     ['John', 30, 'USA'],
//     ['Alice', 25, 'Canada'],
//     ['Bob', 35, 'UK']
// ];
//
// worksheet.addRows(data);

// Add data to specific cells
cellA1 = worksheet.getCell('A1')
cellA1.value = 'Title';
cellA1.font = { bold: true };

// Save the workbook to a file
workbook.xlsx.writeFile('output.xlsx')
    .then(function() {
        console.log("Excel file has been written successfully.");
    })
    .catch(function(error) {
        console.log("Error occurred: ", error);
    });