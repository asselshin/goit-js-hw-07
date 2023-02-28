import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imageLi = galleryItems
  .map(image => {
    const { preview, original, description } = image;
    return `<li> <a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}"/></a></li>`;
  })
  .join(' ');

gallery.insertAdjacentHTML('afterbegin', imageLi);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});