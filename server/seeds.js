// seeds.js
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/e-commerce')
  .then(() => {
    console.log('CONNECTED TO MONGO');
  })
  .catch(err => {
    console.log('ERROR:', err);
  });

const seedProducts = [
  {
    ProductName: 'Wireless Headphones',
    Description: 'Noise-canceling over-ear headphones with Bluetooth connectivity.',
    Category: 'type1',
    Image: 'https://example.com/images/headphones.jpg',
    Quantity: 50,
    InStock: true
  },
  {
    ProductName: 'Smart Watch',
    Description: 'Fitness tracker with heart rate monitor and GPS.',
    Category: 'type2',
    Image: 'https://example.com/images/smartwatch.jpg',
    Quantity: 30,
    InStock: true
  },
  {
    ProductName: 'Gaming Laptop',
    Description: 'High-performance laptop designed for gaming and productivity.',
    Category: 'type3',
    Image: 'https://example.com/images/laptop.jpg',
    Quantity: 20,
    InStock: true
  },
  {
    ProductName: 'Bluetooth Speaker',
    Description: 'Portable speaker with 360-degree sound and waterproof design.',
    Category: 'type4',
    Image: 'https://example.com/images/speaker.jpg',
    Quantity: 40,
    InStock: true
  }
];

async function addSeed() {
  try {
    await Product.deleteMany({}); // Optional: Clear existing data
    await Product.insertMany(seedProducts);
    console.log('Seed data added successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.log('Error seeding data:', err);
  }
}

addSeed();
