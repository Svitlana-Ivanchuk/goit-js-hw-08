// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from '/node_modules/simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

const galleryCollection = document.querySelector('.gallery');
const cardsMarkup = createImageCardMarkup(galleryItems);

galleryCollection.insertAdjacentHTML('beforeend', cardsMarkup);

// galleryCollection.addEventListener('click', handelGalleryCollectionClick);

galleryCollection.style.listStyle = 'none';

function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// function handelGalleryCollectionClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== 'IMG') return;

// }
