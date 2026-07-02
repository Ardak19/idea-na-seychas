const ideas = [
  { category: "food", label: "Что приготовить", text: "Сделай пасту с томатным соусом, сыром и зеленью." },
  { category: "food", label: "Что приготовить", text: "Приготовь омлет с овощами и хрустящим тостом." },
  { category: "food", label: "Что приготовить", text: "Собери боул: рис, курица, огурец, кукуруза и соус." },
  { category: "movie", label: "Что посмотреть", text: "Посмотри легкую комедию, которую давно откладываешь." },
  { category: "movie", label: "Что посмотреть", text: "Выбери короткий документальный фильм про путешествия." },
  { category: "movie", label: "Что посмотреть", text: "Устрой вечер ностальгии и включи любимый фильм детства." },
  { category: "activity", label: "Чем заняться", text: "Сделай 20-минутную прогулку без телефона." },
  { category: "activity", label: "Чем заняться", text: "Разбери один маленький уголок дома: стол, полку или сумку." },
  { category: "activity", label: "Чем заняться", text: "Напиши список из 10 вещей, которые хочешь попробовать этим летом." },
];

const categoryButtons = document.querySelectorAll(".category");
const generateBtn = document.querySelector("#generateBtn");
const ideaType = document.querySelector("#ideaType");
const ideaText = document.querySelector("#ideaText");

let activeCategory = "all";
let lastIdeaText = ideaText.textContent;

function getFilteredIdeas() {
  if (activeCategory === "all") {
    return ideas;
  }

  return ideas.filter((idea) => idea.category === activeCategory);
}

function showRandomIdea() {
  const filteredIdeas = getFilteredIdeas();
  let randomIdea = filteredIdeas[Math.floor(Math.random() * filteredIdeas.length)];

  if (filteredIdeas.length > 1) {
    while (randomIdea.text === lastIdeaText) {
      randomIdea = filteredIdeas[Math.floor(Math.random() * filteredIdeas.length)];
    }
  }

  ideaType.textContent = randomIdea.label;
  ideaText.textContent = randomIdea.text;
  lastIdeaText = randomIdea.text;
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    showRandomIdea();
  });
});

generateBtn.addEventListener("click", showRandomIdea);
