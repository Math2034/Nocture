/* jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function () {
            const btn = document.getElementById("clickBtn");
            if (btn) {
                btn.addEventListener("click", function () {
                    alert("Button clicked!");
                });
            } else {
                console.error("Button element not found.");
            }
        });

function openNav() {
  document.getElementById('sidenav').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  document.getElementById('sidenav').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.sidenav') && !e.target.closest('.menu-toggle')) {
    closeNav();
  }
});