const productCarousel = new Carousel(
  document.getElementById('carousel-one'),
  {
    transition: 'slide',
    preload: 3, // Smoother navigation when using lazy loaded images
    Dots: true,


  },);
  

Fancybox.bind('[data-fancybox="gallery"]', {

    compact: false,
    idle: false,
    dragToClose: false,
    contentClick: () =>
      window.matchMedia('(max-width: 578px), (max-height: 578px)').matches
        ? 'toggleMax'
        : 'toggleCover',

    animated: false,
    showClass: false,
    hideClass: false,
    Hash: false,

    Thumbs: {
      showOnStart: true,
      type: "classic"
    },

    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ['close'],
      },
    },

    Carousel: {
      transition: 'fadeFast',
      preload: 3,
    },

    Images: {
      Panzoom: {
        zoom: false,
      },
  
      zoom: false,
  
      
    },
});
