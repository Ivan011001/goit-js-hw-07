import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(galleryData) {
  return galleryData
    .map(
      (item) =>
        `<li class="gallery__item">
           <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
           </a>
        </li>`
    )
    .join("");
}

galleryRef.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
