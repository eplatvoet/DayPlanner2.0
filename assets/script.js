$(document).ready(function () {
    console.log("Let's get this going")

    // LOAD DATE & TIME WHEN PAGE IS OPENED/REFRESHED
    // NOTE: USING MOMENT.JS WILL KEEP IT UPDATED WHILE PAGE IS OPEN
    $("#currentDay").text(moment().format('dddd'));  
    $("#currentDate").text(moment().format('l'));  
    $("#currentTime").text(moment().format('h:mm:ss a'));
  

    //FUNCTION FOR UPDATING TIME WITHOUT REFRESHING THE PAGE
    function updateClock() {
        $("#currentDay").text(moment().format('dddd'));  
        $("#currentDate").text(moment().format('l'));  
        $("#currentTime").text(moment().format('h:mm:ss a'));
    }
    setInterval(updateClock, 1000)

    
});