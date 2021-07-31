const readMoreBtn = document.querySelector(".read__more");
const description = document.querySelector(".description");
readMoreBtn.addEventListener("click", (event) => {
  description.classList.toggle("show__text");
  if (readMoreBtn.innerText === "Read more") {
    readMoreBtn.innerText = "Read less";
  } else {
    readMoreBtn.innerText = "Read more";
  }
});
