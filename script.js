// CHANGE THIS to a private password you both know.
const SECRET = "moonlight123";

function unlock(){
  const entered = document.getElementById("password").value;
  if(entered === SECRET){
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("site").classList.remove("hidden");
  } else {
    document.getElementById("error").textContent = "Wrong password 😭 Try again";
  }
}

document.getElementById("password").addEventListener("keydown", e => {
  if(e.key === "Enter") unlock();
});

function showMessage(){
  document.getElementById("finalMessage").classList.remove("hidden");
}
