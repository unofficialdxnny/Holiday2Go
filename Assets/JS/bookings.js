document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });


  // var fname = document.getElementById("fname")
  // var lname = document.getElementById("lname")


  // localStorage.setItem("First Name", document.getElementById("fname"))



  function updatePricePlaceholder() {
    var locationsSelect = document.getElementById("locations");
    var priceInput = document.getElementById("price");

    var selectedOption = locationsSelect.options[locationsSelect.selectedIndex].value;
    if (selectedOption === "London") {
      priceInput.placeholder = "£100.00";
    } else if (selectedOption === "France") {
      priceInput.placeholder = "£200.00";
    } else if (selectedOption === "Belgium") {
      priceInput.placeholder = "£150.00";
    } else {
      priceInput.placeholder = "£0.00";
    }
  }

 





  
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
      localStorage.setItem("Name", document.getElementById("name").value)
      localStorage.setItem("Email", document.getElementById("mail").value)
      localStorage.setItem("Phone", document.getElementById("phone").value)
      localStorage.setItem("Destination", document.getElementById("locations").value)
      localStorage.setItem("Date", document.getElementById("date").value)
      

      window.location.href = "gen.html";

      // document.location.href = 'https://github.com',true;

    } else {
      alert("Please fill in all the required fields.");
    }
  }
  
  


  window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Adjust the time delay as needed
});
