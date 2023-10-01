
    function validateForm() {
        let valid = true;
        const nameInput = document.getElementById("name");
            const nameError = document.getElementById("nameError");
            if (nameInput.value === "") {
                nameError.textContent = "This field is required";
                nameInput.style.borderColor = "#e60000";
                valid = false;
            } else {
                nameError.textContent = "";
                nameInput.style.borderColor = "";
            }
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            if (emailInput.value === "") {
                emailError.textContent = "A valid email address is required";
                emailInput.style.borderColor = "#e60000";
                valid = false;
            }  else {
                emailError.textContent = "";
                emailInput.style.borderColor = "";
            }
            const websiteInput = document.getElementById("website");
            const websiteError = document.getElementById("websiteError");
            if (websiteInput.value === "") {
                websiteError.textContent = "A valid url is required";
                websiteInput.style.borderColor = "red";
                valid = false;
            }else {
                websiteError.textContent = "";
                websiteInput.style.borderColor = "";
            }
            const messageInput = document.getElementById("message");
            const messageError = document.getElementById("messageError");
            if (messageInput.value === "") {
                messageError.textContent = "This field is required";
                messageInput.style.borderColor = "red";
                valid = false;
            } else {
                messageError.textContent = "";
                messageInput.style.borderColor = "";
            }
            
            return valid;
    }

