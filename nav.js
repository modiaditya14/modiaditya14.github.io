const wrap = document.querySelector(".menuwrap")
var clicked = false
wrap.addEventListener("click", () => {
  clicked ? wrap.classList.add("clicked") : wrap.classList.remove("clicked")
  clicked = !clicked
})
