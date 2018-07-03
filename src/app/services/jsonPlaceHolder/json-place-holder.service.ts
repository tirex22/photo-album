import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  configPath: string;
  config: any;
  httpOptions: any;

  constructor(private http: HttpClient) {

    // setting configuration file path
    this.configPath = "/assets/config.json";

    // setting http headers
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    this.config = {
      "apiUrl": "http://jsonplaceholder.typicode.com",
      "usersEndPoint": "/users",
      "albumsEndPoint": "/albums",
      "photosEndPoint": "/photos",
      "postsEndPoint": "/posts",
    };

  }


  // configures the service with correct api url and end points
  configure = () => {

    // fetch configuration file
    this.http.get(this.configPath).subscribe(config => {

      // set configuration to the corresponding json configuration object
      this.config = config['jsonPlaceHolderService'];
    });
  }


  // returns all 10 users 
  getUsers = () => {
    let url = this.config.apiUrl + this.config.usersEndPoint;
    return this.http.get(url);
  }


  // returns the user with the given id
  getUser = (userId: number) => {
    let url = this.config.apiUrl + this.config.usersEndPoint + '/' + userId;
    return this.http.get(url);
  }


  // creates a new user
  createUser = (user) => {
    let url = this.config.apiUrl + this.config.usersEndPoint;
    return this.http.post(url, user, this.httpOptions);
  }


  // returns the albums of a given user
  getAlbums = (userId: number) => {
    let url = this.config.apiUrl + this.config.albumsEndPoint + '?userId=' + userId;
    return this.http.get(url);
  }


  // returns the photos of a given album
  getPhotos = (albumId: number) => {
    let url = this.config.apiUrl + this.config.photosEndPoint + '?albumId=' + albumId;
    return this.http.get(url);
  }


}
