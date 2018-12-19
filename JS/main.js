window.onscroll = function() {stick()};

var navbar = document.getElementById("navigation");

var sticky = navbar.offsetTop;

function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.carousel').carousel({
  interval: 4500
})