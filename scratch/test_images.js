async function testImages() {
  const images = [
    "/images/69cbd8b004769387bc1f446d_69cbd1d5750c3ab50cd60a53_don-julio-1942_listing-image_67dcfb62fc75610ea069ba4b.webp",
    "/images/69cbd924bf20ab3e58a2d850_69cbd25fe5742986335fea6a_patron-tequila_listing-image_691f176ca5bc9b55d306fdc0.webp",
    "/images/69cbd89601e4567fdade7e68_69cbd1a0cffaf80b7858f893_addmind-dubai-harbour_listing-image_691f16c8b57321a380233137.webp",
    "/images/69cbd942141a5e7d231207e4_69cbd28274cb99d4c0331269_qt_listing-image_67dcf66a7f1809ce986282a7.webp",
    "/images/69cbd8f60863a79ee4811c5d_69cbd228e5742986335fbefe_jw-marriott-gold-coast_listing-image_67e3998e923cb68cfccd1e55.webp",
    "/images/69cbd8eb0863a79ee48118c8_69cbd221dffdcea16b997af4_intercontinental-hayman-great-barrier-reef_listing-image_67e3a4b05e5b2611d61816af.webp",
    "/images/69c6695915898ef8e7dd88e3_692067ef2e73d20bd99209f9_67d6e0a442fc281ac05ffe86_wmih%20(1).avif"
  ];

  for (const img of images) {
    const res = await fetch('http://localhost:3000' + img);
    console.log(res.status, res.headers.get('content-type'), res.headers.get('content-length'), img.slice(0, 50));
  }
}
testImages();
