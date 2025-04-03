const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save theme preference
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "dark" : "light");
});

// Apply saved theme on page load
window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});