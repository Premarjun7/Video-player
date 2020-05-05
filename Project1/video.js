const videoa=document.getElementById("nammu")
const play=document.getElementById("play")
const stopa=document.getElementById("stop")
const progressa=document.getElementById("newone")
const timething=document.getElementById("timetrap")
const forward=document.getElementById("forward")
const backward= document.getElementById("back")

function toggleVideo(){
 
    if(videoa.paused){
        videoa.play();
    }else{
        videoa.pause();
    }
}
function updateIcon(){
    if(videoa.paused){
     play.innerHTML='<i class="fa fa-play-circle"></i>';
    }else{
    play.innerHTML='<i class="fa fa-pause-circle"></i>';
    }
}
function updateProgress(){
    progressa.value=(videoa.currentTime/videoa.duration)*100;
  var mins=Math.floor(videoa.currentTime/60);
  mins="0"+String(mins);
    var secs=Math.floor(videoa.currentTime%60);
 secs=String(secs)
      console.log('my vslues',mins,'secs are ',secs);
   timething.innerHTML=mins+':'+secs;

   
}
function setVideoProgress(){
    
videoa.currentTime=(+progressa.value*videoa.duration)/100
}
function stopVideo(){
    videoa.pause();
    videoa.currentTime=0;
}
videoa.addEventListener('click',toggleVideo)
videoa.addEventListener('play',updateIcon)
videoa.addEventListener('pause',updateIcon)
videoa.addEventListener('timeupdate',updateProgress)

play.addEventListener('click', toggleVideo)
stopa.addEventListener('click', stopVideo)
progressa.addEventListener('click',setVideoProgress)



