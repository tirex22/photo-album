import { Component, OnInit, Input } from '@angular/core';
import { User } from '@models/user'

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
