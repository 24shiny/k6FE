document.addEventListener("DOMContentLoaded",()=>{
    const bt = document.querySelector("button");
    const showNum = document.querySelector("#showNum");
    let nums = [];
    bt.addEventListener("click",()=>{
        nums = [];
        // another way to initialize a list
        nums.length=0;
        while(nums.length<7){
            let n = Math.floor(Math.random() * 46) + 1;
            // exclude overlapped values
            if(!nums.includes(n)) nums.push(n); 
            console.log(nums);
        }
        // let tags = '';
        // nums.map((v,i)=>{
        //     tags = tags + `<span id="sp${parseInt(v/10)}">${v}</span>`
        //     if(i===5){
        //         tags = tags + `<span>+</span>`
        //     }
        // });
        // showNum.innerHTML = tags;

        // let tags=[]; 
        tags = nums.map((v)=>{
            return `<span id="sp${parseInt(v/10)}">${v}</span>`;
        })
        tags.splice(6,0,`<span>+</span>`);
        let s = tags.toString().replaceAll(',',''); //list to String
        console.log(tags);
        console.log(s);
        showNum.innerHTML = s;
        //or directly, 
        // showNum.innerHTML = tags.toString().replaceAll(',','');
    });
});