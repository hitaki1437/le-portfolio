const carouselIndex = document.querySelector('.carousel_index');
const carouselCount = document.querySelector('.carousel_count');

const myCarousel = new Carousel(document.querySelector('#carousel-one'), {
  transition: 'slide',
  preload: 3, // Smoother navigation when using lazy loaded images
  Dots: false,
  on: {
  
    refresh: (carousel) => {
      // Update counter
      if (carouselCount) {
        carouselCount.innerHTML = carousel.pages.length;
      }
    },
    change: (carousel, to, from) => {
      // Update counter
      if (carouselIndex) {
        carouselIndex.innerHTML = carousel.page + 1;
      }

      // Reset the Panzoom instance to its original scale and position
      carousel.slides[from]?.panzoom?.reset(0.15);
    },
  },
});

const carouselIndextwo = document.querySelector('.carousel_index_two');
const carouselCounttwo = document.querySelector('.carousel_count_two');

const myCarouseltwo = new Carousel(document.querySelector('#carousel-two'), {
  transition: 'slide',
  preload: 3, // Smoother navigation when using lazy loaded images
  Dots: false,
  on: {
  
    refresh: (carousel) => {
      // Update counter
      if (carouselCounttwo) {
        carouselCounttwo.innerHTML = carousel.pages.length;
      }
    },
    change: (carousel, to, from) => {
      // Update counter
      if (carouselIndextwo) {
        carouselIndextwo.innerHTML = carousel.page + 1;
      }

      // Reset the Panzoom instance to its original scale and position
      carousel.slides[from]?.panzoom?.reset(0.15);
    },
  },
});

const carouselIndexthree = document.querySelector('.carousel_index_three');
const carouselCountthree = document.querySelector('.carousel_count_three');

const myCarouselthree = new Carousel(document.querySelector('#carousel-three'), {
  transition: 'slide',
  preload: 3, // Smoother navigation when using lazy loaded images
  Dots: false,
  on: {
  
    refresh: (carousel) => {
      // Update counter
      if (carouselCountthree) {
        carouselCountthree.innerHTML = carousel.pages.length;
      }
    },
    change: (carousel, to, from) => {
      // Update counter
      if (carouselIndexthree) {
        carouselIndexthree.innerHTML = carousel.page + 1;
      }

      // Reset the Panzoom instance to its original scale and position
      carousel.slides[from]?.panzoom?.reset(0.15);
    },
  },
});

const carouselIndexfour= document.querySelector('.carousel_index_four');
const carouselCountfour = document.querySelector('.carousel_count_four');

const myCarouselfour = new Carousel(document.querySelector('#carousel-four'), {
  transition: 'slide',
  preload: 3, // Smoother navigation when using lazy loaded images
  Dots: false,
  on: {
  
    refresh: (carousel) => {
      // Update counter
      if (carouselCountfour) {
        carouselCountfour.innerHTML = carousel.pages.length;
      }
    },
    change: (carousel, to, from) => {
      // Update counter
      if (carouselIndexfour) {
        carouselIndexfour.innerHTML = carousel.page + 1;
      }

      // Reset the Panzoom instance to its original scale and position
      carousel.slides[from]?.panzoom?.reset(0.15);
    },
  },
});


Fancybox.bind('[data-fancybox="minimalism"]', {

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


Fancybox.bind('[data-fancybox="typography"]', {

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

Fancybox.bind('[data-fancybox="maximalism"]', {

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

Fancybox.bind('[data-fancybox="advertising"]', {

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
