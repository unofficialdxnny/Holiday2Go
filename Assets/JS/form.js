

var ticketFor = "Ticket For " + localStorage.getItem("Name")
document.getElementById("ticket").innerHTML = ticketFor


var destination = "This ticket is booked for a destination in " + localStorage.getItem("Destination")
var when = " On " + localStorage.getItem("Date")
document.getElementById("destination").innerHTML = destination + when

