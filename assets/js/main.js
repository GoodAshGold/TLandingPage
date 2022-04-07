$('.owl-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 35,
  navText: [
    "<img src='./assets/images/arrow-left.png'>",
    "<img src='./assets/images/arrow-right.png' >",
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
    },
    576: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: false,
      dots: true,
    },
    1400: {
      items: 5,
      nav: true,
      dots: false,
    },
  },
});
