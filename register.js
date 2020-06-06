jQuery.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0;
}, "No space please and don't leave it empty");

jQuery.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Please enter valid email address!");

$.validator.addMethod("alphanumeric", function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, and underscores only please");

var $registrationForm = $('#registration');
if ($registrationForm.length) {
    $registrationForm.validate({
        rules: {
            fname: {
                required: true,
                noSpace: true,
                minlength: 3,

            },
            lname: {
                required: true,
                noSpace: true,
                minlength: 3,

            },
            username: {
                required: true,
                alphanumeric: true
            },
            email: {
                required: true,
                customEmail: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm: {
                required: true,
                minlength: 5,
                equalTo: '#password'
            },
            gender: {
                required: true
            },
            hobbies: {
                required: true
            },
            country: {
                required: true
            },
            address: {
                required: true
            }
        },
        messages: {
            fname: {
                required: 'Please enter first name!',
                minlength: 'Your password must consist of at least 3 characters'
            },
            lname: {
                required: 'Please enter last name!',
                minlength: 'Your password must consist of at least 3 characters'
            },
            username: {
                required: 'Please enter username!'
            },
            email: {
                required: 'Please enter email!',
                email: 'Please enter valid email!'
            },
            password: {
                required: 'Please enter password!',
                minlength: 'Your password must consist of at least 5 characters'
            },
            confirm: {
                required: 'Please enter confirm password!',
                minlength: 'Your password must consist of at least 5 characters',
                equalTo: 'Please enter same password!'
            },
            country: {
                required: 'Please select country!'
            },
            address: {
                required: 'Please enter address!'
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('.gender'));
            }
            else if (element.is(":checkbox")) {
                error.appendTo(element.parents('.hobbies'));
            }
            else {
                error.insertAfter(element);
            }

        }
    });

   $("#username").focus(function () { 
        var firstname = $("#fname").val();
        var lastname  = $("#lname").val();
        if( firstname && lastname && ! this.value)
        {
            this.value = firstname + "-"+ lastname;
        }

        
    });
}