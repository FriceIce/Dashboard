export default function dateAndTime(){
  const clockEl = document.querySelector('.clock');
  const dateEl = document.querySelector('.date');
  const dateTime = new Date();

  // Format time and date
  const time = new Intl.DateTimeFormat('sv', {timeStyle: 'short'}).format(dateTime);
  const date = new Intl.DateTimeFormat('sv', {dateStyle: 'long'}).format(dateTime);     

  //Render time and date
  clockEl.innerText = `Kl ${time}`;
  dateEl.innerText = date;
}

