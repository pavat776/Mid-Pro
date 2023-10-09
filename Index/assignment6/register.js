window.onload = pageLoad;

function pageLoad(){
	var from = document.getElementById("myForm");
    from.onsubmit = validateForm;

}

function validateForm() {
    
    var x = document.forms["myForm"]["password"].value;
    var y = document.forms["myForm"]["repassword"].value;
    if(x != y)
    {
        var from = document.getElementById("errormsg").innerHTML="error"; 
        alert("False")
        return false;
    }
    else
    {
        alert("correct")
    }
}




