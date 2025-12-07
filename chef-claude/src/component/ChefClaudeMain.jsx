import {useState} from 'react'
import ShowRecipe from './ShowRecipe';
import IngredientList from './IngredientList';



const MainContent = () => {
  function formSubmit(event) {
    event.preventDefault();
    console.log("form Submitted...");
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const ingredient = formData.get('ingredient');
    setIngredient(prevIngre => [...prevIngre, ingredient]);
    ingridients.push(ingredient);
    console.log(ingredient, ingridients);
    formEl.reset()
  }

  function recipeShown() {
    setShowRecipe(prevShowRecipe => !prevShowRecipe)
  }

  const ingridients = [
    "Milk",
    "Butter",
    "Cheese",
    "Yogurt",
    "Eggs",
    "Heavy cream",
    "Sour cream",
  ];

  const [ingredient, setIngredient] = useState(ingridients);
  const [showRecipe, setShowRecipe] = useState(false);

  

  return (
    <section>
      <form
        className="bg-gray-50 py-1.5 px-2.5 flex items-center justify-between border-2 border-black my-8 gap-3.5"
        onSubmit={formSubmit}
      >
        <input
          className="inline-block flex-1 outline-none"
          type="text"
          placeholder="e.g Ingrident, pepper, seasoning..."
          aria-label="add ingridents"
          name="ingredient"
        />
        <button
          className="cursor-pointer inline-block bg-black text-white px-2 py-1 font-bold rounded-md"
        >
          + Add Ingrident
        </button>
      </form>

      {/* Render dynamic list of ingredients */}
      <IngredientList ingredients={ingredient} recipeShown={recipeShown} />

      {showRecipe && <ShowRecipe ingredients={ingredient} />}
    </section>
  );
};

export default MainContent;
