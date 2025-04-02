// Function to add a new row to the table
function addRow() {
    const tableBody = document.querySelector("#subjectTable tbody");
    const newRow = document.createElement("tr");

    // Create Subject cell
    const subjectCell = document.createElement("td");
    const subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.placeholder = "Enter Subject";
    subjectCell.appendChild(subjectInput);

    // Create Teacher cell
    const teacherCell = document.createElement("td");
    const teacherInput = document.createElement("input");
    teacherInput.type = "text";
    teacherInput.placeholder = "Enter Teacher's Name";
    teacherCell.appendChild(teacherInput);

    // Create Action cell with delete button
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deleteRow(deleteButton);
    };
    actionCell.appendChild(deleteButton);

    // Append all cells to the new row
    newRow.appendChild(subjectCell);
    newRow.appendChild(teacherCell);
    newRow.appendChild(actionCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);
}

// Function to delete a row from the table
function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}