// FooD.js
const btn = document.getElementById("btn-1");
btn.addEventListener("click", fetchRandomRecipe);

async function fetchRandomRecipe() {
  try {
    const res  = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json();
    const meal = data.meals[0];

    document.getElementById("recipe-name").innerHTML  = meal.strMeal;
    document.getElementById("recipe-steps").innerHTML = meal.strInstructions;
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Try again.");
  }
}
