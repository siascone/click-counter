const Count = require('./scripts/count')

document.addEventListener('DOMContentLoaded', () => {
    // DOM elements to grap from page
    const count = document.getElementById('count');
    const clicker = document.getElementById('clicker');
    const reset = document.getElementById('reset');

    const count_obj = new Count();

    count.innerText = count_obj.value();

    clicker.addEventListener('click', e => {
        e.preventDefault();
        count_obj.increment();
        count.innerText = count_obj.value();
    });

    reset.addEventListener('click', e => {
        e.preventDefault();
        count_obj.reset();
        count.innerText = count_obj.value()
    });

})