const expect = require('chai').expect;
const request = require('request');
const Models = require('./models');
// Start the server
const server = require('./server');

describe('API and Database', () => {
  before((done) = {
    // Create tables in the database if they don't exist
    Models.Message.sync()
    .then(() => {
      // If there are more tables, sync them
    })
    .then(() => {
      // Otherwise, you're done
      done();
    });
  });

  beforeEach((done) => {
    // Empty the tables in the database
    Models.Message.destroy({
      where: {}
    })
    .then(() => {
      // If there are more tables, empty them as well
    })
    .then(() => {
      done();
    });
  });

  it('Get all messages from the database', (done) => {
    // request
    request({
      method: 'GET',
      url: 'anEndpoint'
    }, (error, response, body) => {
      // expect something
      expect('something').to.equal('something');
      done();
    });
  });

  // More tests . . .
});
