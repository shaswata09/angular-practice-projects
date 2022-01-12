import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
