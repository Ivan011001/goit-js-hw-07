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

galleryRef.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems));

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`, {
    onShow: (instance) => {
      document.addEventListener("keydown", pressEsc);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", pressEsc);
    },
  });

  instance.show();

  function pressEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
});
