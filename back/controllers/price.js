// Import functions
import { Getdata, getdizozols } from './pricedata.js';

//Get all product prices
Getdata((err, results) => {
  if (err) {
    console.log('Error getting all prices:', err);
  } else {
    console.log('All prices:', results);
  }
});

// Get the price for a specific product (assuming 'id' identifier)
const productId = 123; // valid product ID
getdizozols(productId, (err, result) => {
  if (err) {
    console.log('Error getting product price:', err);
  } else {
    console.log('Product price:', result);
  }
});
