function myFunction(x) {
  let usunKlase = document.querySelector('#navbarNav');
  if (x.matches) { // If media query matches
    
    usunKlase.classList.remove('usunKlase');
  }
  else {
    usunKlase.classList.add('usunKlase');
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('faq-content');
let icons = document.getElementsByClassName('icon');

for(let i = 0; i < toggles.length; i++){
  toggles[i].addEventListener('click', () =>{

    console.log(contentDiv[i].style.height, contentDiv[i].scrollHeight);
    if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#60f7ff";
      icons[i].classList.remove('fa-bars');
      icons[i].classList.add('fa-minus');
    }
    else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#808080"
      icons[i].classList.remove('fa-minus');
      icons[i].classList.add('fa-bars');
    }
    
  })
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);