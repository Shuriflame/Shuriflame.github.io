$(window).load(
   setTimeout(() => {
       $(".loading").fadeOut();
   }, 2500)
);

let mail = document.querySelector('.mail');
let mailPop = document.querySelector('aside > span');
let btn = document.querySelectorAll('main .btn');

console.log();

mail.addEventListener('click', clickWork);

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseenter', enterWork);
    btn[i].addEventListener('mouseleave', leaveWork);
}

function clickWork(e) {
    if (e.target.tagName !== 'A') return;
    if (mailPop.classList.contains('on')) {
        mailPop.classList.remove('on');
    } else {
        mailPop.classList.add('on')
    }
}

function enterWork(e) {
    console.log(e.target);
    if (e.target.classList.contains('kakaobank')) {
        e.target.firstChild.textContent = 'kakaobank';
    } else if (e.target.classList.contains('hyperconnect')) {
        e.target.firstChild.textContent = 'hyperconnect';
    } else if (e.target.classList.contains('naver')) {
        e.target.firstChild.textContent = 'naver';
    }
}

function leaveWork(e) {
    if (e.target.classList.contains('kakaobank')) {
        e.target.firstChild.textContent = "DIVIN'";
    } else if (e.target.classList.contains('hyperconnect')) {
        e.target.firstChild.textContent = "FLYIN'";
    } else if (e.target.classList.contains('naver')) {
        e.target.firstChild.textContent = "RIDIN'";
    }
}