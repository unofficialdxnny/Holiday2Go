  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  


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
    window.location.href = "https://github.com";
  } else {
    alert("Please fill in all the required fields.");
  }
}

