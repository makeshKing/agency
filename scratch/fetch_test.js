async function test() {
  try {
    const res = await fetch('http://localhost:3000');
    console.log('Status:', res.status);
    const html = await res.text();
    console.log('HTML length:', html.length);
    
    // Check if Don Julio image is in html
    console.log('Don Julio image in HTML:', html.includes('don-julio-1942_listing-image'));
    console.log('Patron image in HTML:', html.includes('patron-tequila_listing-image'));
    console.log('Addmind image in HTML:', html.includes('addmind-dubai-harbour_listing-image'));
    console.log('QT image in HTML:', html.includes('qt_listing-image'));
    console.log('JW Marriott image in HTML:', html.includes('jw-marriott-gold-coast_listing-image'));
    console.log('Hayman image in HTML:', html.includes('intercontinental-hayman-great-barrier-reef_listing-image'));

    // Check sections
    console.log('Most brands in HTML:', html.toLowerCase().includes('most brands'));
    console.log('Biggest brands in HTML:', html.toLowerCase().includes('biggest brands'));
  } catch (err) {
    console.error('Fetch error:', err);
  }
}
test();
