  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  


  window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Adjust the time delay as needed
});

