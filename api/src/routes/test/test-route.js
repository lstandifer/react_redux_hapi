// routes/home/home.js
'use strict';

module.exports = [
  {
    path: '/test/test1',
    method: 'GET',
    handler: function (request, reply) {
      return reply('hello');
    },
  },
  {
    path: '/test/test2',
    method: 'GET',
    handler: function (request, reply) {
      return reply('hello2');
    },
  },
];
