const user = document.querySelector("#user");
const userName = prompt("Adınızı giriniz");
user.innerHTML = `${userName}`;
const time = document.querySelector("#time");
const newDate = new Date();
time.innerHTML = `${newDate}`;
