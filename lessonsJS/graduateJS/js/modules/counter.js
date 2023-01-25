import Result from './result.js';

const PhysicalActivityRatio = {
    MIN: 1.2,
    LOW: 1.375,
    MEDIUM: 1.55,
    HIGH: 1.725,
    MAX: 1.9,
};

const CaloriesFormulaFactor = {
    AGE: 5,
    WEIGHT: 10,
    HEIGHT: 6.25,
};

const CaloriesFormulaConstant = {
    MALE: -5,
    FEMALE: 161
};

const CaloriesMinMaxRatio = {
    MIN: 0.85,
    MAX: 1.15
};

export default class Counter {
    constructor(element) {
        this.element = element;
        this.btnReset = element.querySelector(`.form__reset-button`);
        this.btnSubmit = element.querySelector(`.form__submit-button`);
        this.form = element.querySelector(`.form`);

        this.age = element.querySelector(`#age`);
        this.weight = element.querySelector(`#weight`);
        this.height = element.querySelector(`#height`);
    }

    _onFormInput() {
        this.ageInt = Number.parseInt(this.age.value, 10);
        this.heightInt = Number.parseInt(this.height.value, 10);
        this.weightInt = Number.parseInt(this.weight.value, 10);

        this.btnReset.disabled = !(this.ageInt || this.heightInt || this.weightInt);
        this.btnSubmit.disabled = !this.form.checkValidity();
    }

    _onFormReset() {
        this.element.querySelector(`#gender-male`).checked = true;
        this.element.querySelector(`#age`).value = "";
        this.element.querySelector(`#age`).placeholder ="0";
        this.element.querySelector(`#weight`).value = "";
        this.element.querySelector(`#weight`).placeholder ="0";
        this.element.querySelector(`#height`).value = "";
        this.element.querySelector(`#height`).placeholder ="0";
        this.element.querySelector(`#activity-minimal`).checked = true;
        this.btnReset.disabled = true;
        this.btnSubmit.disabled = true;
        if (this.showResult) this.showResult.hide();
    }

    _onFormSubmit(evt) {
        this.genderKey = evt.get('gender').toUpperCase();
        this.activityKey = evt.get('activity').toUpperCase();

        this.calories = {
            NORM: this.getCaloriesNorm(),
            MIN: this.getCaloriesMin(),
            MAX: this.getCaloriesMax(),
        };

        this.showResult = new Result(this.element);
        this.showResult.show(this.calories);
    }

    init() {
        this.element.addEventListener("keyup", (event) => {
            event.preventDefault();
            this._onFormInput();
        });
        this.btnReset.addEventListener("click", (event) => {
            event.preventDefault();
            this._onFormReset();
        });
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.formData = new FormData(this.form);
            this._onFormSubmit(this.formData);
        });
    }

    getCaloriesNorm() {
        return ((CaloriesFormulaFactor['WEIGHT'] * this.weightInt + CaloriesFormulaFactor['HEIGHT'] * this.heightInt - CaloriesFormulaFactor['AGE'] * this.ageInt - CaloriesFormulaConstant[this.genderKey]) * PhysicalActivityRatio[this.activityKey]);
    }

    getCaloriesMin() {
        return this.getCaloriesNorm() * CaloriesMinMaxRatio['MIN'];
    }

    getCaloriesMax() {
        return this.getCaloriesNorm() * CaloriesMinMaxRatio['MAX'];
    }
}