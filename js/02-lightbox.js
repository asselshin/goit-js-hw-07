import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// new SimpleLightbox('.some-element a', {
//   /* options */
// });

const gallery = document.querySelector('.gallery');

const imageLi = galleryItems
  .map(image => {
    const { preview, original, description } = image;
    return `<li> <a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}"/></a></li>`;
  })
  .join(' ');

gallery.insertAdjacentHTML('afterbegin', imageLi);


let galleryBox = new SimpleLightbox('.gallery a');

gallery.addEventListener('click', (ev) => {
    ev.preventDefault();
    galleryBox.on();
});
