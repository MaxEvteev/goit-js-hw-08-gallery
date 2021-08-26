const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  modalCloseButton: document.querySelector('button[data-action=close-lightbox]'),
  lightboxImage: document.querySelector('.lightbox__image')
}

function galleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, description }) => {
    return `<li class="gallery__item"><a href="" class="gallery__link">
  <img src="${preview}" alt="${description}" class="gallery__image"></a></li>`;
  })
    .join('');
  
}

const newMarkup = galleryMarkup(galleryItems);
refs.galleryList.insertAdjacentHTML('afterbegin', newMarkup);
refs.galleryList.addEventListener('click', onGalleryListClick);

function onGalleryListClick(evt) {
  const picture = evt.target.classList.contains('gallery__image');

  if (!picture) {
    return;
  }
  evt.preventDefault();
  refs.lightbox.classList.add('is-open');
  let itemChoose = galleryItems.find(item => item.preview === evt.target.src);
  let currentIndex;
  currentIndex = galleryItems.indexOf(itemChoose);
  console.log(evt.target);
  refs.lightboxImage.src = itemChoose.original;
  refs.lightboxImage.alt = itemChoose.description;
}

function onCloseModal(evt) {
  const trueButton = evt.target.dataset.action === "close-lightbox" || evt.target.className === "lightbox__overlay";
  if (!trueButton) {
    return;
  };
    refs.lightbox.classList.remove('is-open');
    refs.lightboxImage.src = "";
    refs.lightboxImage.alt = "";   
};
refs.modalCloseButton.addEventListener('click', onCloseModal);