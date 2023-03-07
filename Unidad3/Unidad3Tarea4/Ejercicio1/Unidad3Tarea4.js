// Get a reference to the "rojo" button
var botones = document.getElementsByClassName("BotonColor");
console.log(botones);
// Loop through the buttons and add event listeners to each one
for (var i = 0; i < botones.length; i++) {
   console.log(botones[i]);
   botones[i].addEventListener("click", function() {
      console.log(this.classList);
      // Get the value of the "data-color" attribute for the clicked button
      var color = this.classList.item(1);
      console.log(color);

      switch (color) {
         case 'amarillo':
            document.body.style.backgroundColor = "rgb(230, 194, 104)";
            break;
         case 'verde':
            document.body.style.backgroundColor = "rgb(68, 105, 68)";
            break;
         case 'rojo':
            document.body.style.backgroundColor = "rgb(136, 79, 79, 0.9)";
            break;
      }
   });
}

