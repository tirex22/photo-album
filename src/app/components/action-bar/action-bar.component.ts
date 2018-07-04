import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @Input() title: string;
  @Input() actionName: String;
  @Input() onClick: Function;

  constructor() { }

  ngOnInit() {
  }

}
