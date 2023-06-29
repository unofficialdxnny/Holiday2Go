  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  

// function form_submit() {
//   alert('Generating your E-Ticket. Please Wait.')
//   // return true
// }


function formValidation() {
  var firstname = document.eticket.fname;
  var lastname = document.eticket.lname;
  var email = document.eticket.email;
  var pnum = document.eticket.pnum;
  var where = document.eticket.where;
  var date = document.eticket.date;

  if (firstname == "") {
    alert('Enter Your First Name')
  }


}