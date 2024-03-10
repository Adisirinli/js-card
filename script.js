let buttons=document.querySelectorAll(".button");
let divs=document.querySelectorAll(".city");

buttons.forEach(button=>{
   button.onclick=function(){

   divs.forEach(div=>{
    div.classList.add("d-none")
   })


    let dataId=button.getAttribute("data-id");
    let div=document.getElementById(dataId)
    div.classList.remove("d-none");
   }
   
})