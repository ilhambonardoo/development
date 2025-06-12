document.getElementById("colorInput").addEventListener("input", function (event) {
  let selectedColor = event.target.value;

  document.getElementById("color-code").innerHTML = selectedColor;

  document.getElementById("colorDisplay").style.backgroundColor = selectedColor;

  console.log(event);
});
