import Counter from './modules/counter.js';

const counterElements = document.querySelectorAll(`.counter`);

counterElements.forEach((element) => {
    const counter = new Counter(element);
    // counter.btnSubmit.disabled = false;
    // counter.btnReset.disabled = false;
    counter.init();
});



