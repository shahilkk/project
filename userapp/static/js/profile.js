$('#editprofile').validate({
    rules: {
        name: {
            required: true,
            minlength: 6,
        },
        username: {
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
        addre: {
            required: true,
            minlength: 15,
        },
        pincode: {
            required: true,
            number: true,
            maxlength: 6,
            minlength: 6,
        },
    },
    messages: {
        name: {
            required: "Enter your   name",
            minlength: "alteast 6",
        },
        username: {
            required: "Enter your user name",
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
        addre: {
            required: "*please your address",
            minlength: "atleast 15"
        },
        pincode: {
            required: 'enter phone number',
            number: 'valid pin code',
            maxlength: 'no more than 6  ',
            minlength: 'no less than 6',
        },
    },
    SubmitHandler: function (editprofile) {
        form.submit();
    }

})
