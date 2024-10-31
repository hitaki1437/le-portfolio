$(document).ready(function() {
  // get the anchor link buttons
  const menuBtn = $('.hack15-menu-button');
  // when each button is clicked
  menuBtn.click(()=>{	
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(()=>{
      // call removeHash function after set timeout
      removeHash();
    }, 5); // 5 millisecond timeout in this case
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});

setTimeout(()=>{
  history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}, 5); 