import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string | undefined;
  public description: string | undefined;
  public imagePath: string | undefined;
  public ingredients: Ingredient[] | undefined;

  constructor(
    name: string,
    desc: string,
    imgPath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.ingredients = ingredients;
  }
}
