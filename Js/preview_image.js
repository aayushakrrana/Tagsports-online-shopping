
    function showImage(n) {
      var i;
      var slides = document.getElementsByClassName("preview-track-pant-dark");  

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }

      
      slides[n-1].style.display = "block";  
    }