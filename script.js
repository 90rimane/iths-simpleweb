// Archive read more read less

let noOfChar = 150;
let contents = document.querySelectorAll(".content");
//console.log(contents);
contents.forEach(content => {

  if (content.textContent.length < noOfChar)
  {
    content.nextElementSibling.style.display = "none";
  }
  else
  {
    let displayText = content.textContent.slice (0,noOfChar);
    let moreText = content.textContent.slice (noOfChar);
    console.log(contents);
    content.innerHTML = `${displayText}<span class= "dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

 function readMore(btn){
  let post = btn.parentElement;
  console.log(post);
  post.querySelector(".dots").classList.taggle("hide");
  post.querySelector(".more").classList.taggle("hide");
  btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
 }

 //Slide show in home

 let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}