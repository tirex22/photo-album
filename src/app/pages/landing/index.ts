import { Component, OnInit } from '@angular/core';
import { JsonPlaceHolderService } from '../../services/jsonPlaceHolder/'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit {

  users: any;

  constructor(private jsonPlaceHolderService: JsonPlaceHolderService) {
  }


  ngOnInit() {
    this.getUsers();
  }


  // gets all users using json-place-holder "getUsers" function
  getUsers = () => {
    this.jsonPlaceHolderService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }


  // creates a new user using json-place-holder "createUser" function
  createUser = (user) => {
    this.jsonPlaceHolderService.createUser(user)
      .subscribe(newUser => {

      });
  }

}
