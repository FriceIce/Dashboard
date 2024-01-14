export default function dateAndTime(){
  const clockEl = document.querySelector('.clock');
  const dateEl = document.querySelector('.date');
  
  const dateTime = new Date()
  //Time
  const hour = (dateTime.getHours() < 10) ? '0' + dateTime.getHours() : dateTime.getHours();
  const minutes = (dateTime.getMinutes() < 10) ? '0' + dateTime.getMinutes() : dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  //Date
  const date = dateTime.toLocaleDateString();
  //Show time
  clockEl.innerText = `Kl ${hour}:${minutes}`
  dateEl.innerText = date;
}