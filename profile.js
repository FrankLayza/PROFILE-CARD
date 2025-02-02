const hour = document.getElementById("hour");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const date = new Date();
hour.innerText = date.getHours();
mins.innerText = date.getMinutes();
secs.innerText = date.getSeconds();
