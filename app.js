const searchInput = document.querySelector(".search input");
const categoryButtons = document.querySelectorAll(".chip");

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(item => item.classList.remove("on"));
    button.classList.add("on");
  });
});

if (searchInput) {
  searchInput.addEventListener("input", () => {
    console.log("আপনি খুঁজছেন:", searchInput.value);
  });
}

console.log("Street Food App চালু হয়েছে!");
