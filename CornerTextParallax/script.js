document.addEventListener("mousemove", parallaxText);
function parallaxText(event) {
  this.querySelectorAll(".layer").forEach((layer) => {
    let x = (window.innerWidth - event.pageX * 2) / 2;
    layer.style.transform = `translateX(${x}px)`;
  });
}
