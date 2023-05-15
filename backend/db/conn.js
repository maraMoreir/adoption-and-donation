const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1/adote')
  console.log('Connected to database!');
};

main().catch((err) => {
  console.log('ERROR: ', err);
});

module.exports = mongoose;