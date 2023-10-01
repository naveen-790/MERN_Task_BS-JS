  document.addEventListener("DOMContentLoaded", function () {
          var usernameInput = document.querySelector('input[type="text"]');
          var passwordInput = document.querySelector('input[type="password"]');
          var loginButton = document.getElementById('loginBtn');
          loginButton.addEventListener("click", function () {
            var usernameValue = usernameInput.value.trim();
            var passwordValue = passwordInput.value.trim();
            if (usernameValue === "") {
              alert("Please enter a username.");
              return;
            }
            if (passwordValue === "") {
              alert("Please enter a password.");
              return;
            }
            alert("Login successful!");
          });
        });

