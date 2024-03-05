document.addEventListener("DOMContentLoaded", () => {
    
    const img = document.querySelector("img") ;
    const numInput = document.querySelector("#num");
    numInput.focus();
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");
    const trial = document.querySelector("#trial");

    let randN;
    let flag = false;
    let count=0;

    bt.addEventListener("click",(e)=>{
        //e.preventDefault;
        // generate a random number ranging from 1 to 20
        if(!flag && count >5){ //flag === false
            randN = Math.floor(Math.random() * 20) + 1;
            console.log(randN);
            flag = true;
                        
            numInput.style.display = "inline";
            count = 0;
            trial.value = count;
            numInput.value='';
            numInput.focus();
            bt.innerHTML = "click";
        } 

        // get an input from an user
        // if no inputs are recieved - make an alert
        if(numInput.value=='') {
            // alert("enter your guess");
            msg.innerHTML = "<span>enter your geuss</span>"
            numInput.focus();
            return;
        }

        if(parseInt(numInput.value)<1 || parseInt(numInput.value)>100) {
            // alert("enter your guess");
            msg.innerHTML = "<span>your guess must range from 1 to 100 </span>"
            numInput.focus();
            return;
        }

        if(numInput.value==randN) { // or parseInt(numInput.value)===randN
            img.setAttribute("src", `./06_updown/ok.png`);
            msg.innerHTML = "you are right!";
            count++;
            numInput.style.display = 'none';
            bt.innerHTML = "restart";
            //initialize the flag to false
            flag = false;
        }
        else if (numInput.value>randN) {
            img.setAttribute("src", `./06_updown/down.png`);
            msg.innerHTML = "decrease your guess";
            count++;
            
        }
        else {
            img.setAttribute("src", `./06_updown/up.png`);
            msg.innerHTML = "increase your guess";
            count++;
        }

        trial.value = count; 
    });
});