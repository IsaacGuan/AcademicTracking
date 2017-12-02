var Login = function () {
    
    return {
        //main function to initiate the module
        init: function () {
        	
           $('.student-login-form').validate({
	            errorElement: 'label', //default input error message container
	            errorClass: 'help-inline', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            rules: {
	                studentnumber: {
	                    required: true,
	                    digits: true,
	                    range: [100000000, 999999999]
	                },
	                studentname: {
	                    required: true
	                },
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   
	                $('.alert-error', $('.student-login-form')).show();
	            },

	            highlight: function (element) { // hightlight error inputs
	                $(element)
	                    .closest('.control-group').addClass('error'); // set error class to the control group
	            },

	            success: function (label) {
	                label.closest('.control-group').removeClass('error');
	                label.remove();
	            },

	            errorPlacement: function (error, element) {
	                error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
	            },
	            
	        });

	        $('.student-login-form input').keypress(function (e) {
	            if (e.which == 13) {
	                if ($('.student-login-form').validate().form()) {
	                	var usertype = $('.student-login-form input:radio[name="usertype"]:checked').val();
	                    window.location.href=usertype+".html"
	                }
	                return false;
	            }
	        });

	        $('.clerk-login-form').validate({
	            errorElement: 'label', //default input error message container
	            errorClass: 'help-inline', // default input error message class
	            focusInvalid: false, // do not focus the last invalid input
	            ignore: "",
	            rules: {
	                password: {
	                    required: true
	                },
	            },

	            invalidHandler: function (event, validator) { //display error alert on form submit   

	            },

	            highlight: function (element) { // hightlight error inputs
	                $(element)
	                    .closest('.control-group').addClass('error'); // set error class to the control group
	            },

	            success: function (label) {
	                label.closest('.control-group').removeClass('error');
	                label.remove();
	            },

	            errorPlacement: function (error, element) {
	                error.addClass('help-small no-left-padding').insertAfter(element.closest('.input-icon'));
	            },
	            
	        });

	        jQuery('#clerk-btn').click(function () {
	            jQuery('.student-login-form').hide();
	            jQuery('.clerk-login-form').show();
	        });

	        jQuery('#back-btn').click(function () {
	            jQuery('.student-login-form').show();
	            jQuery('.clerk-login-form').hide();
	        });
        }

    };

}();