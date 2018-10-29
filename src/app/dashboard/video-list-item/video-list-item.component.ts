import { Component, OnInit, Input } from '@angular/core';
import {Video} from 'src/app/types';
@Component({
  selector: 'cg-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {
  @Input() v: Video;
  constructor() { }

  ngOnInit() {
  }

}
