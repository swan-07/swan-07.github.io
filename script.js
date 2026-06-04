// Homepage profile photo: the full picture fills the page hidden under a
// cream cover. The face is always revealed; moving the cursor opens a second
// circular "hole" that reveals the rest of the body underneath.
document.addEventListener('DOMContentLoaded', function () {
  var reveal = document.getElementById('pfp-reveal');
  if (!reveal) return; // homepage only

  window.addEventListener('mousemove', function (e) {
    reveal.style.setProperty('--spot-x', e.clientX + 'px');
    reveal.style.setProperty('--spot-y', e.clientY + 'px');
  });
});
