img_list = [

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

}