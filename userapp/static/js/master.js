$('#loginform').validate({
    rules: {
      name: {
        required: true,
        minlength: 6,
      },
      pass: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      name: {
        required: "Enter your user  name",
        minlength: "alteast 6",
      },
      pass: {
        required: "Enter your password",
        minlength: "alteast 6",
      },
    },
    SubmitHandler: function (loginform) {
      form.submit();
    }

  })




  // -----------------------------------


