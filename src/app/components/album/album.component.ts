import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: ;
  @Input() onClick: Function;


  constructor() { }

  ngOnInit() {
  }

}
