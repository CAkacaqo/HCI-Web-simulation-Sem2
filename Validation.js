
function Validasi() {

    let firstName = document.getElementById("first").value
    let lastName = document.getElementById("last").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let problem = document.getElementById("problem").value

    if (firstName === "") {
        alert("Please fill in this field.");
        return false;
    } 

    if (lastName === "") {
        alert("Please fill in this field.");
        return false;
    }
    
    if (email === "") {
        alert("Please input the valid input.");
        return false;
    } else if (email.length < 9 || !email.includes('@')) {
        alert("Please input the valid input.");
        return false;
    }

    if (phone.length < 10) {
        alert("Phone number must atleast 10 digits");
        return false;
    } else if(phone.length > 14) {
        alert("Phone number must not over 14 digits");
        return false;
    }

    if (problem === "") {
        alert("Please fill in the inquiry");
        return false;
    }

    return true;


}

document.addEventListener("DOMContentLoaded", function() {
    var VerifPopup = document.getElementById("VerifPopup");
    var yesButton = document.getElementById("yes");
    var noButton = document.getElementById("no");

   
    VerifPopup.style.visibility = "visible";

    
    yesButton.addEventListener("click", function() {
        window.location.href = "OurProductsPageKids.html"; 
    });

    
    noButton.addEventListener("click", function() {
        VerifPopup.style.visibility = "hidden";
    });

    
    VerifPopup.addEventListener("click", function(event) {
        if (event.target === VerifPopup) {
            VerifPopup.style.visibility = "hidden";
        }
    });
});


