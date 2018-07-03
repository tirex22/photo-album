import { Component, OnInit } from '@angular/core';
import { JsonPlaceHolderService } from '@services/json-place-holder';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { User } from '@models/user';
import { Album } from '@models/album';
import { Photo } from '@models/photo';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})

export class UserPage implements OnInit {

  user: User;
  albums: Album[];
  photos: Photo[];
  showPhotos: boolean;
  selectedAlbum: number;
  constructor(
    private jsonPlaceHolderService: JsonPlaceHolderService,
    private route: ActivatedRoute,
  ) {
    this.showPhotos = false;
    this.selectedAlbum = 0;
  }

  ngOnInit() {

    // configure json-place-holder service if not configured
    this.jsonPlaceHolderService.configure(() => {

      // extract id from url
      this.route.params.subscribe(params => {
        let id = params['id'];

        // get user albums 
        this.getAlbums(id);

        // get user info
        this.getUser(id);
      });

    })
  }


  // gets all albums of a user using json-place-holder "getAlbums" function
  getAlbums = (userId: number) => {
    let newAlbums = [];

    this.jsonPlaceHolderService.getAlbums(userId)
      .subscribe(albums => {

        // create an album class instance for every album object
        Object.values(albums).forEach(album => {

          // add instance to list of albums
          newAlbums.push(new Album(album));
        });

        // set final album list
        this.albums = newAlbums;
      });
  }


  // gets user information using json-place-holder "getUser" function
  getUser = (userId: number) => {
    this.jsonPlaceHolderService.getUser(userId)
      .subscribe(user => {
        this.user = new User(user);
      });
  }


  // gets all photos in an album using json-place-holder "getPhotos" function
  getPhotos = (albumId: number) => {
    let newPhotos = [];
    this.jsonPlaceHolderService.getPhotos(albumId)
      .subscribe(photos => {

        // create a photo class instance for every photo object
        Object.values(photos).forEach(photo => {

          // add instance to list of photos
          newPhotos.push(new Photo(photo));
        });

        // set final album list
        this.photos = newPhotos;
      });
  }


  // event handler for clicking an album
  onAlbumClicked = (album) => {

    // show photos view
    this.showPhotos = true;

    // get photos of clicked album
    this.getPhotos(album.id);

    // show current album id
    this.selectedAlbum = album.id
  }

}
