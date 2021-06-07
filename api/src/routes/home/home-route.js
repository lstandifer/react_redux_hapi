// routes/home/home.js
'use strict';

module.exports = [
  {
    path: '/home/test1',
    method: 'GET',
    handler: function (request, h) {
      return 'hello';
    },
  },
  {
    path: '/home/test2',
    method: 'GET',
    handler: function (request, h) {
      return 'hello2';
    },
  },
];
