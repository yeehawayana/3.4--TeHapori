
const hamburger = document.querySelector(".ham");  
 const navsub = document.querySelector(".nav-sub");  
 hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
 });

function myFunction() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email"). value;
    var message = "Thank you " + firstname + " " + lastname +". We will send an email to " + email +" about further details"; var agree = document.getElementById("agree").checked; if (firstname == "" || lastname == "" || email == "" || agree == false) { alert('Please make sure you have entered your full name, email address and you agree to our terms of service.')} else {alert(message);
        }
} 


//Code for slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}