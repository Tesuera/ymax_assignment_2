function validateName (value) {
    if(!value.length) {
        error_status = 1;
        document.querySelector('#error_name').textContent = "Name is required";
    } else if(value.length < 2) {
        error_status = 1;
        document.querySelector('#error_name').textContent = "Name must have at least 2 characters";
    } else if(value.length > 20) {
        error_status = 1;
        document.querySelector('#error_name').textContent = "Name must not be longer than 20 characters";
    } else {
        document.querySelector('#error_name').textContent = "";
    }
}

function validateEmail (value) {
    let emailPattern = new RegExp("[a-z0-9.-_]+[@][a-z]+[.][a-z]{2,3}");

    if(!value.length) {
        error_status = 1;
        document.querySelector('#error_email').textContent = "Email is required";
    } else if(!emailPattern.test(value)) {
        error_status = 1;
        document.querySelector('#error_email').textContent = "Email must be valid";
    } else {
        document.querySelector('#error_email').textContent = "";
    }
}

function validatePhone (value) {
    let phonePattern = new RegExp("[+][9][5][9][0-9]{7,9}");

    if(!value.length) {
        error_status = 1;
        document.querySelector('#error_phone').textContent = "Phone is required";
    } else if(!phonePattern.test(value)) {
        error_status = 1;
        document.querySelector('#error_phone').textContent = "Phone must be valid";
    } else {
        document.querySelector('#error_phone').textContent = "";
    }
}

function validateDate (value) {
    if(!value.length) {
        console.log('error at date')
        error_status = 1;
        document.querySelector('#error_date').textContent = "Reservation date is required";
    } else if(new Date(value) <= new Date()) {
        error_status = 1;
        document.querySelector('#error_date').textContent = "Cannot choose date from the today & past";
    } else {
        console.log('no err')
        document.querySelector('#error_date').textContent = "";
    }
}

function validateTime (value) {
    if(!value.length || value == '0') {
        console.log('error at time')
        error_status = 1;
        document.querySelector('#error_time').textContent = "Time is required";
    } else {
        document.querySelector('#error_time').textContent = "";
    }
}