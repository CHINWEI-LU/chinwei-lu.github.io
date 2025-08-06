// source/js/pjax-logo.js
document.addEventListener('pjax:complete', function () {
  const logo = document.querySelector('.navbar-logo img');
  if (logo) {
    logo.src = '/img/20250416122213.png'; // 根據你的實際路徑調整
  }
});
