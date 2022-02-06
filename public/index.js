let buttonOne = document.getElementById("button-1")
let buttonTwo = document.getElementById("button-2")
let buttonThree = document.getElementById("button-3")
buttonOne.addEventListener("click", () => {
  let divOne = document.getElementById("div-1")
  divOne.style.animationName = "aa"
})

buttonTwo.addEventListener("click", () => {
  let divOne = document.getElementById("div-1")
  divOne.style.animationName = "div-animation-spin-full"
})

buttonThree.addEventListener("click", () => {
  let divOne = document.getElementById("div-1")
  typeColor = ["red", "yellow", "blue", "brown", "orange", "green", "pink"]
  let colors = typeColor[Math.floor(Math.random() * typeColor.length)]
  divOne.style.backgroundColor = colors
})
