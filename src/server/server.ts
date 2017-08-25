// Return functions to start and stop the server
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

const PORT = process.env.port || 7000;
const client = path.resolve(__dirname, '../client');

export class Server {
  app: express.Application;
  server: http.Server;

  constructor() {
    this.app = express();
  }

  start(callback) {
    this.app.use(express.static(client));

    this.server = this.app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
      callback();
    });
  }

  stop(callback) {
    console.log(`server closed on port ${PORT}`);
    this.server.close(callback);
  }
}
