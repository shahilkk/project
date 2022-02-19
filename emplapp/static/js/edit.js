$('#editpro').validate({
    rules: {
      pname: {
        required: true,
        minlength: 6,
      },
     
      pemail: {
        required: true,
        email: true,
      },
      pphone: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
      ppin: {
        required: true,
        number: true,
        minlength: 6,
        maxlength: 6,
      },
      padd: {
        required: true,
      },
      pdob: {
        required: true,
        date: true,
        dateFormat: true,
      },
     
      pstate: {
        required: true,
      },
      pdis: {
        required: true,
      },
      pedu: {
        required: true,
      },
    },
    messages: {
      pname: {
        required: "Enter your First name",
        minlength: "alteast 6",
      },
     
      pemail: {
        required: "Enter your Email Addreaa",
        email: "Enter Valid Email Address",
      },
      pphone: {
        required: "Enter your phone number",
        number: "Enter Number",
        minlength: "minimum length 10",
        maxlength: "Not more than 10"
  
      },
      ppin: {
        required: "Enter your phone number",
        number: "Enter Number",
        minlength: "minimum length 6",
        maxlength: "Not more than 6"
  
      },
      padd:{
          required: "Enter your address",
      },
      pdob: {
        required: "Enter Your Dob",
        date: "Select date",
        dateFormat: "(dd/mm/yyyy)",
      },
      pstate: {
        required: "Enter your state",
      },
      pdis: {
        required: "Enter your district",
      },
      
     
      pedu: {
        required: "Enter your Education Qualification",
      },
    },
    SubmitHandler: function (editpro) {
      form.submit();
    }
  })