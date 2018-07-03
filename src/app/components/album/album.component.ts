import { Component, OnInit, Input } from '@angular/core';
import { Album } from '@models/album';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;
  @Input() onClick: Function;


  constructor() { }

  ngOnInit() {
  }

}
