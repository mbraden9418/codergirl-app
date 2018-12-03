import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { RouterModule, Routes} from '@angular/router';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import {ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
  { path: '', component: VideoDashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent, VideoListItemComponent]
})
export class DashboardModule { }
