

var ticketFor = "Ticket For " + localStorage.getItem("Name")
document.getElementById("ticket").innerHTML = ticketFor


var destination = "This ticket is booked for a destination in " + localStorage.getItem("Destination")
var when = " On " + localStorage.getItem("Date")
document.getElementById("destination").innerHTML = destination + when


var img = document.getElementById("qrcode")


if (localStorage.getItem("Destination") === 'London') {
    img.src = "https://holiday2go.netlify.app/Assets/Images/1895e020b5a2f817d09bb14f8910afef.png"

} else if (localStorage.getItem("Destination") === 'France') {
    img.src = "https://holiday2go.netlify.app/Assets/Images/f8ae340c9da0cccc1dddd4026bf33e67.png"

}