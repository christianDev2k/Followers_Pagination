/**
 * Input: API
 *
 * Process:
 * - Lấy data từ API
 * - Chia data vào mảng
 * - HTML data.
 * - HTML button
 * - Xử lí ấn button
 *
 * Output:
 * - HTML 10 trang mỗi trang 10 items
 * - HTML button tương ứng mỗi trang
 */
const pagContainer = document.querySelector('#pag-content');

import fetchData from './fetchData.js';
import paginate from './paginate.js';
import fetchDataFlowers from './fetchDataFlowers.js';
import displayButton from './displayButton.js';

let pages = [];
let index = 0;

const setUI = () => {
    fetchDataFlowers(pages[index]);
    displayButton(pagContainer, pages, index);
};

const init = async () => {
    const data = await fetchData();
    pages = paginate(data);
    setUI();
};

pagContainer.addEventListener('click', e => {
    if (e.target.classList.contains('btn-page')) {
        index = Number(e.target.dataset.index);
    } else if (e.target.classList.contains('btn-pre')) {
        index = index === 0 ? pages.length - 1 : index - 1;
    } else if (e.target.classList.contains('btn-next')) {
        index = index === pages.length - 1 ? 0 : index + 1;
    }
    setUI();
});

init();
