const ShowRecipe = ({ ingredients }) => {
    return (
        <section className='text-base/8'>
        <h1 className="text-2xl font-bold">Pasta alla Caprese</h1>
        <p className="my-4">This is a fresh and simple dish inspired by the classic Caprese salad, featuring mozzarella, tomatoes, and basil.</p>
        
        <h2 className="font-semibold text-xl my-3">Ingredients:</h2>
        <ul className="pl-5 list-disc">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="font-semibold text-xl my-3">Instructions:</h2>
        <ol className="pl-5 list-decimal">
          <li><strong>Cook the pasta:</strong> Bring a large pot of salted water to a boil and cook the pasta according to the package instructions. Drain and set aside, reserving a little pasta water.</li>
          <li><strong>Prepare the tomatoes:</strong> While the pasta is cooking, chop the tomatoes into bite-sized pieces.</li>
          <li><strong>Combine ingredients:</strong> In a large bowl, toss the cooked pasta with olive oil, fresh tomatoes, and basil leaves.</li>
          <li><strong>Add mozzarella:</strong> Tear the mozzarella into small pieces and add it to the pasta, gently mixing it in so that it melts slightly with the warmth of the pasta.</li>
          <li><strong>Season:</strong> Drizzle with balsamic vinegar (if using) and season with salt and pepper to taste.</li>
          <li><strong>Serve:</strong> Garnish with fresh basil leaves, a sprinkle of Parmesan cheese (if desired), and a drizzle more of olive oil.</li>
          <li><strong>Enjoy:</strong> Serve immediately, and enjoy the fresh flavors of Italy!</li>
        </ol>
      </section>
    )
}

export default ShowRecipe;