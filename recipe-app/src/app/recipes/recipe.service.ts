import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Biriani Recipe',
      'This is simply a test',
      'https://i2.wp.com/pixahive.com/wp-content/uploads/2020/10/Spicy-veg-biryani-143389-pixahive.jpg?fit=778%2C518&ssl=1'
    ),
    new Recipe(
      'Bharta with lefover watered rice',
      'This is simply another test',
      'https://img-global.cpcdn.com/recipes/59bafe2ee84262c5/751x532cq70/bharta-with-lefover-watered-rice-panta-bhat-recipe-main-photo.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
