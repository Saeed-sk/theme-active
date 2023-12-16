/* sticky header */
let lastScroll = 0;

function sticky_header() {
    let header_hegith = $('#navbar').innerHeight();
    let scroll = $(window).scrollTop();
    if (scroll > header_hegith && scroll > lastScroll) {
        $('#navbar').addClass('fixed');
    } else if (scroll < lastScroll) {
        $('#navbar').removeClass('fixed');
    }
    lastScroll = scroll;
}

$(() => {
    sticky_header();
});

window.onload = () => {
    sticky_header();
};

window.onscroll = () => {
    sticky_header();
};


window.onresize = (event) => {
    sticky_header();
};


//add animate on scroll
function fade_in() {
    let reveals = $('.animateItem');
    let items = $('.animateParent');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 0;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("slide-top");
            reveals[i].style.animationDelay=`${0.11 * i}s`
        } else {
            reveals[i].classList.remove("slide-top");
        }
    }
}

window.addEventListener("scroll", fade_in);

function scale_in() {
    let reveals = $('.image');
    let items = $('.image>img');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            items[i].classList.add("scale-up");
            items[i].style.animationDelay=`${0.11 * i}s`
        } else {
            items[i].classList.remove("scale-up");
        }
    }
}

window.addEventListener("scroll", scale_in);