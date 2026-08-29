const openBtn=document.getElementById("openBtn");
const surprise=document.getElementById("surprise");
const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");
const hearts=document.getElementById("hearts");
const confetti=document.getElementById("confetti");

function heartBurst(count=22){
  for(let i=0;i<count;i++){
    const el=document.createElement("span");
    el.className="heart";
    el.textContent=["♥","♡","❤","✨"][Math.floor(Math.random()*4)];
    el.style.left=Math.random()*100+"vw";
    el.style.bottom=(-10-Math.random()*20)+"px";
    el.style.animationDuration=(4+Math.random()*5)+"s";
    el.style.animationDelay=(Math.random()*1.5)+"s";
    el.style.fontSize=(12+Math.random()*18)+"px";
    hearts.appendChild(el);
    setTimeout(()=>el.remove(),10000);
  }
}
function confettiBurst(count=100){
  for(let i=0;i<count;i++){
    const el=document.createElement("i");
    el.className="conf";
    el.style.left=Math.random()*100+"vw";
    el.style.top=(-20-Math.random()*80)+"px";
    el.style.background=`hsl(${Math.random()*360},85%,70%)`;
    el.style.animationDelay=(Math.random()*1.2)+"s";
    el.style.transform=`rotate(${Math.random()*360}deg)`;
    confetti.appendChild(el);
    setTimeout(()=>el.remove(),4500);
  }
}
openBtn.addEventListener("click",()=>{
  surprise.classList.remove("hidden");
  surprise.scrollIntoView({behavior:"smooth"});
  heartBurst(35);
  confettiBurst(130);
  music.play().then(()=>musicBtn.textContent="❚❚").catch(()=>{});
});
musicBtn.addEventListener("click",()=>{
  if(music.paused){music.play();musicBtn.textContent="❚❚"}
  else{music.pause();musicBtn.textContent="♫"}
});
document.getElementById("wishBtn").addEventListener("click",()=>{
  confettiBurst(180);
  heartBurst(40);
  document.getElementById("wishMessage").textContent="✨ Wish sent to the universe... and my heart. ❤️";
});
setInterval(()=>heartBurst(2),2500);
