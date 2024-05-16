console.log(img_list);
const pic = document.querySelector('section'); 
function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * img_list.length);
    var img = img_list[randomIndex]; 
    pic.style.backgroundImage = img; 
    return img;
}

setInterval(getRandomImage, 1000); 