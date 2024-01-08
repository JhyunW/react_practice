const h1 = document.querySelector(".hello h1")

function handleTitleClick() {
  console.log("title was clicked!")
  if (h1.style.color === "black") {
  h1.style.color = "white"
} else {
  h1.style.color = "black"
}
}

function handleMouseEnter() {
  console.log("두번 클릭하면 색이 바뀝니다.")
  h1.innerText = "누르면 색이 바뀝니당"
}

function handleMouseLeave() {
  console.log("마우스가 위치를 벗어났어요")
  h1.innerText = "이걸 안눌러?"
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy() {
  alert("복사하셨군요!")
}

function handleWindowOffline() {
  alert("인터넷연결x")
}
function handleWindowOnline() {
  alert("연결완료")
}

// 클릭이라는 이벤트가 일어나면 핸들타이틀 펑션을 실행.
h1.onclick = handleTitleClick
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", handleMouseLeave)


window.addEventListener("resize", handleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)
