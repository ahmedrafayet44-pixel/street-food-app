const searchInput = document.querySelector(".search input");
const categoryButtons = document.querySelectorAll(".chip");

const foodContainer = document.createElement("section");
foodContainer.id = "food-list";
foodContainer.style.display = "grid";
foodContainer.style.gridTemplateColumns = "repeat(auto-fit,minmax(145px,1fr))";
foodContainer.style.gap = "12px";
foodContainer.style.marginTop = "22px";

document.querySelector(".wrap").appendChild(foodContainer);

let selectedCategory = "সব";
let searchText = "";

function showFoods() {
  const filteredFoods = foods.filter(food => {
    const categoryMatch =
      selectedCategory === "সব" ||
      food.category === selectedCategory;

    const searchMatch =
      food.name.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });

  foodContainer.innerHTML = "";

  if (filteredFoods.length === 0) {
    foodContainer.innerHTML = "<p>কোনো খাবার পাওয়া যায়নি।</p>";
    return;
  }

  filteredFoods.forEach(food => {
    const card = document.createElement("div");
    card.style.cssText =
      "background:white;padding:16px;border-radius:16px;text-align:center;border:1px solid #f3e3d0;";

    const emoji = document.createElement("div");
    emoji.style.fontSize = "35px";
    emoji.textContent = food.emoji;

    const name = document.createElement("h3");
    name.textContent = food.name;

    const description = document.createElement("p");
    description.textContent = food.description;

    const price = document.createElement("b");
    price.textContent = "৳" + food.price;

    card.append(emoji, name, description, price);
    foodContainer.appendChild(card);
  });
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(item => item.classList.remove("on"));
    button.classList.add("on");

    selectedCategory = button.textContent.replace(/^[^\s]+\s*/, "").trim();
    if (button.textContent.includes("সব")) selectedCategory = "সব";

    showFoods();
  });
});

searchInput.addEventListener("input", () => {
  searchText = searchInput.value;
  showFoods();
});

showFoods();
