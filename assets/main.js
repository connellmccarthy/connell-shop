if (document.querySelector('.btn_nav_mobile')) {
  document.querySelector('.btn_nav_mobile').addEventListener('click', showMenu);
}
function showMenu() {
  var menu = document.querySelector('.nav_menu');
  var body = document.querySelector('body');
  var button = document.querySelector('.btn_nav_mobile');

  if (menu.classList.contains('active')) {
    body.style.overflow = 'scroll';
  } else {
    body.style.overflow = 'hidden';
  }
  menu.classList.toggle('active');
  button.classList.toggle('active');
}
document.querySelectorAll('a.local').forEach(element => {
  element.addEventListener('click', function() {
    event.preventDefault();
    transition(element.getAttribute('href'));
  }, false);
});
function transition(loc) {
  const loading = document.querySelector('.loading');
  if (loc === "https://connellmccarthy.com") {
    loading.classList.add('black');
  } else if (loc.includes("https://connellmccarthy.com/article")) {
    loading.classList.add('off-white');
  }

  loading.classList.add('active');
  setTimeout(function() {
    window.location.assign(loc);
    // setTimeout(function() {
    //   loading.classList.remove('active');
    // },500);
  },800)
}

document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
}, false);