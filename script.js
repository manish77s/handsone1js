const a = document.getElementById("text").innerHTML = "Text from the idname with the DOM"

const b =document.querySelector("h1").innerHTML = "This text will change by tagname !"

const c = document.querySelector(".box").innerHTML  = "change bye the classname|"

function textcng(){
    const hello= document.getElementById("change").innerText="Hello World"
}

function clickme(){
    const reptxt= document.getElementById("change2").innerText="Welcome to Elevation academy"
}
let clrcng = document.getElementById("cngcolor").style="color:red"


function myFunction(){
    const flexdirection =   document.getElementById("main").style.flexDirection = "column";
}



function clock(){
    let date = new Date();
    let hour=  date.getHours()
    let minute= date.getMinutes()
    let seconds= date.getSeconds()
    
    let timenow=document.getElementById("realtime").innerHTML =   hour + " : " + minute + " : " + seconds ;

  
}
setInterval(clock,1000);
