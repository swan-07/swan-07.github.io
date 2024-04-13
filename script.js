
document.addEventListener('DOMContentLoaded', () => {
    var gallery = document.querySelector('#gallery');
    var msnry = new Masonry(gallery, {
      itemSelector: '.gallery-item',
      percentPosition: true,
      gutter: 16
    });
  
    // Function to filter gallery items
    window.filterGallery = function(filter) {
      var items = gallery.querySelectorAll('.gallery-item');
  
      items.forEach(item => {
        if (filter === 'all') {
          item.style.display = 'block';
        } else {
          var isMatch = item.classList.contains(filter);
          item.style.display = isMatch ? 'block' : 'none';
        }
      });
  
      // Update Masonry layout after filtering
      msnry.layout();
    };
  });
  
  