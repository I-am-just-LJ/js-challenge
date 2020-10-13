import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000,
  time = document.querySelector(".leftTime"),
  


function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900"),
  const date = new Date().toLocaleString("ko-KR", {timeZone: "Asia/Seoul"});
  
  const timeLeft = xmasDay - date;
 console.log(timeLeft);
}

function init() {
  time.innerHTML(getTime);
}

init();
