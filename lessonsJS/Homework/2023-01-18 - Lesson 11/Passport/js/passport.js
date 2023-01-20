/* passport.js */
export default class Passport {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFirstName() {
		return this.firstName.toLowerCase();
	}

	getLastName() {
		return this.lastName.toUpperCase();
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	getInitials() {
		return (this.firstName !== "" || this.lastName !== "") ? `${(this.firstName !== "") ? this.firstName[0] + "." : ""}${(this.lastName !== "") ? `${this.lastName[0]}.` : ""}`.toUpperCase() : "";
	}

	getIsValidName() {
		return (this.firstName !== "" || this.lastName !== "") ? ((this.firstName !== "" && this.lastName !== "" && this.lastName.at(-1) !== ".") ? "Yes" : "No") : "";
	}
}