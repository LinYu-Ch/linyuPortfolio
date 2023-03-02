const scrollRight = getId("pi5-right");
const scrollLeft = getId("pi5-left");
const scroller = document.querySelector("[data-scroller]");


scrollLeft.classList.add("faded");
let end = scroller.scrollWidth - scroller.clientWidth;

scrollRight.addEventListener("click", ()=> {
  if (scroller.scrollLeft != end) {
  scroller.scrollBy({
    left: scroller.clientWidth,
    behavior: 'smooth'
  });
  scrollLeft.classList.remove("faded");
} else if (scroller.scrollLeft == end) {
    scrollLeft.classList.add("faded");
    scroller.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }
});
scrollLeft.addEventListener("click", ()=> {
  scroller.scrollBy({
    left: scroller.clientWidth * -1,
    behavior: 'smooth'
  });
  if (scroller.scrollLeft == 0) {
    scrollLeft.classList.add("faded");
  }
});



const Buttons = document.querySelectorAll("[data-button]");
Buttons.forEach(button => {
  button.addEventListener("click", ()=> {
    const offset = button.dataset.Button === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-pages]");

    const activePage = slides.querySelector("[data-current]");
    let newIndex = [...slides.children].indexOf(activePage) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.current = true
    delete activePage.dataset.current
  });
});

toggleModal(getId("emote-modal"), getId("emotes"), getId("emote-close-button"));
toggleModal(getId("chibi-modal"), getId("chibi"), getId("chibi-close-button"));
toggleModal(getId("schedule-modal"), getId("schedules"), getId("schedule-close-button"));
toggleModal(getId("bust-modal"), getId("bust"), getId("bust-close-button"));
toggleModal(getId("overlay-modal"), getId("overlays"), getId("overlay-close-button"));
toggleModal(getId("half-body-modal"), getId("half-body"), getId("half-body-close-button"));
toggleModal(getId("char-design-modal"), getId("char-design"), getId("char-design-close-button"));
toggleModal(getId("full-body-modal"), getId("full-body"), getId("full-body-close-button"));
toggleModal(getId("ref-sheet-modal"), getId("ref-sheet"), getId("ref-sheet-close-button"));
toggleModal(getId("live-2d-modal"), getId("live-2d"), getId("live-2d-close-button"));
toggleModal(getId("live-2d-chibi-modal"), getId("live-2d-chibi"), getId("live-2d-chibi-close-button"));



function getId(id) {
    return document.getElementById(id);
}

function toggleModal(modal, openModal, closeModal){
openModal.addEventListener("click", () => {
    modal.showModal();
  });
  
  closeModal.addEventListener("click", () => {
    modal.close();
  });}
  
