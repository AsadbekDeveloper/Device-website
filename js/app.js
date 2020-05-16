
const slides = document.querySelectorAll('.slide');
const controller = document.querySelectorAll('#controller span');
const tags = document.querySelectorAll('#tag a');
const products = document.querySelectorAll('.tag');

controller.forEach((span , id) => {
  span.addEventListener('click', () => {
    controller.forEach(span => {
      span.classList.remove('curCont');
    })
    span.classList.add('curCont');
    slides.forEach(slide => {
      slide.className = 'slide';
    })
    slides[id].classList.add('current');
    slides[!id?2:id-1].classList.add('previous');
    slides[id>1?0:id+1].classList.add('next');
  });
});

tags.forEach((tag, id) => {
  tag.addEventListener('click', (event) => {
    event.preventDefault();
    tags.forEach(tag => {
      tag.classList.remove('current');
    });
    tag.classList.add('current');
    products.forEach(product => {
      product.classList.remove('current');
    });
    products[id].classList.add('current');
  })
})