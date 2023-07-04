

var ticketFor = "Ticket For " + localStorage.getItem("Name")
document.getElementById("ticket").innerHTML = ticketFor


var destination = "This ticket is booked for a destination in " + localStorage.getItem("Destination")
var when = " On " + localStorage.getItem("Date")
document.getElementById("destination").innerHTML = destination + when


var img = document.getElementById("qrcode")


if (localStorage.getItem("Destination") === 'London') {
    img.src = "https://holiday2go.netlify.app/Assets/Images/3c7cda73e3964c9ba87d899116d538dc.png"

} else if (localStorage.getItem("Destination") === 'France') {
    img.src = "https://holiday2go.netlify.app/Assets/Images/08f145f12b816afc02a7ee7673f0ec40.png"

} else if (localStorage.getItem("Destination") === 'Belgium') {
    img.src = "https://holiday2go.netlify.app/Assets/Images/ea1964466dfc193908b09c66370310d0.png"
} else {

}




      var recipient = localStorage.getItem("Email")
      var subject = "Ticket From Holiday2Go"
      var body = `The below is the ticket for ${localStorage.getItem("Name")}`

      var data = {
        from: "ahmeddanial324@gmail.com",
        to: recipient,
        subject: subject,
        text: body
      };

     function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ahmeddanial324@gmail.com",
    Password: "DF6F77D2A421FEAAD54CAC80781FDF91319C",
    To: recipient,
    From: "ahmeddanial324@gmail.com",
    Subject: subject,
    Body: body
  })
  .then(function(message) {
    alert("Email sent successfully!");
  })
  .catch(function(error) {
    console.error("Error:", error);
    alert("An error occurred while sending the email.");
  });
}


// const axios = require('axios');

// function sendSimpleMessage() {
//     axios.post(
//         "https://api.mailgun.net/v3/sandboxed3da58e5fab401cb839cd13200aab0e.mailgun.org/messages",
//         {
//             from: "Mailgun Sandbox <postmaster@sandboxed3da58e5fab401cb839cd13200aab0e.mailgun.org>",
//             to: `Danial Ahmed <${localStorage.getItem(Email)}>`,
//             subject: "Hello Danial Ahmed",
//             text: "Congratulations Danial Ahmed, you just sent an email with Mailgun! You are truly awesome!"
//         },
//         {
//             auth: {
//                 username: "api",
//                 password: "23987d9551a9184304ab5ac44907335c-6d8d428c-99374baa"
//             }
//         }
//     )
//     .then(response => {
//         console.log("Email sent successfully!");
//     })
//     .catch(error => {
//         console.error("An error occurred while sending the email:", error);
//     });
// }

// sendSimpleMessage();



localStorage.clear()




window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Adjust the time delay as needed
});
