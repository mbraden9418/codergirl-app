import { Component } from '@angular/core';
import { AwesomeFeatureService} from './awesome-feature.service';

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codergirl-app';

  constructor(svc: AwesomeFeatureService) {
    svc.beAwesome();
  }
}




