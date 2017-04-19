var Dino = require('./../js/dino.js').dinoIpsum;

var displayDinoIpsum = function(response) {
  $('#dinoIpsum').text(response);
};

$(document).ready(function() {
  var dinoObject = new Dino();
  $('#dinoForm').submit(function() {
    event.preventDefault();
    var paragraphs = $('#paragraphs').val();
    var words = $('#words').val();
    dinoObject.getDinoIpsum(paragraphs, words, displayDinoIpsum);
  });
});
