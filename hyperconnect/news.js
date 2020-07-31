const htmlElem = document.querySelector('html');
const hamburger = document.querySelector('.hamburger_box');
const headerElem = document.querySelector('.header_wrap');
const $main = document.querySelector('main');
const $section = $main.querySelectorAll('main > section');
const $article = $section[0].querySelectorAll('article');

window.addEventListener('resize', windowCheck);
window.addEventListener('load', windowCheck);
$main.addEventListener('click', clickMenu);

function windowCheck() {
    if (window.innerWidth <= 500) {
        window.removeEventListener('scroll', headerOn);
        hamburger.addEventListener('click', hamburgerOn);
    } else {
        hamburger.removeEventListener('click', hamburgerOn);
        window.addEventListener('scroll', headerOn);
        $section[0].classList.add('on');
    }
    articleSet();
}

function headerOn() {
    var scroll = htmlElem.scrollTop;
    if (scroll > 0) {
        headerElem.style.backgroundColor = '#fff';
    } else {
        headerElem.style.background = '';
    }
}

function hamburgerOn() {
    if (headerElem.classList.contains('on')) {
        headerElem.classList.remove('on');
    } else {
        headerElem.classList.add('on');
    }
}

function articleSet() {
    if (window.innerWidth < 1839) {
        for (let i = 0; i < $article.length; i++) {
            $article[i].style.transform = 'translate(-50%, ' + ($article[i].clientHeight * ($article.length - (i + 1))) + 'px)';
            var articleHeight = $article[i].clientHeight * $article.length;
        }
        $article[$article.length-1].style.transform = 'translate(-50%, 150px)';
        for (let i = 0; i < $section.length; i++) {
            if ($section[i].classList.contains('on')) {
                $section[i].style.height = articleHeight + 400 + 'px';
            }
        }
    } else {
        for (let i = 0; i < $article.length; i++) {
            $article[i].style.transform = 'translate(0)';
        }
    }
}

function clickMenu(e) {
    e.preventDefault();
    if (e.target.parentNode.parentNode.tagName !== 'ASIDE') return;
    $section.forEach(sec => {
        sec.classList.remove('on');
        e.target.parentNode.classList.remove('on');
        if (e.target.parentNode.className === sec.className) {
            e.target.parentNode.classList.add('on');
            sec.classList.add('on');
        }
    });
}