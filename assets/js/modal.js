document.addEventListener("DOMContentLoaded", function () {
  var modal = document.createElement("div");
  modal.className = "modal";
  document.body.appendChild(modal);

  var span = document.createElement("span");
  span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>';
  span.className = "close";
  modal.appendChild(span);

  var modalImg = document.createElement("img");
  modalImg.className = "modal-content";
  modal.appendChild(modalImg);

  document.querySelectorAll("img").forEach(function (img) {
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      document.body.classList.add("modal-open");
    }
  });

  function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  modal.onclick = closeModal;
  span.onclick = function (event) {
    event.stopPropagation();
    closeModal();
  };
});
