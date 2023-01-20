/* user.js */

// Class definition
export default class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	getInitials() {
		return `${this.firstName[0]}${this.lastName[0]}`.toUpperCase();
	}

	canVote() {
		return this.age >= 18;
	}
}