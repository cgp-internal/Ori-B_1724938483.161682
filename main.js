const { readCSV, writeCSV } = require('./utils/csvHandler');

const carsCSVFile = 'data/cars.csv';

const populateData = async () => {
  try {
    // Simulated data population
    const carsData = [
      { make: 'Toyota', model: 'Camry', year: 2015, mileage: 30000, price: 15000 },
      { make: 'Honda', model: 'Civic', year: 2018, mileage: 20000, price: 12000 },
      { make: 'Ford', model: 'Focus', year: 2012, mileage: 40000, price: 10000 },
    ];

    await writeCSV(carsCSVFile, carsData);
    console.log('Cars data populated successfully!');
  } catch (err) {
    console.error('Error populating cars data:', err);
  }
};

const main = async () => {
  try {
    await populateData();

    const carsData = await readCSV(carsCSVFile);
    console.log('Cars data:', carsData);
  } catch (err) {
    console.error('Error reading cars data:', err);
  }
};

main();