$(document).ready(function() {
    $('#signUpForm').submit(function(event) {
        // Validate form fields
        if (!validateFormValues()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Function to validate form fields
    function validateFormValues() {
        let signUpUsername = $("#signup-username").val().trim();
        let email = $("#email").val().trim();
        let signUpPassword = $("#signup-password").val().trim();
        let confirmPassword = $("#confirmPassword").val().trim();
        let age = $("#age").val().trim();
        let gender = $("#gender").val().trim();
        let country = $("#country").val().trim();

        let isValid = true; // Flag to track overall validation

        // Clear existing error messages
        $(".error-message").remove();
        
        // Validate SignUp form fields
        if (!signUpUsername) {
            displayErrorMessage("#signup-username", "Username cannot be empty.");
            isValid = false;
        }

        // Validate email format
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            displayErrorMessage("#email", "Invalid email format.");
            isValid = false;
        }

        // Validate password
        let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(signUpPassword)) {
            displayErrorMessage("#signup-password", "Password must contain at least one special character, one numeric character, and be at least 8 characters long.");
            isValid = false;
        }

        // Validate confirmed password
        if (signUpPassword !== confirmPassword) {
            displayErrorMessage("#confirmPassword", "Password and confirm password do not match.");
            isValid = false;
        }

        // Validate age range
        if (isNaN(age) || age < 18 || age > 50) {
            displayErrorMessage("#age", "Age must be a number between 18 and 50.");
            isValid = false;
        }

        // Validate gender
        if (!gender) {
            displayErrorMessage("#gender", "Gender cannot be empty.");
            isValid = false;
        }

        // Validate country
        if (!country) {
            displayErrorMessage("#country", "Country cannot be empty.");
            isValid = false;
        }

        return isValid;
    }

    // Function to display error message
    function displayErrorMessage(inputFieldId, errorMessage) {
        $(inputFieldId).parent().append("<span class='error-message'>" + errorMessage + "</span>");
        $(inputFieldId).css("border-color", "red");
    }
});



//////for signin
$(document).ready(function() {
    $('#signInForm').submit(function(event) {
        // Validate form fields
        if (!validateFormValues()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Function to validate form fields
    function validateFormValues() {
        let signInUsername = $("#signin-username").val().trim();
        let signInPassword = $("#signin-password").val().trim();

        let isValid = true; // Flag to track overall validation

        // Clear existing error messages
        $(".error-message").remove();
        
        // Validate SignIn form fields
        if (!signInUsername) {
            displayErrorMessage("#signin-username", "Username cannot be empty.");
            isValid = false;
        }

        // Validate password
        let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(signInPassword)) {
            displayErrorMessage("#signin-password", "Password must contain at least one special character, one numeric character, and be at least 8 characters long.");
            isValid = false;
        }

        return isValid;
    }

    // Function to display error message
    function displayErrorMessage(inputFieldId, errorMessage) {
        $(inputFieldId).parent().append("<span class='error-message'>" + errorMessage + "</span>");
        $(inputFieldId).css("border-color", "red");
    }
});

