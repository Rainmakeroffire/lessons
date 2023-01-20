/* recipe.js */

// class definition
export default class Recipe {
	constructor(name, calories) {
		this.name = name;
		this.calories = calories;
	}

	isLowCaloric() {
		return this.calories <= 400;
	}

	isHighCaloric() {
		return this.calories >= 600;
	}
}