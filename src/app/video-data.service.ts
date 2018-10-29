import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://api.angularbootcamp.com';

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

export interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
    .get<Video[]>(API_URL + '/videos');
  }
}

