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

    // FUNCTIONALITY FOR WEATHER BUTTON:
    let zip = $("#city");

    //USER ENTERS CITY AND PRESSES BUTTON:
    $("#getInfo").click(function () {
        zip = $("#city").val();
        displayInformation();
    });

    function displayInformation() {
        //INITIAL API CALL THAT WILL GRAB LAT/LON FROM RESULT
        const apiKey = "940bd19264df2f0bdcef88196b007f5f";
        const queryURL =
        "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=" + apiKey + "&units=imperial";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            //ADDING CONTENT TO INDEX.HTML
            $("#cityName").text(response.name);
        
            $("#temp").html(
                "<img src='https://openweathermap.org/img/w/" +
                response.weather[0].icon +
                ".png'> <br>Current temperature:<br><span class='temperatures-from-api'>" +
                response.main.temp +
                "°</span> <br> Currently feels like:<br><span class='temperatures-from-api'>" +
                response.main.feels_like +
                "°</span> <br> Today's low:<br><span class='temperatures-from-api'>" + 
                response.main.temp_min +
                "°</span> <br> Today's high:<br><span class='temperatures-from-api'>" +
                response.main.temp_max +
                "°</span>"
            );
        });
    }

    
    
});