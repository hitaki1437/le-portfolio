setTimeout(()=>{
  history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}, 5); 