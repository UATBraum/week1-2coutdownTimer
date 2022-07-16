//function for countdownTimer V1 for week 1-2
function start() {
    console.log("start() function started");
    //created variable for time
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    //9
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 1000)
    //8
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 2000)
    //7
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 3000)
    //6
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 4000)
    //5
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 5000)
    //4
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 6000)
    //3
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 7000)
    //2
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 8000)
    //1
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 9000)
    //Blast Off
    setTimeout(function () {
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blast Off!";
    }, 10000)

}