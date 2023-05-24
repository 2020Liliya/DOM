const accordions = document.querySelectorAll('.content-container');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    accordion.classList.toggle('active');
  })
})

