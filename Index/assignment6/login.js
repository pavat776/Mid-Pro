window.onload = pageLoad;

function pageLoad(){
	var from = document.getElementById("myLogin");
    from.onsubmit = validateForm;
}

function validateForm() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username')
	const password = urlParams.get('password')

	var x = document.forms["myLogin"]["username"].value;
    var y = document.forms["myLogin"]["password"].value;
    if(x != username || y != password) 
    {
        alert("false");
        return false;
    }
    else
    {
        alert("correct");
    }
	
}

