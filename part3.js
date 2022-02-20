
window.addEventListener('DOMContentLoaded', () => {
    inputs = document.querySelectorAll(".check");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("invalid", invalidHandler);
      console.log(inputs[i]);
    }
    
    document.getElementById("submitbtn").addEventListener("click",checkEmail);
});
//event handler
function invalidHandler(e){
    var validity = e.srcElement.validity;
    var sourceElement = e.srcElement.id;
    console.log("Hello");

    //Check validity of a constraint
    if(validity.valueMissing){
        //present a UI to user that the field is missing
        alert(`${sourceElement} is missing`);
    }
    else if(validity.typeMismatch){
        alert(`${sourceElement} has invalid format`);
    }
    else{
        alert("Something is wrong with your input");
    } 
    
    e.preventDefault();
}
function checkEmail() {
    var email1 = document.getElementById("emailaddress");
    var email2 = document.getElementById("emailaddress2");
    if (email1.value != email2.value){
    alert("Your emails do not match. Please recheck that your emails are entered identically in the two fields.");
    }
   
    }