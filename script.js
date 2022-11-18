document.addEventListener("click", e => { 
    let handle
    if (e.target.matches("handle")) {
        handle = e.target
    } else {
        handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
})

window.addEventListener("resize", (e) => {
    //recalculate progress bar
})

function onHandleClick(handle) {
    const slider = handle.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index"))
    if (handle.classList.contains("left-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
    }

    if (handle.classList.contains("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
}

if (handle.classList.container("right-handle")) {
    slider.style.setProperty("--slider-index", sliderIndex - 1)
    progressBar.children[sliderIndex].classList.remove("activate")
    progressBar.children[sliderIndex - 1].classList.add("activate")
}

if (handle.classList.container("left-handle")) {
    slider.style.setProperty("--slider-index", sliderIndex + 1)
    progressBar.children[sliderIndex].classList.remove("activate")
    progressBar.children[sliderIndex + 1].classList.add("activate")
}