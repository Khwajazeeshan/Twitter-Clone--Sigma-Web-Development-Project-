document.addEventListener("DOMContentLoaded", () => {
    // Check the width of the screen and apply the conditions
    if (window.innerWidth < 500) {

        // Display the line at the bottom of the "For You" Button
        document.querySelector(".foryoy-btn").addEventListener("click", () => {
            document.querySelector(".click-line-one").style.display = "block";
            // Check if click-line-two is visible; if so, hide it
            if (document.querySelector(".click-line-two").style.display === "block") {
                document.querySelector(".click-line-two").style.display = "none";
            }
        });

        // Display the line at the bottom of the "Following" Button
        document.querySelector(".Following-btn").addEventListener("click", () => {
            document.querySelector(".click-line-one").style.display = "none";
            document.querySelector(".click-line-two").style.display = "block";
        });

        // Display the Following Page
        document.querySelector(".Following-btn").addEventListener("click", () => {
            document.querySelector(".second").style.display = "none";
            document.querySelector(".third").style.display = "block";
        });

        // Display the For-You Page
        document.querySelector(".foryoy-btn").addEventListener("click", () => {
            document.querySelector(".second").style.display = "block";
            if (document.querySelector(".third").style.display === "block") {
                document.querySelector(".third").style.display = "none";
            }
        });
    }
});