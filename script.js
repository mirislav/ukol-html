document.querySelectorAll('.obrazek').forEach(function(obrazek) {
  obrazek.addEventListener('click', function() {
    var strankaURL = this.getAttribute('data-url');
    window.open(strankaURL, '_blank');
  });
});

