// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
const showImages = (html) => {
	document.querySelector('ul').innerHTML= html;
};
fetch('images.html').then((re)=>{
	console.log('RESPONSE '+re);
	return re.text();
}).then((ht)=>{
    console.log('HTML '+ht);
    showImages(ht);
});