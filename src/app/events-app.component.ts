import { Component } from '@angular/core';


@Component({
  selector: 'Events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>`
  
})
export class EventsAppComponent {
  title = 'app';
}
