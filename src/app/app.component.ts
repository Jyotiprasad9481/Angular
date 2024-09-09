import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting : string ;
  constructor(private service:MyServiceService){
    this.greeting = this.service.getGreeting()
  }
}
