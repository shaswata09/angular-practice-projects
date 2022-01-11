export class Ingredient {
  constructor(public name: string, public amount: number) {}
}

// The same code can be written in the above mentioned way. Its a typescript features.
// export class Ingredient {
//   public name: string | undefined;
//   public amount: number | undefined;
//   constructor(name: string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }
