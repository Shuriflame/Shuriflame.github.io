const htmlElem = document.querySelector('html');
const hamburger = document.querySelector('.hamburger_box');
const headerElem = document.querySelector('.header_wrap');
const $main = document.querySelector('main');
const $section = $main.querySelectorAll('main > section');
const $li = $main.querySelectorAll('main > nav > ul > li');
const $article = $section[0].querySelectorAll('article');

window.addEventListener('resize', windowCheck);
window.addEventListener('load', windowCheck);
$li.forEach(item => {
    item.addEventListener('click', clickMenu);
});

function windowCheck() {
    if (window.innerWidth <= 500) {
        window.removeEventListener('scroll', headerOn);
        hamburger.addEventListener('click', hamburgerOn);
    } else {
        hamburger.removeEventListener('click', hamburgerOn);
        window.addEventListener('scroll', headerOn);
        $section[0].classList.add('on');
    }
    articleSet($section[0]);
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

function articleSet(sec) {
    let articleElem = sec.querySelectorAll('article');
    if (window.innerWidth < 1839) {
        articleElem.forEach((item, index) => {
            item.style.transform = `translate(-50%, ${item.style.height * index}px)`;
        });
        let articleHeight = articleElem.clientHeight * articleElem.length;
        articleElem[articleElem.length - 1].style.transform = 'translate(-50%, 150px)';
        /* for (let i = 0; i < articleElem.length; i++) {
            articleElem[i].style.transform = 'translate(-50%, ' + (articleElem[i].clientHeight * i) + 'px)';
            var articleHeight = articleElem[i].clientHeight * articleElem.length;
        } */
        $section.forEach(sec => {
            if (sec.classList.contains('on')) {
                sec.style.height = `${articleHeight + 400}px`;
            }
        });
        /* for (let i = 0; i < $section.length; i++) {
            if (sec.classList.contains('on')) {
                sec.style.height = articleHeight + 400 + 'px';
            }
        } */
    } else {
        articleElem.forEach(item => {
            item.style.transform = 'translate(0)';
        });
    }
}

function clickMenu(e) {
    e.preventDefault();
    if (e.target.tagName !== 'A') return;

    $li.forEach(item => {
        item.classList.remove('on');
    });
    
    $section.forEach(item => {
        item.classList.remove('on');
        item.style.height = 0;
        if (item.className === e.target.parentNode.className) {
            item.classList.add('on');
            e.target.parentNode.classList.add('on');
        }
    });
}