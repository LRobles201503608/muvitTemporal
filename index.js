function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
  document.getElementById("opennav").style.display  = "none";
}

function closeNav(position) {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  location.href=position
}

function redirect_instagram(){
  window.open("https://instagram.com/muvit_travel?igshid=YmMyMTA2M2Y=","_blank")
}