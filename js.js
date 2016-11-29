var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer").innerHTML;

for(t=0; t<reindeer.length; t++) {
  hohohoElement=hohohoElement + colors[t] + " " + reindeer[t] + ", "
  console.log(hohohoElement)
}

console.log(hohohoElement)
