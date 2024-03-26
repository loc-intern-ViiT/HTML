

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