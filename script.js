//there are three arrays - mySlides, myThumbnail and caption.


var slideIndex = 0;


// Next/previous controls
function plusSlides(n)
{ 
    slideIndex = slideIndex + n;
    showSlides();
}

// Thumbnail image controls - when user clicks on one of the thumbnails, the currentSlide function runs because of the onclick event. The n corresponds the value on each thumbnail that is passed on the onclick event. onclick is a standard HTML event.
function currentSlide(thumbnailID) {
    //set slideIndex to the number of the thumbnail
    slideIndex = thumbnailID;
    //call the showSlides function
    showSlides();
}
// the number then gets passed to the showSlides function.
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var thumbnails = document.getElementsByClassName("myThumbnail");
    //find the caption element that will store the description of the image
    var captionText = document.getElementById("caption");

    //if slide is greater than the number of slides, then go to the beginning
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    //if slide is less than the first one, go to the last slide.
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    //step through all the slides and turn them off - reset them all
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // active class is from CSS. Remove the active class from all thumbnails (note that the class active needs to start with a space)
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    //for the current thumbnail which is slideIndex minus 1 (because it's an array), set the display to block for the one we want to display.
    slides[slideIndex - 1].style.display = "block";
    //for the thumbnail that is associated with the current displayed image, we are going to make it active. The active CSS changes opacity to 1.
    thumbnails[slideIndex - 1].className += " active";
    //check the caption element, if found display the alt tag text.
    captionText.innerHTML = thumbnails[slideIndex - 1].alt;
}
//Display is set to none in the CSS. This overides that.
window.onload = showSlides;

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
    var message = "Thank you " + firstname + "" + lastname +". We will send an email to" + email +" about further details"; var agree = document.getElementById("agree").checked; if (firstname == "" || lastname == "" || email == "" || agree == false) { alert('Please make sure you have entered your full name, email address and you agree to our terms of service.')} else {alert(message);
        }
}  