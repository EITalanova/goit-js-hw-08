// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markupGallery = galleryItems
  .map(
    (galleryItem) =>
      `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`
  )
    .join("");
  
gallery.insertAdjacentHTML('beforeend', markupGallery);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: "250" });