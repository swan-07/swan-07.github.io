(() => {
  const dialog = document.querySelector('.photo-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const image = dialog.querySelector('.photo-lightbox-image');
  const caption = dialog.querySelector('figcaption');
  const previous = dialog.querySelector('.photo-lightbox-prev');
  const next = dialog.querySelector('.photo-lightbox-next');
  let photos = [];
  let index = 0;
  let opener;

  function showPhoto(newIndex) {
    index = (newIndex + photos.length) % photos.length;
    const photo = photos[index];
    image.src = photo.href;
    image.alt = photo.querySelector('img').alt;
    caption.textContent = `${image.alt} (${index + 1} / ${photos.length})`;
    previous.hidden = next.hidden = photos.length < 2;
  }

  document.querySelectorAll('.event-photo').forEach(photo => {
    photo.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = photo;
      photos = Array.from(photo.closest('.event-photos').querySelectorAll('.event-photo'));
      showPhoto(photos.indexOf(photo));
      dialog.showModal();
      document.body.classList.add('photo-lightbox-open');
      dialog.querySelector('.photo-lightbox-close').focus();
    });
  });

  previous.addEventListener('click', () => showPhoto(index - 1));
  next.addEventListener('click', () => showPhoto(index + 1));
  dialog.querySelector('.photo-lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(index + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('photo-lightbox-open');
    image.removeAttribute('src');
    opener?.focus();
  });
})();
