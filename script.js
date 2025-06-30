// script.js

function switchTab(tab) { document.querySelectorAll(".tabs button").forEach(btn => btn.classList.remove("active")); document.querySelector(.tabs button[onclick="switchTab('${tab}')"]).classList.add("active"); loadMyFiles(); }

function loadFiles(event) { const files = event.target.files; Array.from(files).forEach(file => { const reader = new FileReader(); reader.onload = () => { localStorage.setItem(file.name, reader.result); loadMyFiles(); }; reader.readAsDataURL(file); }); }

function loadMyFiles() { const list = document.getElementById("fileList"); list.innerHTML = ""; const keys = Object.keys(localStorage).filter(key => key.endsWith(".pdf"));

keys.forEach(key => { const li = document.createElement("li"); const span = document.createElement("span"); span.textContent = key;

const open = document.createElement("button");
open.textContent = "Open";
open.onclick = () => window.open(localStorage.getItem(key));

const del = document.createElement("button");
del.textContent = "Delete";
del.onclick = () => {
  localStorage.removeItem(key);
  loadMyFiles();
};

li.appendChild(span);
li.appendChild(open);
li.appendChild(del);
list.appendChild(li);

}); }

window.onload = loadMyFiles;
