
$(document).ready(function (){
  console.log('working');
  $('#calculator').on('submit', submitData);
  $('.btn-clear').on('click', clearData);

});

  var calculation = {};
  var dataArray = [];
  var answer;


  function submitData(event){
    event.preventDefault();

    //create object from entered values
    $.each($('#calculator').serializeArray(), function(i, field){
    calculation[field.name] = field.value;
    });

    //clear the form
    $('#calculator').find('input[type=text]').val('');
    $('[name=operand]').removeAttr('checked');

      sendData();

  }

  function sendData(){

    $.ajax({
      type: "POST",
      url: "/input",
      data: calculation,
      success: function(response){
        appendAnswer(response);
      }
    });
  }


  //function to append entered numbers, operand, and answer to the DOM
  function appendAnswer(response){
    var symbol = "";
    switch (calculation.operand){
      case "add":
      symbol = "+"
      break;

      case "subtract":
      symbol = "-"
      break;

      case "multiply":
      symbol = "*"
      break;

      case "divide":
      symbol = "/"
      break;
    }

    $('.inputNumbers').text(calculation.firstnumber + " " + symbol + " " + calculation.anothernumber + " = " + response);

  }

  //function to clear the answer when the clear button is clicked
  function clearData(){
    $('.inputNumbers').text("");

  }
