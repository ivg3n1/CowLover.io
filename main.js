function PopUp() {
  var Btn = document.getElementById("popUp");
  Btn.className = "popUp";
  console.log("hello");
  var body = document.getElementById("body");
  body.className = "unscrollable";
  window.scrollTo(0, 0);
}
