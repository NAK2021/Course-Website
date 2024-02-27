// Test


// Drop Down menu 
document.addEventListener("DOMContentLoaded", function () {
    // Lấy các phần tử dropdown và dropdown_menu
    var Notidropdown = document.querySelector(".bellIcon");
    var NotidropdownMenu = document.querySelector(".notiBox_menu");
    var dropdown = document.querySelector(".profileAvatar");
    var dropdownMenu = document.querySelector(".dropdown_menu");

    // Hàm để ẩn dropdown menu
    function hideDropdownMenu(menu) {
        menu.style.display = "none";
    }

    // Thêm sự kiện click vào biểu tượng thông báo
    Notidropdown.addEventListener("click", function () {
        NotidropdownMenu.style.display = (NotidropdownMenu.style.display === "block") ? "none" : "block";
        // Ẩn dropdown menu của profile (nếu đang hiển thị)
        hideDropdownMenu(dropdownMenu);
    });

    // Thêm sự kiện click vào biểu tượng profile
    dropdown.addEventListener("click", function () {
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
        // Ẩn dropdown menu thông báo (nếu đang hiển thị)
        hideDropdownMenu(NotidropdownMenu);
    });
});


// Content Couse && Course_item
const slider = document.querySelector('.content_course');
let isDown = false;
let startX;
let scrollLeft ;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return ;
   e.preventDefault();
   const x = e.pageX - slider.offsetLeft;
   const walk = (x - startX) * 2;
   slider.scrollLeft = scrollLeft - walk;
});
// Swiper slider changes
let swiper = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    swiper.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
