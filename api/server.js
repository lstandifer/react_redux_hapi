'use strict';

const Path = require('path');
const Hapi = require('@hapi/hapi');

global.PORT = process.env.PORT || 5000;

const server = Hapi.Server({
  port: PORT,
  host: 'localhost',
});

const init = async () => {
  await server.register({
    plugin: require('hapi-router'),
    options: {
      // routes_dir: Path.join(__dirname, 'src/routes/**/!(_)*.js'),
      routes: 'src/routes/*/*route.js',
    },
  });

  await server.start();
  console.log(`Server is running at: ${server.info.uri}`);
};

// handle error on application startup
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
