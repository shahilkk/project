
$('#firstname').keyup(function () {
  first = $('#firstname').val()
  if (first.length <= 4) {
    $('#firstname').css({
      borderColor: "red"
    })
  } else {
    $('#firstname').css({
      borderColor: "green"
    })

  }

});
$('#lastname').keyup(function () {
  last = $('#lastname').val()
  if (last.length <= 2) {
    $('#lastname').css({
      borderColor: "red"
    })
  } else {
    $('#lastname').css({
      borderColor: "green"
    })

  }

});
$('#email').keyup(function () {
  var mail = $('#email').val()
  if (mail.indexOf("@") < 0 || mail.indexOf(".") < 0) {
    $('#email').css({
      borderColor: "red"
    })
  } else {
    $('#email').css({
      borderColor: "green"
    })

  }

});
$('#mobile').keyup(function () {
  phone = $('#mobile').val()
  if (phone.length != 10) {
    $('#mobile').css({
      borderColor: "red"
    })
  }
  else if (isNaN(phone)) {
    $('#mobile').css({
      borderColor: "red"
    })

  } else {
    $('#mobile').css({
      borderColor: "green"
    })

  }


});
$('#age').keyup(function () {
  age = $('#age').val()
  if (age.length != 2) {
    $('#age').css({
      borderColor: "red"
    })
  }
  else if (isNaN(age)) {
    $('#age').css({
      borderColor: "red"
    })

  }

  else {
    $('#age').css({
      borderColor: "green"
    })

  }


});
// $('#address').keyup(function () {
//   adress = $('#address').val()
//   if (adress.length <= 10) {
//     $('#address').css({
//       borderColor: "red"
//     })
//   } else {
//     $('#address').css({
//       borderColor: "green"
//     })

//   }

// });
// $('#pin').keyup(function () {
//   pincode = $('#pin').val()
//   if (pincode.length != 6) {
//     $('#pin').css({
//       borderColor: "red"
//     })
//   }
//   else if (isNaN(pincode)) {
//     $('#pin').css({
//       borderColor: "red"
//     })

//   } else {
//     $('#pin').css({
//       borderColor: "green"
//     })

//   }
// });
// $('#place').keyup(function () {
//   place = $('#place').val()
//   if (place.length <= 5) {
//     $('#place').css({
//       borderColor: "red"
//     })
//   } else {
//     $('#place').css({
//       borderColor: "green"
//     })

//   }

// });





// select  box
$('#selectbox').click(function () {
  if ($('#selectbox').val() == "Electronics & Appliances") {
    $('#electronicbox').show()
  } else {
    $('#electronicbox').hide()
  }

});
$('#selectbox').click(function () {
  if ($('#selectbox').val() == "Home Maintenance") {
    $('#homebox').show()
  } else {
    $('#homebox').hide()
  }
});
$('#selectbox').click(function () {
  if ($('#selectbox').val() == "Cleaning Service") {
    $('#cleaningbox').show()
  } else {
    $('#cleaningbox').hide()
  }
});
$('#selectbox').click(function () {
  if ($('#selectbox').val() == "Events & Occasions") {
    $('#eventbox').show()
  } else {
    $('#eventbox').hide()
  }
});
$('#selectbox').click(function () {
  if ($('#selectbox').val() == "Health & Personals") {
    $('#healthbox').show()
  } else {
    $('#healthbox').hide()
  }
});
$('#selectbox').click(function () {
  if ($('#selectbox').val() == "Automobile Services") {
    $('#autobox').show()
  } else {
    $('#autobox').hide()
  }
});
$('#selectbox').click(function () {
  if ($('#selectbox').val() == "Others") {
    $('#inputbox').show()

  } else {
    $('#inputbox').hide()
  }
});

  // end check box




  // validation
 

  // end validation
