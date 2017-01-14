const Sequelize = require('sequelize');
const db = new Sequelize('databaseName', 'account', 'password');

// Define the models
const Message = db.define('Message', {
  text: Sequelize.STRING,
  // . . .
});

// Make any associations if necessary
// Messages.belongsTo(. . .);

// Export the models
exports.Message = Message;
