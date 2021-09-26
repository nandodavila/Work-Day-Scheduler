// var timeBlockTimes = moment().startOf('day').format('h:00 a');
var moment = moment();
var saveBtn = $('.save')


var currentDay = moment.format('dddd, MMMM YYYY');
$('#currentDay').text(currentDay);

var currentHour = moment.format('h:00 a');


// function getFormInput () {
//     var storedForm = localStorage.getItem("time-input");
//     if (storedForm) {
//         formLocal = JSON.parse(storedForm);
//         console.log(formLocal)
//     };
// };

$(document).ready(function () {
    saveBtn.on('click', function(event) {
        event.preventDefault();
        var formInput = $('#form-1').val();
        console.log(formInput)
        debugger
        var text = saveBtn.siblings(formInput).val();
        var time = saveBtn.parent().attr("id");
        console.log(formInput)
        if (formInput = null) {
            alert('nothing to save')
        } else {
            localStorage.setItem(time, text);
        }
    })
})

// getFormInput();
// setFormInput();

