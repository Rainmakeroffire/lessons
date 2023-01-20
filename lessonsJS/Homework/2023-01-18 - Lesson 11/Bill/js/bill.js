/* bill.js */

export default class Bill {
	constructor() {
		this.amounts = [];
	}

	addAmount(amountStr) {
		return this.amounts.push(Number(amountStr));
	}

	getTotal() {
		const sum = this.amounts.reduce(function (total, current) {
			return total + current
		}, 0);
		return sum;
	}

	getCount() {
		return this.amounts.length;
	}

	getAverage() {
		return this.getTotal() / this.getCount();
	}
}