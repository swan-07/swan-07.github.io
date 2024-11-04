function openModal(element) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');
  
  modal.style.display = "block";
  modalImg.src = element.querySelector('.gallery-image').src;
  captionText.innerHTML = element.querySelector('.gallery-item-text').textContent;
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

  
  
  