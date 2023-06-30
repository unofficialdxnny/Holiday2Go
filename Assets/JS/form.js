function sleep(id, num) {
    setTimeout(id, num);
}

const code = document.getElementById("qrcode")

function show() {
    document.getElementById("qrcode").style.visibility = "visible"
}

setTimeout(show(), 10000)