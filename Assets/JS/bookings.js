document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });


  // var fname = document.getElementById("fname")
  // var lname = document.getElementById("lname")


  // localStorage.setItem("First Name", document.getElementById("fname"))










  
  function form_submit() {
    var inputs = document.forms["eticket"].getElementsByTagName("input");
    
    var isFormValid = true;
    
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
        isFormValid = false;
      } else if (inputs[i].hasAttribute("required") && inputs[i].value !== "") {
        isFormValid = true;
      }
    }
    
    if (isFormValid) {
      alert("Form submitted successfully!");
      localStorage.setItem("First Name", document.getElementById("fname").value)

      window.location.href = "gen.html";

      // document.location.href = 'https://github.com',true;

    } else {
      alert("Please fill in all the required fields.");
    }
  }
  
  