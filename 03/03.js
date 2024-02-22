// alert("good morning")
function clickEvent1(){
    document.getElementById("msg").innerHTML="good morning";
}

function clickEvent2(){
    document.querySelector("#msg").innerHTML = "<h2>good afternoon</h2>"; 
    // tags can be used
    // document.getElementById("msg").innerHTML="good afternoon";
}

function clickEvent(n){
    document.querySelector("#msg").innerHTML = `button ${n} is clicked`;
}
