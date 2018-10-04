import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.angularbootcamp.com';

interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
@Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  selectedVideoId: string | undefined;
  videoList = [];

  constructor(http: HttpClient) {
    http
    .get<Video[]>(API_URL + '/videos')
    .subscribe(videos => this.videoList = videos);
   }
}
