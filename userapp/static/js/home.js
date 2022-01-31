$('#modalbooking').validate({
    rules: {
      name: {
        required: true,
        minlength: 6,
      },
      location: {
        required: true,
        minlength: 6,
      },
      email: {
        required: true,
        email: true,

      },
      phone: {
        required: true,
        number: true,
        maxlength: 10,
        minlength: 10,
      },
     
    },
    messages: {
      name: {
        required: "Enter your first  name",
        minlength: "alteast 6",
      },
      location: {
        required: "Enter your location",
        minlength: "alteast 6",
      },
      email: {
        required: "enter email id",
        email: "enter a valid email id",

      },
      phone: {
        required: 'enter phone number',
        number: 'valid phone number',
        maxlength: 'no more than 10  ',
        minlength: 'no less than 10',
      },
     
    },
    SubmitHandler: function (modalbooking) {
      form.submit();
    }

  })