import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imageList = galleryItems
  .map(image => {
          const {preview, original, description} = image;
          return `<div class="gallery__item"> <a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}"/></a></div>`;
    })
  .join(' ');

gallery.insertAdjacentHTML('afterbegin', imageList);

gallery.addEventListener('click', event => {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  };

  const fullImage = event.target.dataset.src;
  const altFullImage = event.target.alt;

  const instance = basicLightbox.create(`<img src="${fullImage}" alt="${altFullImage}" width="800" height="600"/>`, {
    onShow: () => window.addEventListener('keydown', isEscapeKey),
    onClose: () => window.removeEventListener('keydown', isEscapeKey),
  });
  
  instance.show();    
    
  function isEscapeKey(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  };  
});