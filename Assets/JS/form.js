

var ticketFor = "Ticket For " + localStorage.getItem("Name")
document.getElementById("ticket").innerHTML = ticketFor


var destination = "This ticket is booked for a destination in " + localStorage.getItem("Destination")
var when = " On " + localStorage.getItem("Date")
document.getElementById("destination").innerHTML = destination + when


var img = document.getElementById("qrcode")


if (localStorage.getItem("Destination") === 'London') {
    img.src = "https://holiday2go.netlify.app/Assets/Images/London.png"

} else if (localStorage.getItem("Destination") === 'France') {
    img.src = "https://holiday2go.netlify.app/Assets/Images/France.png"

} else if (localStorage.getItem("Destination") === 'Belgium') {
    img.src = "https://holiday2go.netlify.app/Assets/Images/Belgium.png"
}