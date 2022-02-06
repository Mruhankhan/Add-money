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
  typeColor = ["red", "yellow", "blue", "brown", "orange", "green", "violet", "black", "carnation pink", "yellow orange", "blue green", "red violet", "red orange", "yellow green", "blue violet", "white", "violet red", "dandelion", "cerulean", "apricot", "scarlet", "green yellow", "indigo and gray"]
  let colors = typeColor[Math.floor(Math.random() * typeColor.length)]
  divOne.style.backgroundColor = colors
})
