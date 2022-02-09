// PLACE YOUR CODE HERE

document.querySelector("h2").style.fontSize = "32px"
document.querySelector("h2").style.fontFamily = "verdana"

document.querySelector("img").style.border = "1px black solid"
document.querySelector("img").style.padding = "32px 0px 15px 0px"

document.querySelector("ul li").style.backgroundColor = "yellow"
document.querySelectorAll("ul li")[3].style.backgroundColor = "yellow"

document.querySelectorAll("h2")[1].innerText = "Pancake Recipe"

olli = document.querySelectorAll("ol li")
for (i of olli) {
    i.style.color = "orange"
}