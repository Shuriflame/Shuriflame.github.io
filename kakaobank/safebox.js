$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll === 0) {
            $(".header_fixed").addClass("on");
        } else {
            $(".header_fixed").removeClass("on");
        }
    });
});

list = document.querySelectorAll('.list');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', listClick);
}

function listClick(e) {
    e.preventDefault();
    
    if (this.classList.contains('on')) {
        this.classList.remove('on');
    } else {
        for (let i = 0; i < list.length; i++) {
            if (list[i].classList.contains('on')) {
                console.log('dljfskl');
                list[i].classList.remove('on');
                this.classList.add('on');
            } else {
                this.classList.add('on');
            }
        }
    }    
}