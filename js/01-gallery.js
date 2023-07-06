import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(galleryData) {
  return galleryItems
    .map(
      (item) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
             />
          </a>
      </li>`
    )
    .join("");
}

// galleryRef.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));
galleryRef.innerHTML = createGalleryMarkup(galleryItems);

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const fullImage = basicLightbox.create(`<img src="${event.target.dataset.source}" >`);
  fullImage.show();

  addKeyboardCloseListener(fullImage);
});

function addKeyboardCloseListener(toClosed) {
  document.addEventListener("keydown", (event) => {
    if (basicLightbox.visible() && event.code === "Escape") {
      toClosed.close();
    }
  });
}
