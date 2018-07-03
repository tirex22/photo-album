export class Album {
    userId: number;
    id: number;
    title: string;

    constructor(album) {
        this.userId = album.userId;
        this.id = album.id;
        this.title = album.title;
    }
}