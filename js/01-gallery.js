import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const list = document.createElement('ul');
list.classList = 'gallery';

gallery.append(list);

const imageLi = galleryItems
  .map(
      (image) => {
          const {preview, original, description} = image;
          return `<li class="gallery__item"> <a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}"/></a></li>`;
      }
  )
  .join(' ');

list.innerHTML = imageLi;

gallery.addEventListener('click', event => {
    event.preventDefault();
    const fullImage = event.target.dataset.src;
    const altFullImage = event.target.alt;
    
    const instance = basicLightbox.create(`
    <img src="${fullImage}" alt="${altFullImage}" width="800" height="600"/>
`);
    console.log(instance);

    instance.show();
});

// document.addEventListener('keydown', ev => {
//     if (ev.code === "Escape") {
//         instance.close();
//     }
// });