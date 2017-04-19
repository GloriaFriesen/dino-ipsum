$(document).ready(function() {
  $('#dinoButton').click(function() {
    $.get('http://dinoipsum.herokuapp.com/api/?format=json', function(response) {
      $('#dinoIpsum').text("Here's your Dino Ipsum:" + response);
    });
  });
});
