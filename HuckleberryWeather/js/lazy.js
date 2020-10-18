let imagestoLoad = document.querySelectorAll("img[data-src]");


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
    };

const imageOptions = {
      threshold: 1,
      rootMargin: "0px 0px 50px 0px"
  };
/*
function preloadImage(img) {
    const src = img.Attribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}
*/
if('IntersectionObserver' in window){
const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
          if(item.isIntersecting){
            loadImages(item.target);
            imgObserver.unobserve(item.target);
          }
        });
    });

    /*
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                imageObserver.unobserve(entry, target);
            }
        })
    }
}, imageOptions);
*/
imagestoLoad.forEach((img) => {
    imgObserver.observe(img);
});
}
else {
  imagestoLoad.forEach((img) => {
    loadImages(img);
  });
}
/*, imgOptions);

images.forEach(image => {
    imageObserver.observe(image);
})
*/

/*let lazyload = document.querySelectorAll('img[data-src]');
const load = (image) => {
    image.setAttribute('src') image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
}
*/

/*
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  */