// Import dependencies
import http from 'http';
import colors from 'colors';
import dbg from 'debug';
// Import application
import app from './app';
import config from './config';

let debug = dbg('deepa:server');

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || config.PROJECT_PORT);
app.set('port', port);

/**
 * Create HTTP server.
 * 
 */

/* eslint-disable no-console */
var server = http.createServer(app);
console.log('Created server'); 

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val: number | string | boolean): number | string | boolean {
  var port = parseInt(val, 10);
  if (isNaN(port))
    return val;
  if (port >= 0)
    return port;
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error: Object) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
  default:
    throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  var addr = server.address();
  var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


/**
 * Handle exception in promises and so on
 */
process.on('unhandledRejection', (reason: Error, p: Promise) => {
  console.log('Unhandled Rejection at: Promise '.red.bold);
  console.log(p);
  console.log('\n');
  console.log(' reason: ', reason);
  console.log('End of unhandled Rejection at: Promise '.red.bold);
});

console.log('Port: ', port);
console.log(colors.random('--------APP IS READY--------'));

/* eslint-enable */
