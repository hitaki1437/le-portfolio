Fancybox.bind('[data-fancybox="single"]', {
  groupAttr: false,
  hideScrollbar: true,
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

  Images: {
    initialSize: "fit",
    Panzoom: {
      zoom: false,
    },

    zoom: false,

    
  },
  
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ['close'],
    },
  },

  
});    

Fancybox.bind('[data-fancybox="gallery"]', {
  hideScrollbar: true,
  compact: false,
  
  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

  Images: {
    initialSize: "fit",
    Panzoom: {
      zoom: false,
    },

    zoom: false,

    
  },


  Toolbar: {
    display: {
      left: [],
      middle : ["prev", "infobar", "next"],
      right: [
        "thumbs",
        "close",
  
      ],
    }
  }

});

Fancybox.bind('[data-fancybox="illustration"]', {
  hideScrollbar: true,
  compact: false,
  
  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

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

    Toolbar: {
      display: {
        left: [],
        middle: ["prev", "infobar", "next"],
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

Fancybox.bind('[data-fancybox="logo"]', {
  hideScrollbar: true,
  compact: false,
  
  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

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

    Toolbar: {
      display: {
        left: [],
        middle: ["prev", "infobar", "next"],
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


Fancybox.bind('[data-fancybox="mockups"]', {
  hideScrollbar: true,
  compact: false,

  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

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

  Toolbar: {
    display: {
      left: [],
      middle: ["prev", "infobar", "next"],
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

Fancybox.bind('[data-fancybox="imagery"]', {
  hideScrollbar: true,
  compact: false,
  
  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

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

  Toolbar: {
    display: {
      left: [],
      middle: ["prev", "infobar", "next"],
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

Fancybox.bind('[data-fancybox="bg-pattern-circle"]', {
  hideScrollbar: true,
  compact: false,

  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

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

  Toolbar: {
    display: {
      left: [],
      middle: ["prev", "infobar", "next"],
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

Fancybox.bind('[data-fancybox="bg-pattern-shape-outline"]', {
  hideScrollbar: true,
  compact: false,

  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

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

  Toolbar: {
    display: {
      left: [],
      middle: ["prev", "infobar", "next"],
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

Fancybox.bind('[data-fancybox="bg-pattern-typeface"]', {
  hideScrollbar: true,
  compact: false,

  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

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

  Toolbar: {
    display: {
      left: [],
      middle: ["prev", "infobar", "next"],
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

  hideScrollbar: true,
  compact: false,

  Thumbs: {
    showOnStart: true,
    
    type: "classic"
  },

  Images: {
    initialSize: "fit",
    Panzoom: {
      zoom: false,
    },

    zoom: false,

    
  },

  Toolbar: {
    display: {
      left: [],
      middle : ["prev", "infobar", "next"],
      right: [
        "thumbs",
        "close",
  
      ],
    }
  }

});

Fancybox.bind('[data-fancybox="minimalism"]', {

  hideScrollbar: true,
  compact: false,

  Thumbs: {
    showOnStart: true,
    
    type: "classic"
  },

  Images: {
    initialSize: "fit",
    Panzoom: {
      zoom: false,
    },

    zoom: false,

    
  },

  Toolbar: {
    display: {
      left: [],
      middle : ["prev", "infobar", "next"],
      right: [
        "thumbs",
        "close",
  
      ],
    }
  }

});

Fancybox.bind('[data-fancybox="maximalism"]', {

  hideScrollbar: true,
  compact: false,
  
  Thumbs: {
    showOnStart: true,
    type: "classic"
  },

  Images: {
    initialSize: "fit",
    Panzoom: {
      zoom: false,
    },

    zoom: false,

    
  },

  Toolbar: {
    display: {
      left: [],
      middle : ["prev", "infobar", "next"],
      right: [
        "thumbs",
        "close",
  
      ],
    }
  }

});


Fancybox.bind('[data-fancybox="marketing"]', {

  hideScrollbar: true,
  compact: false,

  Thumbs: {
    showOnStart: true,
    type: "classic"
  },


  Images: {
    initialSize: "fit",
    Panzoom: {
      zoom: false,
    },

    zoom: false,

    
  },


  Toolbar: {
    display: {
      left: [],
      middle : ["prev", "infobar", "next"],
      right: [
        "thumbs",
        "close",
  
      ],
    }
  }

});


