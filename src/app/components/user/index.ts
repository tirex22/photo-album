import { Component, OnInit, Input } from '@angular/core';
import { User } from '@models/user';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() onClick: Function;

  constructor() { }

  ngOnInit() { }


}
