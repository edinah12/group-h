function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("Message").value;
    if(name === "" || email === "" || message === ""){
      alert("All fields are required.");
      return false;
    }
   }
