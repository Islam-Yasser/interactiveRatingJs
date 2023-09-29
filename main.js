//hover
let elm = document.querySelectorAll(".rates div");
var styl;
var value;
for (let i = 0; i < elm.length; i++) {
  elm[i].addEventListener("mouseenter", rateshover,true);
  elm[i].addEventListener("mouseleave", ratesleave,true);
  elm[i].addEventListener("click", ratesclick,true);
}
function rateshover(e){
    this.style = styl;
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
    this.style.color = "white";
    this.style.cursor='pointer';

}
function ratesleave(e){
    this.style = styl;
}
function ratesclick(e){
    for (let j = 0; j < elm.length; j++) {
        elm[j].style = styl;
      }
      this.style.backgroundColor = "hsl(25, 97%, 53%)";
      this.style.color = "white";
      value = this.textContent;
}
//butn hover
let butn = document.getElementsByClassName("butn");
var styl1;
let number = document.getElementsByClassName("number");
let main = document.getElementsByClassName("main");
let second = document.getElementsByClassName("second");
butn[0].addEventListener("mouseenter", function () {
  styl1 = this.style;
  this.style.backgroundColor = "white";
  this.style.color = "hsl(25, 97%, 53%)";
  this.style.cursor = "pointer";
});
butn[0].addEventListener("mouseleave", function () {
  this.style = styl1;
});

butn[0].addEventListener("click", function () {
  number[0].textContent = value;
  main[0].style.display = "none";
  second[0].style.display = "block";
});
