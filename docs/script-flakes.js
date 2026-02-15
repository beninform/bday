
var supportsES6 = function() {
  // https://gist.github.com/bendc/d7f3dbc83d0f65ca0433caf90378cd95
  try {
    new Function("(a = 0) => a");
    return true;
  }
  catch (err) {
    return false;
  }
}();

var Snow = (function (window, document) {
  
  'use strict';
  if (!supportsES6) return false;
  
  // Dynamically add snowflakes HTML to the page after page-load.

  function letItSnow() {
    const snowDiv = document.createElement('div');
    snowDiv.className = 'snow';
    snowDiv.setAttribute('aria-hidden', true);
    snowDiv.innerHTML =  `
      <i class=snow_flake></i>
      <i class=snow_flake></i>
      <i class=snow_flake></i>
      <i class=snow_flake-600px></i>
      <i class=snow_flake-600px></i>
      <i class=snow_flake-600px></i>
      <i class=snow_flake-600px></i>
      <i class=snow_flake-768px></i>
      <i class=snow_flake-768px></i>
      <i class=snow_flake-1024px></i>
      <i class=snow_flake-1024px></i>
      <i class=snow_flake-1024px></i>
      <i class=snow_flake-1280px></i>
      <i class=snow_flake-1280px></i>
      <i class=snow_flake-1366px></i>
      <i class=snow_flake-1600px></i>
      <i class=snow_flake-1600px></i>
      <i class=snow_flake-1800px></i>
      <i class=snow_flake-1800px></i>
      <i class=snow_flake-1920px></i>
      <i class=snow_flake-1920px></i>`;

    document.body.insertBefore(snowDiv, document.body.childNodes[0]);
    
  };
  
  window.addEventListener('load', letItSnow, false);

}(window, document));

