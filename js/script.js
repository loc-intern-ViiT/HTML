

window.addEventListener('scroll', function () {
    var headerTop = document.querySelector('.header-top');
    var headerMain = document.querySelector('.header-main');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        headerTop.style.display = 'none';
        headerMain.style.top = '0';
    } else {
        headerTop.style.display = 'block';
        headerMain.style.top = '';
    }
});


// xử lý sự kiện hover
function showHoverCard(card,cardHover) {
    card.classList.add('d-none');
    cardHover.classList.remove('d-none');
}
function hideHoverCard(card,cardHover) {
    card.classList.remove('d-none');
    cardHover.classList.add('d-none');
}


// sidebar cho di động
// Lấy tham chiếu đến các phần tử
const menuIcon = document.getElementById('toggle-icon');
const sidebarMenu = document.getElementById('sidebar-menu');
const closeBtn = document.querySelector('.toggle-close-icon');

// Xử lý sự kiện khi nhấp vào toggle-icon
menuIcon.addEventListener('click', function() {
    sidebarMenu.classList.remove('d-none');
});

// Xử lý sự kiện khi nhấp vào toggle-close-icon
closeBtn.addEventListener('click', function() {
    sidebarMenu.classList.add('d-none');
});

// xử lý chuyển động cho header top
const textSlides = document.querySelectorAll('.dynamic-text');
let currentSlideIndex = 0;
function showNextSlide() {
    textSlides[currentSlideIndex].classList.add('d-none'); 
    currentSlideIndex = (currentSlideIndex + 1) % textSlides.length;
    textSlides[currentSlideIndex].classList.remove('d-none');
}
setInterval(showNextSlide, 3000);

// xử lý dropdown
function toggleDropdown(elementId, iconId) {
    const element = document.getElementById(elementId);
    const icon = document.getElementById(iconId);
    let isDropdownOpen = !element.classList.contains('d-none');
  
    element.classList.toggle('d-none');
    icon.classList.toggle('rotate180');
  
    isDropdownOpen = !isDropdownOpen;
}
  
//---sidebar---
// item women
const womenDropdownIcon = document.getElementById('women-dropdown-icon');
womenDropdownIcon.addEventListener('click', function() {
    toggleDropdown('women-dropdown', 'women-dropdown-icon');
});

// item men
const menDropdownIcon = document.getElementById('men-dropdown-icon');
menDropdownIcon.addEventListener('click', function() {
    toggleDropdown('men-dropdown', 'men-dropdown-icon');
});

// item menu
const newInDropdownIcon = document.getElementById('new-in-dropdown-icon');
newInDropdownIcon.addEventListener('click', function() {
    toggleDropdown('new-in-dropdown-icon', 'new-in-dropdown-icon');
});
  

//---footer---
// text shoes the bear
const textStbIcon = document.getElementById('text-shoe-the-bear-icon');
textStbIcon.addEventListener('click', function() {
    toggleDropdown('text-shoe-the-bear', 'text-shoe-the-bear-icon');
});
  
// text infomation
const textInfoIcon = document.getElementById('text-infomation-icon');
textInfoIcon.addEventListener('click', function() {
    toggleDropdown('text-infomation', 'text-infomation-icon');
});
  
// text contact
const textContactIcon = document.getElementById('text-contact-icon');
textContactIcon.addEventListener('click', function() {
    toggleDropdown('text-contact', 'text-contact-icon');
});
  
// text sosicals
const textSosicalsIcon = document.getElementById('text-sosicals-icon');
textSosicalsIcon.addEventListener('click', function() {
    toggleDropdown('text-sosicals', 'text-sosicals-icon');
});
  
  // text sign up email
  const textSignUpIcon = document.getElementById('text-sign-up-Icon');
  textSignUpIcon.addEventListener('click', function() {
    toggleDropdown('text-sign-up', 'text-sign-up-Icon');
  });

