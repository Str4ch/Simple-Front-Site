const toggle_btn = document.querySelector(".toggle-btn");

toggle_btn.addEventListener("click", () => {
    // select the hoprizontal navBar
    // toggle class named 'show' on each click
	document.querySelector(".navigationBar").classList.toggle("show")
})
