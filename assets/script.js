$(document).ready(function () {
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
            $("#cityName").html(
                response.name + 
                "<img src='https://openweathermap.org/img/w/" +
                response.weather[0].icon +
                ".png'>");
            $("#temp").html(
                "Current temperature:<br><span class='temperatures-from-api'>" +
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

    // TO DO LIST FUNCTIONALITY:
    // SAVING TO-DO LIST ITEMS FUNCTIONALITY:
        // ONCE CLICKED, SAVE BUTTON WILL STORE THE USER'S INPUT TO LOCAL STORAGE SO THEY CAN VIEW ON THEIR CALENDAR IF PAGE GETS REFRESHED
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".list-section").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });
    //CODE TO RETRIEVE ITEMS FROM LOCAL STORAGE IF REFRESH HIT
    $("#hr-8 .list-section").val(localStorage.getItem("hr-8"));
    $("#hr-9 .list-section").val(localStorage.getItem("hr-9"));
    $("#hr-10 .list-section").val(localStorage.getItem("hr-10"));
    $("#hr-11 .list-section").val(localStorage.getItem("hr-11"));
    $("#hr-12 .list-section").val(localStorage.getItem("hr-12"));
    $("#hr-13 .list-section").val(localStorage.getItem("hr-13"));
    $("#hr-14 .list-section").val(localStorage.getItem("hr-14"));
    $("#hr-15 .list-section").val(localStorage.getItem("hr-15"));
    $("#hr-16 .list-section").val(localStorage.getItem("hr-16"));
    $("#hr-17 .list-section").val(localStorage.getItem("hr-17"));
    $("#hr-18 .list-section").val(localStorage.getItem("hr-18"));
    // FUNCTIONALITY TO DETERMINE PAST/PRESENT/FUTURE
    // VARIABLES SET UP TO DECLARE TIME TO BE USED IN FUNCTION BELOW
    var today = new Date();
    let currentTime = today.getHours();
    // FUNCTION CREATED TO SHOW A DIFFERENT COLOR BACKGROUND DEPENDING ON THE CURRENT TIME OF DAY
    function updateColor() {
        // let currentTime = today.getHours();
        $(".timeslot").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            if (blockTime < currentTime) {
                $(this).addClass("past");
            } else if (blockTime === currentTime) {
                $(this).removeClass("past").addClass("present");
            } else {
                $(this).removeClass("past", "present").addClass("future");
            }
        })
    };
    //FUNCTION CALL TO GET THE COLORS TO UPDATE:
    updateColor();
});