(function(){
  'use strict';

  var random = Math.floor((Math.random() * 10) + 1);
  var classToAdd = '';

  if (random === 1) {
    classToAdd = 'one';
  } else if (random === 2) {
    classToAdd = 'two';
  } else if (random === 3) {
    classToAdd = 'three';
  } else if (random === 4) {
    classToAdd = 'four';
  } else if (random === 5) {
    classToAdd = 'five';
  } else if (random === 6) {
    classToAdd = 'six';
  } else if (random === 7) {
    classToAdd = 'seven';
  } else if (random === 8) {
    classToAdd = 'eight';
  } else if (random === 9) {
    classToAdd = 'nine';
  } else if (random === 10) {
    classToAdd = 'ten';
  }

  $('body').addClass(classToAdd);

  console.log(classToAdd);
}());
