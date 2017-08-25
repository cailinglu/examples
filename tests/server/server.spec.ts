import axios from 'axios';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Server } from '../../src/server/server';

chai.use(chaiAsPromised);
const assert = chai.assert;

// TODO: this is duplicated from server.ts
const PORT = process.env.port || 7000;

describe('Express server', function () {
  let server;
  let instance;

  before(function () {
    instance = axios.create({
      baseURL: `http://localhost:${PORT}`
    });
  });

  beforeEach(function (done) {
    server = new Server();
    server.start(done);
  });

  afterEach(function (done) {
    server.stop(done);
  });

  it('serves the homepage', function () {
    // Start: starts up server and serves HTML page
    return instance
      .get('/')
      .then(function (data) {
        assert.isDefined(data, 'home page returns data');
      })
      .catch(function (error) {
        console.log('got error:', error);
        assert.fail();
      });
  });
});
