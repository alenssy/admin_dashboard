import {ctx, myChart} from './chart.js';

let searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', () => {
    let searchInput = document.querySelector('#searchInput');

    searchInput.classList.toggle('show');
})

