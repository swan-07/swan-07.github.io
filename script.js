document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('#gallery');
  let msnry; // Initialize Masonry variable

  // Initialize Masonry after all images have loaded
  imagesLoaded(gallery, () => {
      msnry = new Masonry(gallery, {
          itemSelector: '.gallery-item',
          percentPosition: true,
          columnWidth: '.gallery-item',
          gutter: 16
      });
  });

  // Function to filter gallery items
  window.filterGallery = function(filter) {
      const items = gallery.querySelectorAll('.gallery-item');

      items.forEach(item => {
          item.classList.toggle('is-hidden', !(filter === 'all' || item.classList.contains(filter)));
      }); 

      imagesLoaded(gallery, () => {
        setTimeout(() => {
          // msnry.reloadItems();
          // msnry.layout();
      }, 50);
    });
      
      
  };
});


