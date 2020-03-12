var slider = document.getElementById("userStormRating");
var output = document.getElementById("marks");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}