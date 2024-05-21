class Photo {
    constructor(name, url, date, location, album_list) {
        this.name = name;
        this.url = url;
        this.date = date;
        this.location = location
        this.album_list = [];
        albums.forEach(album => this.addAlbum(album));
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


let albums = [
    new Album("ourHeadshots"),
    new Album("album2"),
]

let img_list = [
    new Photo("AlexHeadshot", "/images/61Zce-PyonL.jpg", "2023-07-01", ["ourHeadshots"]),
    new Photo("AmelieHeadshot", "/images/61Zce-PyonL.jpg", "2023-07-02", ["ourHeadshots"]),
    new Photo("CaitlynHeadshot", "/images/61Zce-PyonL.jpg", "2023-07-03", ["ourHeadshots"]),
    new Photo("NoahHeadshot", "/images/61Zce-PyonL.jpg", "2023-07-04", ["ourHeadshots"]),
];
