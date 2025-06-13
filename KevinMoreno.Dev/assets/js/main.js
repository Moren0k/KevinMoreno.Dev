document.addEventListener('DOMContentLoaded', function() {
  var textContent = document.getElementById('type-name');
  var fullText = "Jhos Kevin Agudelo Moreno!";
  var i = 0;
  var speed = 100;

  function typeWrite() { //Function Text typeWrite
    if (i < fullText.length) {
      textContent.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWrite, speed);
    }
  }
  typeWrite();
});