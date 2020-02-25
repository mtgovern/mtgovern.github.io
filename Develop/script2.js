
      //Set variables  
      var plength = 0;
      var lowerCase = "abcdefghijklmnopqrstuvwxyz";
      var upperCase = lowerCase.toUpperCase();
      var numbers = "1234567890";
      var specialCharacter = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";
      var userPassword = "";
      var passwordGroup = "";

      //Request user to enter the length of the password
      var plength = parseInt(prompt("Enter length of password.",""));

      //Require number
      while (isNaN(plength)) {
        var plength = parseInt(prompt("This is not a number. Please enter a number between 8 - 128.",""));
      } 

      

      //Requirements for password length
      while (plength < 8 || plength > 128){
        var plength = parseInt(prompt("Enter length of password.* Length must be between 8 - 128 characters",""));
      } 
      
      // Confirm whether user wants to use lower case letters 
      var selectLowerCase = confirm("Would you like to use lower case letters?");
      // Confirm whether user wants to use upper case letters
      var selectUpperCase = confirm("Would you like to use upper case letters?");
      //Confirm whether user wants to use numeric characters 
      var selectNumber = confirm("Would you like to use numbers?");
      //Confirm whether user wants to use special symbols
      var selectSpecial = confirm("Would you like to user special characters?");


      //Call function to generate password 
      generatePassword();

      alert("Your Password is: "+ userPassword);
      //Write generated password on page
      document.getElementById("password").innerHTML = userPassword;

    

      //Generate password. If user selected an option, randomly select a character from that string. Then from those options randomly pick characters with the maximum number of characters being the user length.
      function generatePassword() {
        if (selectLowerCase) {
        passwordGroup += lowerCase;
        }
        if (selectUpperCase) {
        passwordGroup += upperCase;
        }
        if (selectNumber) {
        passwordGroup += numbers;
        }
        if (selectSpecial) {
        passwordGroup += specialCharacter;
        }
        for (let i = 0; i < plength; i++) {
          userPassword += passwordGroup.charAt(
          Math.floor(Math.random() * passwordGroup.length)
          );
        }
        return userPassword;
      }

      // Copy the password to clipboard
      // function copyPassword(){
      //   var copyText = document.getElementById("password");
      //   copyText.select();
      //   copyText.setSelectionRange(0,99999);
      //   document.execCommand("copy");
      //   alert("Copied");
      // }

