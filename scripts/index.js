
const navMenu = document.getElementById('nav-menu');
const navButtons = document.querySelector('.nav-buttons');

navBtn();

function navBtn() {
    navMenu.addEventListener("click", () => {
        const isClicked = navMenu.getAttribute('data-pressed');
        if (!isClicked || isClicked == 'off') {
            navMenu.setAttribute('data-pressed', 'on');
            navButtons.setAttribute('data-pressed', 'on');
        } else {
            animateBack();
        }
        navMenu.disabled = true;
        let buttonTimer = setTimeout(() => {
            navMenu.disabled = false;
        }, 700)
    });
}

function animateBack() {
    navMenu.setAttribute('data-pressed', 'off');
    navButtons.setAttribute('data-pressed', 'off');
}
