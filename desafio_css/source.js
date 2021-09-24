function foo(e) {
  const article1 = document.getElementById("article1");
  const article2 = document.getElementById("article2");

  if (article1.style.maxWidth == "") {
    article1.style.maxWidth = "25%";
    article2.style.maxWidth = "75%";
  } else {
    article1.style.maxWidth = "";
    article2.style.maxWidth = "100%";
  }
}


function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
