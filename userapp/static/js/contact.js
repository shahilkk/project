$('#contact').validate({
    rules: {
        firstname1: {
            required: true,
            minlength: 6,
        },
        // lastname: {
        //     required: true,
        //     minlength: 6,
        // },
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
        mess: {
            required: true,
            minlength: 15,
        },
    },
    messages: {
        firstname1: {
            required: "Enter your first  name",
            minlength: "alteast 6",
        },
        // lastname: {
        //     required: "Enter your last name",
        //     minlength: "alteast 6",
        // },
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
        address: {
            required: "*please fill this field",
            minlength: "atleast 15"
        },
    },
    SubmitHandler: function (contact) {
        form.submit();
    }

})