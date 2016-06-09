 function checkForm()
  {
    if(document.getElementById("name").value == "") {
        document.getElementById("errorMessage").innerHTML = "Error: Name cannot be blank!";
      document.getElementById("name").focus();
      return false;
    }

    re = /^\w+$/;
    if(!re.test(document.getElementById("name").value)) {
      document.getElementById("errorMessage").innerHTML = "Error: Name must contain only letters, numbers and underscores!";
      document.getElementById("name").focus();
      return false;
    }
      
    if(document.getElementById("dob").value == "") {
      document.getElementById("errorMessage").innerHTML = "Error: Date of birth cannot be blank!";
      document.getElementById("dob").focus();
      return false;
    }

    if(document.getElementById("email").value == "") {
      document.getElementById("errorMessage").innerHTML = "Error: Email cannot be blank!";
      document.getElementById("email").focus();
      return false;
    }
      

    re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(document.getElementById("email").value)) {
    	document.getElementById("errorMessage").innerHTML = "Error: Please enter a valid email address!";
    	document.getElementById("email").focus();
    	return false;
    }
      
    re = /^\d{10}$/;  
    if (!re.test(document.getElementById("number").value)) {
    	document.getElementById("errorMessage").innerHTML = "Error: Please enter a valid phone number!";
    	document.getElementById("number").focus();
    	return false;
    }  
      
    if(document.getElementById("address").value == "") {
      document.getElementById("errorMessage").innerHTML = "Error: Address cannot be blank!";
      document.getElementById("address").focus();
      return false;
    }


    if(document.getElementById("pwd").value != "") {
        if(document.getElementById("pwd").value.length < 6) {
            document.getElementById("errorMessage").innerHTML = "Error: Password must contain at least six characters!";
            document.getElementById("pwd").focus();
            return false;
        }
        
        if(document.getElementById("pwd").value == document.getElementById("name").value) {
            document.getElementById("errorMessage").innerHTML = "Error: Password must be different from Name!";
            document.getElementById("pwd").focus();
            return false;
        }

        re = /[0-9]/;
        if(!re.test(document.getElementById("pwd").value)) {
            document.getElementById("errorMessage").innerHTML = "Error: password must contain at least one number (0-9)!";
            document.getElementById("pwd").focus();
            return false;
        }

        re = /[a-z]/;
        if(!re.test(document.getElementById("pwd").value)) {
            document.getElementById("errorMessage").innerHTML = "Error: password must contain at least one lowercase letter (a-z)!";
            document.getElementById("pwd").focus();
            return false;
        }
          re = /[A-Z]/;
          if(!re.test(document.getElementById("pwd").value)) {
            document.getElementById("errorMessage").innerHTML = "Error: password must contain at least one uppercase letter (A-Z)!";
            document.getElementById("pwd").focus();
            return false;
          }
    } 
    else {
        document.getElementById("errorMessage").innerHTML = "Error: Please check that you've entered and confirmed your password!";
        document.getElementById("pwd").focus();
        return false;
    }

    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "Successfully created a new account.";
    return false;
  }

document.onload = function() {
    checkForm();
}