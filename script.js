document.addEventListener("click", e => { 
    let handle
    if (e.target.matches("handle")) {
        handle = e.target
    } else {
        handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
})

function onHandleClick(handle) {
    const slider = handle.closest(".container").queryselector("slider")
    const sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue("--slider-index"))
    if (handle.classlist.contain("left-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
    }
    if (handle.classlist.contain("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
}