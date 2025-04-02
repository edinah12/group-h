document.getElementById("loadNewsBtn").addEventListener("click", function() {
    let moreNews = document.getElementById("moreNews");
    if (moreNews.style.display === "none") {
        moreNews.style.display = "block";
        this.textContent = "Hide News";
    } else {
        moreNews.style.display = "none";
        this.textContent = "Load More News";
    } 
});
const calendarGrid = document.getElementById('calendar');
const current = document.getElementById('currentDate');
let currentDate = new Date();

    function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDay = firstDayOfMonth.getDay();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    current.textContent = months[month]+" "+year;
    //Clear the calender
    calendarGrid.innerHTML = ''; 

      
    //Print days
    for(let i=0;i<7;i++){
        const newCell = document.createElement("div");
        newCell.innerHTML = days[i];
        newCell.classList = "calendar-days";
        calendarGrid.appendChild(newCell);
    }

    // Fill in the empty cells for leading spaces
    for (let i = 0; i < firstDay; i++) {
        const newCell = document.createElement("div");
        calendarGrid.appendChild(newCell);
        
    }

    // Generate the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        var newCell = document.createElement("div");
        newCell.innerHTML=day;
        calendarGrid.appendChild(newCell);
        
    }

  // Add event listeners to days
    const dayCells = calendarGrid.querySelectorAll('div');
    for(let i=0;i<dayCells.length;i++){
        dayCells[i].addEventListener('click', (day) => {
            if (day.target.innerText !== "") {
                alert("You clicked on ${day.target.innerText}");
            }
        });
    }
        
}

function changeMonth(change) {
    currentDate.setMonth(currentDate.getMonth() + change);
    renderCalendar();
}
function todayDate() {
    currentDate = new Date();
    renderCalendar();
}
renderCalendar();

document.getElementById("newsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;

    if (title && date && description) {
        alert("News/Event submitted successfully!");
        document.getElementById("newsForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
