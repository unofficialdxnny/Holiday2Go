

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


localStorage.clear()


window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
  
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Adjust the time delay as needed
});
