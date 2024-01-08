const clock = document.querySelector("h2#clock")  //h2 태그에 있는 id clock


function getClock () {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();  // 들어오자마자 실행되게 하기
setInterval(getClock, 1000)
// setTimeout(sayHello, 2000)