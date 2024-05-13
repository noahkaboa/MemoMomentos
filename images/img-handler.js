img_list = [
    new Photo("photo1", "images/photo1.jpg", "2021-01-01", ["album1", "album2"]),
    new Photo("photo2", "images/photo2.jpg", "2021-01-02", ["album1", "album2"]),
    new Photo("photo3", "images/photo3.jpg", "2021-01-03", ["album1", "album2"]),
];

class Photo {
    constructor(name, url, date, album_list) {
        this.name = name;
        this.url = url;
        this.date = date;
        this.album_list = album_list;
    }

    addAlbum(album_name) {
        this.album_list.push(album_name);
    }

    removeAlbum(album_name) {
        this.album_list = this.album_list.filter(album => album !== album_name);
    }

}