function Dino() {
}

Dino.prototype.getDinoIpsum = function(paragraphs, words, displayDinoIpsum) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=' + paragraphs + '&words=' + words).then(function(response){
    displayDinoIpsum(response);
  }).fail(function(error) {
    $('#dinoIpsum').text(error.responseJSON.message);
  });
};


exports.dinoIpsum = Dino;
