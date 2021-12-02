const clock = document.getElementById('clock');
const color = document.getElementById('color');

const toggleColorClock = () => {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  if (h.length < 2) {
    h = `0${h}`;
  }
  if (m.length < 2) {
    m = `0${m}`;
  }
  if (s.length < 2) {
    s = `0${s}`;
  }

  const clockString = `${h}-${m}-${s}`;
  const colorString = `#${h}${m}${s}`;

  clock.textContent = clockString;
  color.textContent = colorString;

  document.body.style.background = colorString;

  requestAnimationFrame(toggleColorClock);
};

requestAnimationFrame(toggleColorClock);
