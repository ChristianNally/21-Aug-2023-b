import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = () => {

  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   // setCount(count + 1);
  //   setCount((prev) => { return prev + 1; });
  // }, [])

  // useEffect(() => {
  //   const url = 'https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((recipesFromAPI) => {
  //       console.log(recipesFromAPI);
  //       setRecipes(recipesFromAPI);
  //     });
  // }, []);

  useEffect(() => {
    // const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

    const recipePromise = axios.get(`/recipes`);
    const ingredientPromise = axios.get(`/ingredients`);

    const promises = [recipePromise, ingredientPromise];

    Promise.all(promises)
      .then((arrOfResults) => {
        console.log(arrOfResults);

        const recipeData = arrOfResults[0].data;
        const ingredientData = arrOfResults[1].data;

        setRecipes(recipeData);
        setIngredients(ingredientData);
      });

    // axios.get(url)
    //   .then((response) => {
    //     console.log(response);
    //     setRecipes(response.data);
    //   });
  }, []);

  const mapped = recipes.map((recipe) => {
    return <p key={recipe.id}>{recipe.title}</p>;
  });

  return (
    <div>
      <h2>Data Fetching!</h2>
      <h2>Num ingredients: {ingredients.length}</h2>
      { mapped }
    </div>
  );
};

export default DataFetching;
