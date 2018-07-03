export class Photo {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;

    constructor(photo) {
        this.albumId = photo.albumId;
        this.id = photo.id;
        this.title = photo.title;
        this.url = photo.url;
        this.thumbnailUrl = photo.thumbnailUrl;
    }
}