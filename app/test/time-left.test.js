const timeLeft = require('./../js/time-left');
var dateFns = require('./../node_modules/date-fns/get_seconds')
console.log(global.dateFns);
var getSeconds = require('date-fns/get_seconds')

describe('dates with 5 seconds between', () => {
  test('to return 0 years', () => {
    expect(timeLeft.pretty(1504206550, 1504206555)).toEqual({seconds: 5})
  });
});

// test('two dates with 3 years between to return 3 years', () => {
//   expect(timeLeft.pretty(1504206136, 1561075200))
// });
