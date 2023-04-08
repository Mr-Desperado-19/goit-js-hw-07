import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const galleryContainer = document.querySelector('.gallery');

// function createGalleryMarkup (images) {
//     return images.map(({preview, original, description}) =>
//     `<li class="gallery__item">
//             <a class="gallery__link" href='${original}'>
//                 <img
//                     class="gallery__image"
//                     src='${preview}'
//                     data-source='${original}'
//                     alt='${description}'
//                 />
//             </a>
//         </li>`
    
//     ).join("");
// }

// const galleryMarkup = createGalleryMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

const gallery = document.querySelector('.gallery');
    const markup = galleryItems.map(({preview, original, description}) =>
`<li class="gallery__item">
   <a class="gallery__link" href='${original}'>
      <img class="gallery__image" src='${preview}' data-source='${original}' alt='${description}' />
   </a>
</li>`);
gallery.insertAdjacentHTML('afterbegin', markup.join(''));

gallery.addEventListener('click', onClick);

function onClick(evt) {

   evt.preventDefault();

   const imgGalleryEl = evt.target.classList.contains('gallery__image');


   if (!imgGalleryEl) {
      return;
   }

const originalImgUrl = evt.target.dataset.source;

const instance = basicLightbox.create(`
    <img src="${originalImgUrl}" width="800" height="600">
`)

instance.show()

};