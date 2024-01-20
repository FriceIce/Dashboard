export default function dateAndTime(){
  const clockEl = document.querySelector('.clock');
  const dateEl = document.querySelector('.date');
  const dateTime = new Date()
  
  //Time
  const hour = (dateTime.getHours() < 10) ? '0' + dateTime.getHours() : dateTime.getHours();
  const minutes = (dateTime.getMinutes() < 10) ? '0' + dateTime.getMinutes() : dateTime.getMinutes();
  //Date
  const date = new Intl.DateTimeFormat('sv', {
    dateStyle: 'medium'
    // timeStyle: 'medium'
  }).format(dateTime)     

  //Show time and date
  clockEl.innerText = `Kl ${hour}:${minutes}`
  dateEl.innerText = date;
}
