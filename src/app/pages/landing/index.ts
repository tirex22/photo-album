import { Component, OnInit } from '@angular/core';
import { JsonPlaceHolderService } from '@services/json-place-holder'
import { Router } from '@angular/router';
import { User } from '@models/user'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit {

  users: User[]; // list of users
  modalOpened: boolean;

  constructor(
    private jsonPlaceHolderService: JsonPlaceHolderService,
    private router: Router) {
    this.modalOpened = false;
  }


  ngOnInit() {

    // configure json-place-holder service
    this.jsonPlaceHolderService.configure(() => {

      // on success, get all users
      this.getUsers();
    });
  }


  // gets all users using json-place-holder "getUsers" function
  getUsers = () => {
    let newUsers = [];
    this.jsonPlaceHolderService.getUsers()
      .subscribe((users) => {

        // create a user class instance for every user object
        Object.values(users).forEach(user => {

          // add instance to list of users
          newUsers.push(new User(user));
        });

        // set final user list
        this.users = newUsers;
      });
  }


  // creates a new user using json-place-holder "createUser" function
  createUser = (user) => {
    this.jsonPlaceHolderService.createUser(user)
      .subscribe(newUser => {
        this.closeModal();
        let user = new User(newUser);
        this.users.push(user);
      });
  }


  // event handler for clicking a user
  onUserClicked = (user) => {

    // navigate to user page
    this.router.navigateByUrl('/user/' + user.id);
  }


  // opens the form modal
  openModal = () => {
    this.modalOpened = true;
  }

  // closes the form modal
  closeModal = () => {
    this.modalOpened = false;
  }

}
