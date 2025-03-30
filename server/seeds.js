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
    ProductName: 'Gaming Laptop',
    Description: 'High-performance laptop designed for gaming and productivity.',
    Category: 'type3',
    Image: 'https://example.com/images/laptop.jpg',
    Quantity: 20
  },
  {
    ProductName: 'Wireless Headphones',
    Description: 'Noise-canceling over-ear headphones with Bluetooth connectivity.',
    Category: 'type1',
    Image: 'https://example.com/images/headphones.jpg',
    Quantity: 50
  },
  {
    ProductName: 'Smartphone X12',
    Description: 'Latest flagship smartphone with high-end specs and camera.',
    Category: 'type2',
    Image: 'https://example.com/images/smartphone.jpg',
    Quantity: 30
  },
  {
    ProductName: 'Mechanical Keyboard',
    Description: 'RGB mechanical keyboard with customizable switches.',
    Category: 'type4',
    Image: 'https://example.com/images/keyboard.jpg',
    Quantity: 40
  },
  {
    ProductName: '4K Smart TV',
    Description: '55-inch 4K UHD Smart TV with HDR and streaming apps.',
    Category: 'type1',
    Image: 'https://example.com/images/tv.jpg',
    Quantity: 25
  },
    {
      ProductName: 'Smartwatch Z20',
      Description: 'Advanced smartwatch with fitness tracking and GPS.',
      Category: 'type1',
      Image: 'https://example.com/images/smartwatch.jpg',
      Quantity: 35
    },
    {
      ProductName: 'Gaming Mouse',
      Description: 'High-performance gaming mouse with customizable DPI.',
      Category: 'type3',
      Image: 'https://example.com/images/gaming-mouse.jpg',
      Quantity: 60
    },
    {
      ProductName: 'Laptop Cooling Pad',
      Description: 'Adjustable cooling pad with dual fans for gaming laptops.',
      Category: 'type2',
      Image: 'https://example.com/images/cooling-pad.jpg',
      Quantity: 25
    },
    {
      ProductName: 'Wireless Earbuds Pro',
      Description: 'Noise-canceling earbuds with immersive sound quality.',
      Category: 'type4',
      Image: 'https://example.com/images/earbuds-pro.jpg',
      Quantity: 40
    },
    {
      ProductName: 'Smart Light Strip',
      Description: 'App-controlled LED light strip with customizable colors.',
      Category: 'type1',
      Image: 'https://example.com/images/light-strip.jpg',
      Quantity: 50
    },
    {
      ProductName: 'Mechanical Gaming Chair',
      Description: 'Ergonomic gaming chair with adjustable armrests and recliner.',
      Category: 'type3',
      Image: 'https://example.com/images/gaming-chair.jpg',
      Quantity: 15
    },
    {
      ProductName: 'Fitness Smart Scale',
      Description: 'Body composition scale with app connectivity.',
      Category: 'type2',
      Image: 'https://example.com/images/smart-scale.jpg',
      Quantity: 30
    },
    {
      ProductName: 'Dash Cam X200',
      Description: 'Wide-angle dash camera with night vision and GPS tracking.',
      Category: 'type4',
      Image: 'https://example.com/images/dash-cam-x200.jpg',
      Quantity: 20
    },
    {
      ProductName: 'Wireless Soundbar',
      Description: 'Dolby Atmos soundbar with wireless subwoofer.',
      Category: 'type1',
      Image: 'https://example.com/images/soundbar.jpg',
      Quantity: 18
    },
    {
      ProductName: 'Smart Doorbell',
      Description: 'Video doorbell with AI motion detection and night vision.',
      Category: 'type2',
      Image: 'https://example.com/images/smart-doorbell.jpg',
      Quantity: 22
    },
    {
      ProductName: 'Smart Air Purifier',
      Description: 'Advanced air purifier with HEPA filter and smart home integration.',
      Category: 'type3',
      Image: 'https://example.com/images/smart-air-purifier.jpg',
      Quantity: 30
    },
    {
      ProductName: 'Portable Solar Charger',
      Description: 'High-efficiency solar charger for phones and tablets.',
      Category: 'type1',
      Image: 'https://example.com/images/solar-charger.jpg',
      Quantity: 50
    },
    {
      ProductName: 'Robot Vacuum Cleaner',
      Description: 'AI-powered vacuum cleaner with app control and scheduling.',
      Category: 'type4',
      Image: 'https://example.com/images/robot-vacuum.jpg',
      Quantity: 20
    },
    {
      ProductName: 'Smart Sleep Tracker',
      Description: 'Wearable device that monitors sleep patterns and provides insights.',
      Category: 'type2',
      Image: 'https://example.com/images/sleep-tracker.jpg',
      Quantity: 40
    },
    {
      ProductName: 'Electric Kettle',
      Description: 'Stainless steel electric kettle with temperature control.',
      Category: 'type1',
      Image: 'https://example.com/images/electric-kettle.jpg',
      Quantity: 35
    },
    {
      ProductName: 'Portable Mini Projector',
      Description: 'Compact projector with HDMI and wireless connectivity.',
      Category: 'type3',
      Image: 'https://example.com/images/mini-projector.jpg',
      Quantity: 25
    },
    {
      ProductName: 'Smart Pet Feeder',
      Description: 'Automatic pet feeder with app control and feeding schedule.',
      Category: 'type4',
      Image: 'https://example.com/images/smart-pet-feeder.jpg',
      Quantity: 15
    },
    {
      ProductName: 'Noise Cancelling Headphones',
      Description: 'Over-ear headphones with active noise cancellation and Bluetooth.',
      Category: 'type2',
      Image: 'https://example.com/images/noise-cancelling-headphones.jpg',
      Quantity: 60
    },
    {
      ProductName: 'Smart Water Bottle',
      Description: 'Tracks hydration levels and reminds you to drink water.',
      Category: 'type3',
      Image: 'https://example.com/images/smart-water-bottle.jpg',
      Quantity: 50
    },
    {
      ProductName: 'Wireless Video Doorbell',
      Description: 'Video doorbell with motion detection and night vision.',
      Category: 'type1',
      Image: 'https://example.com/images/video-doorbell.jpg',
      Quantity: 22
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
