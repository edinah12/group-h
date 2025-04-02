function openTab(event, tabName) {
    // This is to hide all tab contents
    var tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => content.classList.remove("active"));

    // Remove the active class from all buttons
    var tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => button.classList.remove("active"));

    // Show the selected tab and mark button as active
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}
document.getElementById("openModal").onclick = function () {
    document.getElementById("myModal").style.display = "block";
};

document.querySelector(".close").onclick = function () {
    document.getElementById("myModal").style.display = "none";
};

window.onclick = function (event) {
    if (event.target === document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
};