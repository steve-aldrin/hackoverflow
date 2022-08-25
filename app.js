const countdown = () => {
  const countDate = new Date("September 23, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDay = Math.floor(gap / days);
  const textHour = Math.floor((gap % days) / hours);
  const textMinute = Math.floor((gap % hours) / minutes);
  const textSecond = Math.floor((gap % minutes) / seconds);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);
