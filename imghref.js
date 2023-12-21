    var elements = document.querySelectorAll('.audioimg, .audioname');
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
        window.location.href = 'autext.html';
      });
    });

function addText(n) {
    nomerAudio = n;
}