import { Component, OnInit, Input } from '@angular/core';
import { User } from '@models/User'

@Component({
  selector: 'info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss']
})
export class InfoHeaderComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
