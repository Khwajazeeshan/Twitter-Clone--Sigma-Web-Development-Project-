document.addEventListener("DOMContentLoaded", () => {
    // Check the width of the screen and apply the conditions
    if (window.innerWidth < 500) {

        // Add Event Listener on For You Button....................................
        document.querySelector(".foryoy-btn").addEventListener("click", () => {
            document.querySelectorAll(".click-line-one, .second").forEach(element => {
                element.style.display = "block";
            });
            document.querySelectorAll(".click-line-two, .third").forEach(element => {
                element.style.display = "none";
            });
        });

        // Add Event Listener on Following Button...................................
        document.querySelector(".Following-btn").addEventListener("click", () => {
            document.querySelectorAll(".click-line-one, .second").forEach(element => {
                element.style.display = "none";
            });
            document.querySelectorAll(".click-line-two, .third").forEach(element => {
                element.style.display = "block";
            });
        });

    }
});
