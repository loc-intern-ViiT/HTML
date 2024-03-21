

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