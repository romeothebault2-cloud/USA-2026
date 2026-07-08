window.addEventListener('load', function() {
  const STOP_KEYS = [
    "san-francisco","lake-tahoe","mammoth-lakes","mono-lake","yosemite",
    "monterey","santa-barbara","joshua-tree","los-angeles"
  ];

  const PHOTOS_DATA = {
    "san-francisco": {
      postcard: "photos/san-francisco/01SF.JPG",
      gallery: [
        { src: "photos/san-francisco/01SF.JPG", caption: "Golden Gate" },
        { src: "photos/san-francisco/02SF.jpeg", caption: "Golden Gate" },
        { src: "photos/san-francisco/03SF.jpeg", caption: "Capucine avec des capucines" },
      ]
    },
  };

  STOP_KEYS.forEach((key, i) => {
    const p = PHOTOS_DATA[key];
    if (!p || !STOPS[i]) return;
    if (p.postcard) STOPS[i].modalImg = p.postcard;
    if (p.gallery)  STOPS[i].photos = p.gallery;
  });
});
