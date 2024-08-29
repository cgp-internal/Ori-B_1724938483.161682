const fs = require('fs');
const readline = require('readline');
const Papa = require('papaparse');

const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const csvData = [];
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        Papa.parse(data, {
          header: true,
          complete: (results) => {
            csvData.push(...results.data);
            resolve(csvData);
          },
        });
      }
    });
  });
};

const writeCSV = (filePath, data) => {
  const csv = Papa.unparse(data);
  fs.writeFile(filePath, csv, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

module.exports = { readCSV, writeCSV };