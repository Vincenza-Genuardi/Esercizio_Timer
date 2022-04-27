
//--- GLOBAL VARs
const domHour=document.getElementById("hour");
const domMinute=document.getElementById("minute");
const domSecond=document.getElementById("second");
const domBar=document.getElementById("bar");


const domBtnStart=document.getElementById("btnStart");
const domBtnStop=document.getElementById("btnStop");
 
let second=0;
let minute=0;
let hour=0
let myInterval;
let barLength=1;

// --- FUNCTIONs


function startCounter(){
  myInterval =  setInterval(conteggioFunc, 1000);

  if (typeof(myInterval) != "undefined") { return ; }
 
  
}

function stopCounter(){
   clearInterval(myInterval)

  if (typeof(myInterval) == "undefined") { return ; }   
  
}

function conteggioFunc(){
  second++
  domSecond.innerText= second;
  
  if (second >= 60) {
    second=0
    minute++
    domMinute.innerText= minute;
  }else if(minute >= 60 ){
    minute = 0
    hour++;
    domHour.innerText= hour;}
  
 
   console.log("tic")
}


 
// --- MAIN
domBtnStart.addEventListener( 'click' , startCounter)
domBtnStop.addEventListener(  'click' , stopCounter)
