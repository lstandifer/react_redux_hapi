// routes/home/home.js
'use strict';

module.exports = [
  {
    path: '/',
    method: 'GET',
    handler: function (request, h) {
      return 'Api server is currently running...';
    },
  },
];
