import img_list from '/images/img-handler.js';

console.log(img_list);
const pic = document.querySelector('section'); 
function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * img_list.length);
    var img = img_list[a]; 
    pic.style.backgroundImage = img; 
    return img;
}

setInterval(getRandomImage, 1000); 