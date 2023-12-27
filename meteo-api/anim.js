let othercontent = document.querySelector(".otherContent");
let left = document.getElementById('left');

// hover left put othercontent on display block
left.addEventListener("mouseover", () => {
  othercontent.style.transform = 'translate(250px, 0px)';
  othercontent.style.opacity = '1';
});

// hover left put othercontent on display none
left.addEventListener("mouseout", () => {
  othercontent.style.transform = 'translate(0px, 0px)';
  othercontent.style.opacity = '0';
});