import ShowRecipe from "./ShowRecipe";

const IngredientList = ({ ingredients, recipeShown }) => {
    return (
        <section>
        {ingredients.length > 0 && <h2 className='font-bold text-xl my-5'>Ingredient add:</h2>}
        <ul className='pl-4 list-disc'>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        {ingredients.length > 5 && <div className='flex items-center justify-around gap-3 bg-gray-300 py-3 text-base/8 my-10'>
          <section>
            <h3 className='font-extrabold text-2xl'>Are you ready for a recipe?</h3>
            <p className='text-gray-600'>Generate awsome recipe sugestion.</p>
          </section>
          <button
          className='bg-red-500 text-white font-bold px-3 py-1.5 rounded-md cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-red-800'
          onClick={recipeShown}>Get Recipe</button>
        </div>}
      </section>
    )
}

export default IngredientList;