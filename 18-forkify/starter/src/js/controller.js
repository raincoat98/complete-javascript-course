import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////

const controlRecipes = async function () {
  const id = window.location.hash.slice(1);

  if (!id) return;
  recipeView.renderSpinner();

  try {
    //Loading recipe
    await model.laodRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// window.addEventListener('hashchange', controlRecipes);
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
