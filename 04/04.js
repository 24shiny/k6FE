//roll the dice
const roll = () => {
    const n = Math.floor(Math.random() * 6) + 1;
    const img = document.querySelector("img") ;
    img.setAttribute("src", `./diceImages/${n}.png`);
    console.log("click", n)
}

// compare two dices
document.addEventListener("DOMContentLoaded", ()=>{
  //button
  const compBtt = document.querySelector("#compBtts");
  compBtt.addEventListener("click", ()=>{
    compClick();

})
  })

const compClick = () => {
    const n = Math.floor(Math.random() * 6) + 1;
    const img = document.querySelector("#img") ;
    img.setAttribute("src", `./img/${n}.png`);
    console.log("click", n)

    const compImg = document.querySelectorAll(".competition");
    compImg.forEach((item) => {
      const num = Math.floor(Math.random() * 6) + 1;
      item.setAttribute("src",`./diceImages/${num}.png`);
      console(log,num);
  }

document.addEventListener("DOMContentLoaded", ()=>{
  //버튼을 가져오기
  // const bt1 = document.querySelector("div > button") ;
  // const bt1 = document.querySelector("button") ;
  const bt1 = document.querySelector("#bt1") ;

  //버튼 이벤트 달기
  bt1.addEventListener("click", ()=>{
    handleClick();
  });
}) ;

const handleClick = () => {
    const n = Math.floor(Math.random() * 6) + 1;
  
    const img = document.querySelector("#img") ;
    img.setAttribute("src", `./img/${n}.png`);
    console.log("click", n)
  }

// last game
// document.addEventListener("DOMContentLoaded", ()=>{
//     const imgs = document.querySelectorAll(".answer");
//     const bts = document.querySelectorAll(".options");
//     for(let bt of bts){
//         bt.addEventListener("click", ()=>{
//         console.log(bt.innerHTML(-1));

//         const nc = Math.floor(Math.random() * 6) + 1;
//         const n = parseInt(bt.innerHTML.slice(-1)) // String to Int

//         imgs[0].setAttribute("src", `./diceImages/${nc}.png`)
//         imgs[1].setAttribute("src", `./diceImages/${n}.png`)

//         if(nc===n) document.querySelector("#result").innerHTML = "correct";
//         else document.querySelector("#result").innerHTML = "wrong";
//     })
// }})


