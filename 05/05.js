document.addEventListener("DOMContentLoaded", ()=> {
    const cell1 = document.querySelector("#unit1");
    const cell2 = document.querySelector("#unit2");
    const text1 = document.querySelector("#text1");
    const text2 = document.querySelector("#text2");
    const labels = document.querySelectorAll("label")

    cell1.addEventListener("change",()=>{
        swap(cell1,cell2, labels[0], labels[1],text1,text2);
    })

    cell2.addEventListener("change",()=>{
        swap(cell2,cell1, labels[1], labels[0],text1,text2);
    })

    text1.addEventListener("input",()=>{ 
        console.log(text1.value);
        console.log(cell1.value);
        if(cell1.value=="C") text2.value = parseFloat(text1.value)*1.8+32;
        else text2.value = (parseFloat(text1.value-32))/1.8;
    })
})


const swap = (cell1, cell2, lb1, lb2, txt1, txt2) => {

    if(cell1.value == "C") {
        cell2.value="F";
        lb1.innerHTML = "&deg;C";
        lb2.innerHTML = "&deg;F";}
    else {
        cell2.value="C";
        lb1.innerHTML = "&deg;F";
        lb2.innerHTML = "&deg;C";}
    
    txt1.value='';
    txt1.focus();
    txt2.value='';
    
    }