// var timeBlockTimes = moment().startOf('day').format('h:00 a');
var moment = moment();
var saveBtn = $('.save')
var formInput = $('.form-1')
var formLocal = []

var currentDay = moment.format('dddd, MMMM YYYY');
$('#currentDay').text(currentDay);

var currentHour = moment.format('h:00 a');

console.log(currentHour);
console.log(formInput)

function timeBlocks() {
    var hoursInDay = 24;
    for (i = 1;i <= hoursInDay; i++) {
        var timeBlockTimes = moment.startOf('day').add(i, 'hour').format('h:00 a');
        var timeText = $(".time-" + i);
        timeText.text(timeBlockTimes);
    }
    currentHour = moment.format('h:00 a');
    if (currentHour = timeBlockTimes) {
        timeText.css('background', "rgb(122, 242, 242)");
    } console.log(currentHour);
}; 

timeBlocks();

function getFormInput () {
    var storedForm = localStorage.getItem("time-input");
    if (storedForm) {
        formLocal = JSON.parse(storedForm);
        console.log(formLocal)
    };
};

function setFormInput() {
    saveBtn.on('click', function(event) {
        event.preventDefault();
        if (formInput = null) {
            alert('nothing to save')
        } else {
            formLocal.push(formInput)
            console.log(formLocal)
        }
    })
    localStorage.setItem("time-input", JSON.stringify(formLocal))
}

getFormInput();
setFormInput();

