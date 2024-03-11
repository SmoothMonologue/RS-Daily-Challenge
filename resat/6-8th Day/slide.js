/* 참고 문헌
https://velog.io/@grinding_hannah/JavaScript-자바스크립트로-캐러셀Carousel-구현하기
*/

const container = document.querySelector(".container"),
prevBtn = document.querySelector(".prev"),
nextBtn = document.querySelector(".next")

prevBtn.addEventListener('click', translateContainer.bind(this, 1));
nextBtn.addEventListener('click', translateContainer.bind(this, -1));

function translateContainer(direction) {
    const selectedBtn = (direction === 1) ? 'prev' : 'next';

    container.style.transitionDuration = '500ms';
    container.style.transform = `translateX(${direction * 30}rem)`;
    container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
    container.removeAttribute('style');
    (selectedBtn === 'prev') ? container.insertBefore(container.lastElementChild, container.firstElementChild): container.appendChild(container.firstElementChild);
  }