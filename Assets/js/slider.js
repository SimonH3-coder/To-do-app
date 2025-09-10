var slideIndex = 1;
showsDivs(slideIndex);

function plusDivs(n) {
  showsDivs((slideIndex += n));
}

function showsDivs(n) {
  console.log("hej");
  var i;
  var x = document.getElementsByClassName("sliderapp");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
