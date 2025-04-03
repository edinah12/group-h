const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Apply saved theme on page load
window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});