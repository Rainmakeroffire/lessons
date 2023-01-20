/* index.js */

// ### task. **Реализовать методы экземпляра**

// Реализуйте следующие методы экземпляра для класса `Recipe`:

// - `isLowCaloric`, который возвращает `true`, когда калорийность рецепта составляет 400 или ниже и `false` в противном случае.
// - `isHighCaloric`, который возвращает `true`, когда калорийность рецепта составляет 600 или выше и `false` в противном случае.

import Recipe from "./recipe.js";

// class usage
const pasta = new Recipe("Pasta", 700);
console.log(pasta.isHighCaloric());

const salad = new Recipe("Salad", 350);
console.log(salad.isLowCaloric());