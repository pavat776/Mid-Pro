var start = 0;
function postFunction(){
    if(!name)
    {
        alert("insert smth inside");
    }
    if (start == 0){
        var name=document.getElementById("text1").value;
        document.getElementById("topic1").innerHTML=name;
        start++;
        }
        
    
    else if (start == 1){
        var name=document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML=name;
        start++;
    }
    else if (start == 2){
        var name=document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML=name;
        start++;
    }

}

function clearFunction(){
    var gg=document.getElementById("topic1").innerHTML="";
    var gg=document.getElementById("comment1").innerHTML="";
    var gg=document.getElementById("comment2").innerHTML="";
    start = 0;
}




