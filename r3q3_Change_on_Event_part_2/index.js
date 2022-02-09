boxes = document.querySelectorAll(".box")

for (i of boxes) {
    i.addEventListener("mouseover", function () {
        this.style.backgroundColor = "red"
    })
    i.addEventListener("mouseout", function () {
        this.style.backgroundColor = "white"
    })
}