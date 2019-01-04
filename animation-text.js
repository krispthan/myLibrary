//text typewriter
var i = 0;
function typeWriter() {
  var text = "Whatever the text is ";
  var speed = 210;
  if (i < text.length) {
    $('.header').text();
    var newChar=$('class').text()+(text.charAt(i));
    $('class').text(newChar);
    i++;
    setTimeout(typeWriter,speed);
  }

}
typeWriter();

