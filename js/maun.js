document.getElementsByClassName("buttonn")[0].addEventListener(
    "click",
    function () {
        document.getElementsByClassName("bg")[0].classList.add("active")
        document.getElementsByClassName("modal")[0].classList.add("active")
    }
)
document.getElementsByClassName("close")[0].addEventListener(
    "click",
    function () {
        document.getElementsByClassName("bg")[0].classList.remove("active")
        document.getElementsByClassName("modal")[0].classList.remove("active")
    }
)
document.getElementsByClassName("yopish")[0].addEventListener(
    "click",
    function () {
        document.getElementsByClassName("bg")[0].classList.remove("active")
        document.getElementsByClassName("modal")[0].classList.remove("active")
    }
)