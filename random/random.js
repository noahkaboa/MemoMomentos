console.log(img_list);
const pic = document.querySelector('#random_photo_holder'); 
function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * img_list.length);
    var img = img_list[randomIndex]; 
    pic.style.backgroundImage = "url('" + img.url + "')"; 
    console.log(img)
    return img;
}

getRandomImage(); 