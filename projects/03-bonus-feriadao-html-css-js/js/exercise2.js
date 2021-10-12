// Ref. Menu responsivo
// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
// https://www.w3schools.com/howto/howto_js_check_hidden.asp
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
// https://css-tricks.com/working-with-javascript-media-queries/
// https://www.codegrepper.com/code-examples/javascript/javascript+if+window+width+greater+than

function openMenu() {
  
  let hamb = document.getElementById("box__menu");

  if (hamb.style.display == "none") {
    hamb.style.display = "block";
  } else {
    hamb.style.display = "none";
  }
  // hamb.onresize.style.display = "block";
  // document.getElementById("box__hamburguer").style.display == "initial";
  // alert('Abre janela');

}

const mediaQuery = window.matchMedia('(min-width: 901px)');
mediaQuery.addListener(bigWindow);

function bigWindow() {
  let hamb = document.getElementById("box__menu");
//window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 901px)").matches) {
    //  let hamb = document.getElementById("box__menu");
    //  hamb.style.display = "block";
    
    hamb.style.display = "block";
  //   alert('Janela maior que 900px');
    } else {
      hamb.style.display = "none";
      // alert('Janela menor que 900px');
  }
}

// function bigWindow() {
//   if ($(window).width() < 960) {
//     alert('Less than 960');
//   }
//   else {
//     alert('More than 960');
//   }
// }

// Create a condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(min-width: 901px)')

// function handleTabletChange(e) {
  // Check if the media query is true
  // if (e.matches) {
    // Then log the following message to the console
//     console.log('Media Query Matched!')
//   }
// }


