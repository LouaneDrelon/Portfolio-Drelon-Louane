let automobile = document.querySelector(".automobile");
let portray = document.querySelector(".portray");
let animals = document.querySelector(".animals");
let me = document.querySelector("#me");

function showAutomobile() {
    automobile.style.display="block";
    portray.style.display="none";
    animals.style.display="none";
    me.style.display="none"
} 
function showPortray() {
    portray.style.display="block";
    automobile.style.display="none";
    animals.style.display="none";
    me.style.display="none"
} 
function showAnimals() {
    animals.style.display="block";
    portray.style.display="none";
    automobile.style.display="none";
    me.style.display="none"
} 
function showMe(){
    me.style.display="flex"
    portray.style.display="none";
    automobile.style.display="none";
    animals.style.display="none";
}

VANTA.HALO({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 730.00,
  minWidth: 700.00,
  size: 0.50
})

