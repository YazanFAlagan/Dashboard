const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme_toggler');
const addProductBtn = document.querySelector('.add_products');

// إظهار الشريط الجانبي عند النقر على زر القائمة
menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    sideMenu.style.display = 'block';
});

// إخفاء الشريط الجانبي عند النقر على زر الإغلاق
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    sideMenu.style.display = 'none';
});

// تبديل الثيم
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// إضافة عنصر جديد عند النقر على زر الإضافة
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

// إعادة تعيين حالة الشريط الجانبي عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sideMenu.classList.remove('active');
        sideMenu.style.display = 'block';
    } else {
        sideMenu.style.display = 'none';
    }
});