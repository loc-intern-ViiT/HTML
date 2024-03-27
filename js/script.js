

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


// card women
// 1
function showHoverCard1(card) {
    var hoverCard = card.querySelector('.card-1-hover');
    var card1 = card.querySelector('.card-1');
    hoverCard.classList.remove('d-none');
    card1.classList.add('d-none');
}

function hideHoverCard1(card) {
    var hoverCard = card.querySelector('.card-1-hover');
    var card1 = card.querySelector('.card-1');
    hoverCard.classList.add('d-none');
    card1.classList.remove('d-none');
}
// 2
function showHoverCard2(card) {
    var hoverCard = card.querySelector('.card-2-hover');
    var card2 = card.querySelector('.card-2');
    hoverCard.classList.remove('d-none');
    card2.classList.add('d-none');
}
function hideHoverCard2(card) {
    var hoverCard = card.querySelector('.card-2-hover');
    var card2 = card.querySelector('.card-2');
    hoverCard.classList.add('d-none');
    card2.classList.remove('d-none');
}
// 3
function showHoverCard3(card) {
    var hoverCard = card.querySelector('.card-3-hover');
    var card3 = card.querySelector('.card-3');
    hoverCard.classList.remove('d-none');
    card3.classList.add('d-none');
}
function hideHoverCard3(card) {
    var hoverCard = card.querySelector('.card-3-hover');
    var card3 = card.querySelector('.card-3');
    hoverCard.classList.add('d-none');
    card3.classList.remove('d-none');
}
// 4
function showHoverCard4(card) {
    var hoverCard = card.querySelector('.card-4-hover');
    var card4 = card.querySelector('.card-4');
    hoverCard.classList.remove('d-none');
    card4.classList.add('d-none');
}
function hideHoverCard4(card) {
    var hoverCard = card.querySelector('.card-4-hover');
    var card4 = card.querySelector('.card-4');
    hoverCard.classList.add('d-none');
    card4.classList.remove('d-none');
}
// 5
function showHoverCard5(card) {
    var hoverCard = card.querySelector('.card-5-hover');
    var card5 = card.querySelector('.card-5');
    hoverCard.classList.remove('d-none');
    card5.classList.add('d-none');
}
function hideHoverCard5(card) {
    var hoverCard = card.querySelector('.card-5-hover');
    var card5 = card.querySelector('.card-5');
    hoverCard.classList.add('d-none');
    card5.classList.remove('d-none');
}


// card men
// 6
function showHoverCard6(card) {
    var hoverCard = card.querySelector('.card-6-hover');
    var card = card.querySelector('.card-6');
    hoverCard.classList.remove('d-none');
    card.classList.add('d-none');
}
function hideHoverCard6(card) {
    var hoverCard = card.querySelector('.card-6-hover');
    var card = card.querySelector('.card-6');
    hoverCard.classList.add('d-none');
    card.classList.remove('d-none');
}

// 7
function showHoverCard7(card) {
    var hoverCard = card.querySelector('.card-7-hover');
    var card = card.querySelector('.card-7');
    hoverCard.classList.remove('d-none');
    card.classList.add('d-none');
}
function hideHoverCard7(card) {
    var hoverCard = card.querySelector('.card-7-hover');
    var card = card.querySelector('.card-7');
    hoverCard.classList.add('d-none');
    card.classList.remove('d-none');
}

// 8
function showHoverCard8(card) {
    var hoverCard = card.querySelector('.card-8-hover');
    var card = card.querySelector('.card-8');
    hoverCard.classList.remove('d-none');
    card.classList.add('d-none');
}
function hideHoverCard8(card) {
    var hoverCard = card.querySelector('.card-8-hover');
    var card = card.querySelector('.card-8');
    hoverCard.classList.add('d-none');
    card.classList.remove('d-none');
}

// 9
function showHoverCard9(card) {
    var hoverCard = card.querySelector('.card-9-hover');
    var card = card.querySelector('.card-9');
    hoverCard.classList.remove('d-none');
    card.classList.add('d-none');
}
function hideHoverCard9(card) {
    var hoverCard = card.querySelector('.card-9-hover');
    var card = card.querySelector('.card-9');
    hoverCard.classList.add('d-none');
    card.classList.remove('d-none');
}

// 10
function showHoverCard10(card) {
    var hoverCard = card.querySelector('.card-10-hover');
    var card = card.querySelector('.card-10');
    hoverCard.classList.remove('d-none');
    card.classList.add('d-none');
}
function hideHoverCard10(card) {
    var hoverCard = card.querySelector('.card-10-hover');
    var card = card.querySelector('.card-10');
    hoverCard.classList.add('d-none');
    card.classList.remove('d-none');
}

// sidebar cho di động
// Lấy tham chiếu đến các phần tử
const menuIcon = document.getElementById('menu-icon');
const sidebarMenu = document.getElementById('sidebar-menu');
const closeBtn = document.querySelector('.close-btn');

// Xử lý sự kiện khi nhấp vào nút menu-icon
menuIcon.addEventListener('click', function() {
    sidebarMenu.classList.remove('d-none');
});

// Xử lý sự kiện khi nhấp vào nút close-btn
closeBtn.addEventListener('click', function() {
    sidebarMenu.classList.add('d-none');
});


// xử lý sự kiện vuốt chuyển đổi slide cho desktop
const textSlides = document.querySelectorAll('.text-slide-show');

let currentSlideIndex = 0;

function showNextSlide() {
    textSlides[currentSlideIndex].classList.add('d-none'); //thêm d-none cho slide hiện tại
    currentSlideIndex = (currentSlideIndex + 1) % textSlides.length; // tăng slide thêm 1 chia cho tổng số slide 
    textSlides[currentSlideIndex].classList.remove('d-none'); // loại bỏ d-none cho slide vừa tăng
}

setInterval(showNextSlide, 3000); // Chuyển slide sau mỗi 3 giây (3000 milliseconds)

// thay đổi dấu mũi tên khi bấm dropdown

const iconDropdown = document.getElementById('icon-dropdown');
const dropdownToggle = document.querySelector('.dropdown');

dropdownToggle.addEventListener('click', function() {
    iconDropdown.classList.toggle('rotate180');
});

// dropdown cho thanh sidebar 
const womenDropdown = document.getElementById('women-dropdown');
const womenDropdownIcon = document.getElementById('women-dropdown-icon');
const menDropdown = document.getElementById('men-dropdown');
const menDropdownIcon = document.getElementById('men-dropdown-icon');
const newInDropdown = document.getElementById('new-in-dropdown');
const newInDropdownIcon = document.getElementById('new-in-dropdown-icon');
let isDropdownOpenWomen = false;
let isDropdownOpenMen = false;
let isDropdownOpenNew = false;

//xử lý bấm vào icon women
womenDropdownIcon.addEventListener('click', function() {
    if (isDropdownOpenWomen) {
        womenDropdown.classList.add('d-none');
        womenDropdownIcon.classList.toggle('rotate180');
    } else {
        womenDropdown.classList.remove('d-none');
        womenDropdownIcon.classList.toggle('rotate180');
    }
    
    isDropdownOpenWomen = !isDropdownOpenWomen;
});

//xử lý bấm vào icon men
menDropdownIcon.addEventListener('click', function() {
    if (isDropdownOpenMen) {
        menDropdown.classList.add('d-none');
        menDropdownIcon.classList.toggle('rotate180');
    } else {
        menDropdown.classList.remove('d-none');
        menDropdownIcon.classList.toggle('rotate180');
    }
    
    isDropdownOpenMen = !isDropdownOpenMen;
});

//xử lý bấm vào icon new in
newInDropdownIcon.addEventListener('click', function() {
    if (isDropdownOpenNew) {
        newInDropdown.classList.add('d-none');
        newInDropdownIcon.classList.toggle('rotate180');
    } else {
        newInDropdown.classList.remove('d-none');
        newInDropdownIcon.classList.toggle('rotate180');
    }
    
    isDropdownOpenNew = !isDropdownOpenNew;
});


// xử lý dropdown footer
// text shoes the bear
const textStb = document.getElementById('text-shoe-the-bear');
const textStbIcon = document.getElementById('text-shoe-the-bear-icon');
let isDropdownOpenSTB = false;

textStbIcon.addEventListener('click', function() {
    if (isDropdownOpenSTB) {
        textStb.classList.add('d-none');
        textStbIcon.classList.toggle('rotate180');
    } else {
        textStb.classList.remove('d-none');
        textStbIcon.classList.toggle('rotate180');
    }
    isDropdownOpenSTB = !isDropdownOpenSTB;
});

// text infomation
const textInfo = document.getElementById('text-infomation');
const textInfoIcon = document.getElementById('text-infomation-icon');
let isDropdownOpenInfo = false;

textInfoIcon.addEventListener('click', function() {
    if (isDropdownOpenInfo) {
        textInfo.classList.add('d-none');
        textInfoIcon.classList.toggle('rotate180');
    } else {
        textInfo.classList.remove('d-none');
        textInfoIcon.classList.toggle('rotate180');
    }
    isDropdownOpenInfo = !isDropdownOpenInfo;
});

// text contact
const textContact = document.getElementById('text-contact');
const textContactIcon = document.getElementById('text-contact-icon');
let isDropdownOpenContact = false;

textContactIcon.addEventListener('click', function() {
    if (isDropdownOpenContact) {
        textContact.classList.add('d-none');
        textContactIcon.classList.toggle('rotate180');
    } else {
        textContact.classList.remove('d-none');
        textContactIcon.classList.toggle('rotate180');
    }
    isDropdownOpenContact = !isDropdownOpenContact;
});

// text sosicals
const textSosicals = document.getElementById('text-sosicals');
const textSosicalsIcon = document.getElementById('text-sosicals-icon');
let isDropdownOpenSosicals = false;

textSosicalsIcon.addEventListener('click', function() {
    if (isDropdownOpenSosicals) {
        textSosicals.classList.add('d-none');
        textSosicalsIcon.classList.toggle('rotate180');
    } else {
        textSosicals.classList.remove('d-none');
        textSosicalsIcon.classList.toggle('rotate180');
    }
    isDropdownOpenSosicals = !isDropdownOpenSosicals;
});

// text sign up email
const textSignUp = document.getElementById('text-sign-up');
const textSignUpIcon = document.getElementById('text-sign-up-Icon');
let isDropdownOpenSignUp = false;

textSignUpIcon.addEventListener('click', function() {
    if (isDropdownOpenSignUp) {
        textSignUp.classList.add('d-none');
        textSignUpIcon.classList.toggle('rotate180');
    } else {
        textSignUp.classList.remove('d-none');
        textSignUpIcon.classList.toggle('rotate180');
    }
    isDropdownOpenSignUp = !isDropdownOpenSignUp;
});


