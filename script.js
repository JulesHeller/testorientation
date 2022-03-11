if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", orient)
} else { }

function orient(event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;

    document.querySelector(".test").style.transform = "rotate(" + alpha + "deg)"

    // document.getElementById("log").innerHTML = "<ul><li>Alpha : " + alpha + "</li><li>Beta : " + beta + "</li><li>Gamma : " + gamma + "</li></ul>"; 
}