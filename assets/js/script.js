var moment = moment();


var currentDay = moment.format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentDay);

var currentHour = moment.hour();


$(document).ready(function () {
    $('.saveBtn').on('click', function() {
        var text = $(this).parent().siblings().children('#form-1').val();
        var time = $(this).parent().parent().attr("id");
        localStorage.setItem(time, text);
        })})
    
function timeColor() {
    $('.time-block').each(function () {
        var timeRow = parseInt($(this).attr("id").split("time")[1]);
      if (timeRow < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (timeRow === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
}})}

function getLocalInput() { 
    for (i = 0; i <localStorage.length; i++) {
        $('.form-1').text('yee yee')
    }
}
console.log(localStorage.getItem('time' + 5))
timeColor();
getLocalInput();
