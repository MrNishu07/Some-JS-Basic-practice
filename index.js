const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(g)
{
  g.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    const color = e.target.id;
    body.style.backgroundColor = color;
  })
});