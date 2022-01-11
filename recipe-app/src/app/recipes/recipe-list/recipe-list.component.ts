import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i2.wp.com/pixahive.com/wp-content/uploads/2020/10/Spicy-veg-biryani-143389-pixahive.jpg?fit=778%2C518&ssl=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
