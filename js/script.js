 const burgerNode = document.querySelector('.header-burger--js-open-sidebar'),
     closeSidebarNode = document.querySelector('.header-sidebar--js-close-sidebar'),
     sidebarNode = document.querySelector('.header-sidebar');
 closeSidebarNode.addEventListener('click', function() {
     sidebarNode.classList.add('header-sidebar--js-hidden')

 })

 burgerNode.addEventListener('click', function() {
     sidebarNode.classList.remove('header-sidebar--js-hidden')
 })
 $(document).ready(function() {
     $('.cosmetics__slider').slick({
         arrows: false,
         dots: true,
         slidesToShow: 4,
         speed: 1000,
         autoplay: true,
         centerMode: true,
     });

 });