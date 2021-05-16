import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    //routing the button of the nav bar to the page i want them to go to  
    { title: 'Movies', url: '/movie' },
    { title: 'About & Contact', url: '/about' },
    { title: 'Feedback', url: '/feedback'},
 
  ];
 
  constructor() {}
}
