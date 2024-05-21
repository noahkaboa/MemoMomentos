class Photo {
    constructor(name, url, date) {
        this.name = name;
        this.url = url;
        this.date = date;
        this.album_list = [];
    }

    addAlbum(album_name) {
        this.album_list.push(album_name);
        eval(album_name.addPhoto(this.name));
    }

    removeAlbum(album_name) {
        this.album_list = this.album_list.filter(album => album !== album_name);
        eval(album_name.removePhoto(this.name));
    }
}

class Album {
    constructor(name) {
        this.name = name;
        this.photo_list = [];
    }

    addPhoto(photo) {
        this.photo_list.push(photo);
    }

    removePhoto(photo) {
        this.photo_list = this.photo_list.filter(p => p !== photo);
    }
}


let img_list = [
    new Photo("photo1", "/images/61Zce-PyonL.jpg", "2021-01-01"),
    new Photo("photo2", "/images/main8.avif", "2021-01-02"),
    new Photo("photo3", "/images/SSU_Kirby_artwork.png", "2021-01-03"),
    new Photo("photo4", "/images/61Zce-PyonL.jpg", "2021-01-04"),
];

let albums = [
    new Album("album1"),
    new Album("album2"),
]
