/* $(document).ready(function () {
}); */

list = document.querySelectorAll('.list');
headerUl = document.querySelector('.gnb_menu');
headerFix = document.querySelector('.header_fixed');
htmlElem = document.querySelector('html');

window.addEventListener('scroll', function () {
    if (htmlElem.scrollTop === 0) {
        headerFix.classList.add("on");
    } else {
        headerFix.classList.remove("on");
    }
});
headerUl.addEventListener('mouseenter', headerEnter);
headerUl.addEventListener('mouseleave', headerLeave);


for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', listClick);
}

function headerEnter() {
    headerFix.classList.remove('on');
}

function headerLeave() {
    if (htmlElem.scrollTop === 0) {
        headerFix.classList.add('on');
    }
}

function listClick(e) {
    e.preventDefault();
    
    if (this.classList.contains('on')) {
        this.classList.remove('on');
    } else {
        for (let i = 0; i < list.length; i++) {
            if (list[i].classList.contains('on')) {
                list[i].classList.remove('on');
                this.classList.add('on');
            } else {
                this.classList.add('on');
            }
        }
    }    
}