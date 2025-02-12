const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme_toggler');
const addProductBtn = document.querySelector('.add_products');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

addProductBtn.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>New Product</td>
        <td>123</td>
        <td>Due</td>
        <td class="warning">Pending</td>
        <td class="primary">Details</td>
    `;
    document.querySelector('.recent_order tbody').appendChild(newRow);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sideMenu.classList.remove('active');
        sideMenu.style.display = 'block';
    } else {
        sideMenu.style.display = 'none';
    }
});