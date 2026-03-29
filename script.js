let dark=false;

function toggleTheme(){
  document.body.classList.toggle("dark");
}

function addTask(){
  let input=document.getElementById("task");
  if(input.value.trim()==="") return;

  let li=document.createElement("li");
  li.innerHTML=`<span onclick="complete(this)">${input.value}</span> <button onclick="remove(this)">🗑</button>`;
  document.getElementById("list").appendChild(li);
  input.value="";
}

function complete(el){
  let li=el.parentElement;
  el.onclick=null;
  document.getElementById("done").appendChild(li);
  sprinkles();
}

function remove(btn){
  btn.parentElement.remove();
}

function clearDone(){
  document.getElementById("done").innerHTML="";
}

function sprinkles(){
  for(let i=0;i<20;i++){
    let s=document.createElement("span");
    s.style.left=Math.random()*window.innerWidth+"px";
    s.style.top="0px";
    s.style.background=`hsl(${Math.random()*360},100%,70%)`;
    document.getElementById("sprinkles").appendChild(s);
    setTimeout(()=>s.remove(),1000);
  }
}

function filterTasks(){
  let q=document.getElementById("search").value.toLowerCase();
  document.querySelectorAll("li").forEach(li=>{
    li.style.display=li.innerText.toLowerCase().includes(q)?"flex":"none";
  });
}