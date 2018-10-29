import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {VideoDataService} from '../.././video-data.service';
import {Video} from '../.././video-data.service';

@Component({
  selector: 'cg-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})

export class VideoDashboardComponent implements OnInit {


  videos: Observable<Video[]>;

  constructor(svc: VideoDataService) {
    this.videos = svc.loadVideos();
  }

  ngOnInit() {
  }

}
