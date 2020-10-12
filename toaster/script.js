const btn = document.getElementById("btn")
const container  = document.getElementById("container")

btn.addEventListener("click" ,() => {
  createNotifcation();
});

function createNotifcation(){
  const notif = document.createElement("div")

  notif.classList.add("toast")

  notif.innerHTML = 'notiify you mother fucker'

 container.appendChild(notif)

 setTimeout(()=>{
   notif.remove()
 },3000)
}