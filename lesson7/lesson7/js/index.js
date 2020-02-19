let images = document.querySelectorAll('[data-src]');

function preloadImage(img){
  const src = img.getAttribute("data-src");
  img.onload = () => {
    img.removeAttribute('data-src');
  };
  if(!src){
    return;
  }

  img.src = src;
}

const imgOptions ={
  threShold: 0,
  rootMargin: "0px 0px 250px 0px"
};

if('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    });
  }, imgOptions);

  images.forEach(image => {
    imgObserver.observe(image);
  });
} else {
  images.forEach(image => {
    imgObserver.observe(image);
  });
}
/* let imagesLoader = document.querySelectorAll('img[data-src]');

const imgStartLoading ={
  threshold: 0,
  rootMargin: "0px, 0px, 50px, 0px"
};

const loadImages = (img) => {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
};

imagesLoader.forEach((pic) => {
  loadImages(pic);
});

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgStartLoading);
  imagesLoader.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesLoader.forEach((img) => {
    loadImages(img);
  });
} */