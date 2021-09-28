// var timeBlockTimes = moment().startOf('day').format('h:00 a');
var moment = moment();
// var saveBtn = $('.save')


var currentDay = moment.format('dddd, MMMM Do YYYY');
$('#currentDay').text(currentDay);

var currentHour = moment.format('h:00 a');


$(document).ready(function () {
    $('.save').on('click', function() {
        var text = $(this).parent().siblings().children('#form-1').val();
        var time = $(this).parent().parent().attr("id");
        localStorage.setItem(time, text);
        })})
    



