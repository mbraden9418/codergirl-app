import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {VideoDataService} from '../.././video-data.service';
import {Video} from '../../types';

@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  selectedVideoId: string | undefined;

  @Input() videoList: Observable<Video[]>;

  constructor() {
  }
  ngOnInit() {
  }

  pickVideo(video: any) {
    this.selectedVideoId = video.id;
  }

}


