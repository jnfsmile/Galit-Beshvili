// ```
// mongoose.conf.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// mongoose.conf.js may be freely distributed under the MIT license
// ```

// *mongoose.conf.js*

// Load Mongoose for MongoDB interactions
import * as mongoose from 'mongoose';

import { IServerEvent, ServerEvent } from '../src/server/handlers/event.handler';
import { IServerError, ServerError } from '../src/server/handlers/error.handler';

export default function mongooseConf(ServerEventEmitter: ServerEvent.EventEmitter,
                                     ServerErrorEmitter: ServerError.ErrorEmitter) {

  let gracefulExit = function() {

    mongoose.connection.close(() => {

      let event: IServerEvent = {
        type: ServerEvent.MongoGracefulExit,
        from: process.pid
      };

      ServerEventEmitter.emit(event.type, event, () => {
        console.log(`(Process ${event.from}): Mongoose connection has disconnected through app termination`);
        process.exit(0);
      });
    });
  };

  mongoose.connection.on("connected", (ref) => {

    let event: IServerEvent = {
      type: ServerEvent.MongoConnection,
      from: process.pid
    };

    ServerEventEmitter.emit(event.type, event, () => {
      console.log(`Process ${event.from} successfully connected to ${process.env.NODE_ENV} database on startup`);
    });
  });

  // If the connection throws an error
  mongoose.connection.on("error", (err) => {

    let error: IServerError = {
      type: ServerError.MongoConnectionFailure,
      from: process.pid
    };

    ServerErrorEmitter.emit(error.type, error, () => {
      console.error(`(Process ${error.from}): Failed to connect to ${process.env.NODE_ENV} database on startup!`);
      // Don't send `process.exit(1)` in this case since `Mongoose` will handle it
      if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
        console.error('Error: ', err);
    });
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', () => {

    let event: IServerEvent = {
      type: ServerEvent.MongoDisconnect,
      from: process.pid
    };

    ServerEventEmitter.emit(event.type, event, () => {
      console.log(`(Process ${event.from}): Mongoose default connection to ${process.env.NODE_ENV} database disconnected`);
    });
  });

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

  // Connect to our MongoDB database using the MongoDB
  // connection URI from our predefined environment variable
  mongoose.connect(process.env.MONGO_URI, (error) => {

    if (error)
      throw error;
  });
};
