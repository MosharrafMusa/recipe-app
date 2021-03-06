import React from 'react'
import RecipeList from './RecipeList'

function App() {
  return (
    <RecipeList recipes ={sampleRecipes}/>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'plain chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:"1. put salt on chicken\n 2.put chicken in oven\n 3. eat chicken",
    ingredients:[
      {
        id: 1,
        name:'chicken',
        amount: '3 lbs'
      },
      {
        id: 2,
        name:'salt',
        amount: '1 Tsp'
      }
    ]
  },
  {
    id: 2,
    name: 'plain pork',
    servings: 5,
    cookTime: '1:05',
    instructions:"1. put paprika on pork\n 2.put pork in oven\n 3. eat pork",
    ingredients:[
      {
        id: 1,
        name:'pork',
        amount: '3 lbs'
      },
      {
        id: 2,
        name:'paprika',
        amount: '2 Tsp'
      }
    ]
  }
]

export default App;
