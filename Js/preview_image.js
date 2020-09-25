
    function showImage(n) {
      var i;
      var slides = document.getElementsByClassName("preview-track-pant-dark");  

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }

      
      slides[n-1].style.display = "block";  
    }


    function showImage_Black(n) {

     
      var i;
      var slides = document.getElementsByClassName("preview-track-pant-black");  

      console.log(slides.length);

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }

      
      slides[n-1].style.display = "block"; 
    }


    function showImage_Grey(n) {

     
      var i;
      var slides = document.getElementsByClassName("preview-track-pant-grey");  

      console.log(slides.length);

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }

      
      slides[n-1].style.display = "block"; 
    }

    
    function showImage_Blue(n) {

     
      var i;
      var slides = document.getElementsByClassName("preview-track-pant-blue");  

      console.log(slides.length);

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }

      
      slides[n-1].style.display = "block"; 
    }



    function openDarkDiv()
    {
        document.getElementById("black-div").style.display = "none";
        document.getElementById("dark-div").style.display = "flex";
        document.getElementById("grey-div").style.display = "none";
    }
    
    
    function openBlackDiv()
    {
        document.getElementById("dark-div").style.display = "none";
        document.getElementById("black-div").style.display = "flex";
        document.getElementById("grey-div").style.display = "none";
    }

    function openGreyDiv()
    {
      document.getElementById("dark-div").style.display = "none";
      document.getElementById("grey-div").style.display = "flex";
      document.getElementById("black-div").style.display = "none";
    }
    
    




    /* BLACK and GREY */
    function openBlackDiv1()
    {
      
        document.getElementById("black-div").style.display = "flex";
        document.getElementById("grey-div").style.display = "none";
    }
    function openGreyDiv1()
    {
    
      document.getElementById("grey-div").style.display = "flex";
      document.getElementById("black-div").style.display = "none";
    }



    /*BLUE and GREY */
    function openBlueDiv2()
    {
     
      document.getElementById("blue-div").style.display = "flex";
      document.getElementById("grey-div").style.display = "none";
      
    }
    
    function openGreyDiv2()
    {
      document.getElementById("blue-div").style.display = "none";
      document.getElementById("grey-div").style.display = "flex";
      
    }
    

    /*BLUE BLACK AND GREY */
    function openBlueDiv3()
    {
        document.getElementById("black-div").style.display = "none";
        document.getElementById("blue-div").style.display = "flex";
        document.getElementById("grey-div").style.display = "none";
    }
    
    
    function openBlackDiv3()
    {
        document.getElementById("blue-div").style.display = "none";
        document.getElementById("black-div").style.display = "flex";
        document.getElementById("grey-div").style.display = "none";
    }

    function openGreyDiv3()
    {
      document.getElementById("blue-div").style.display = "none";
      document.getElementById("grey-div").style.display = "flex";
      document.getElementById("black-div").style.display = "none";
    }
    
    /*BLUE BLACK AND DARK */
    function openBlueDiv4()
    {
        document.getElementById("black-div").style.display = "none";
        document.getElementById("blue-div").style.display = "flex";
        document.getElementById("dark-div").style.display = "none";
    }
    
    
    function openBlackDiv4()
    {
        document.getElementById("blue-div").style.display = "none";
        document.getElementById("black-div").style.display = "flex";
        document.getElementById("dark-div").style.display = "none";
    }

    function openDarkDiv4()
    {
      document.getElementById("blue-div").style.display = "none";
      document.getElementById("dark-div").style.display = "flex";
      document.getElementById("black-div").style.display = "none";
    }
    