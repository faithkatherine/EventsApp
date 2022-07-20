import {Component} from '@angular/core';

import { EventsService } from './shared/events.service';

@Component({
    selector: 'events-list',
    template: `
    <h1>Upcoming Angular Events</h1>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail [event]= event ></event-thumbnail>
        </div>
    </div>
    `
    /*template: `<event-thumbnail (eventClick)= "handleEventClicked($event)" 
    [event] = event1 ></event-thumbnail>`*/

})

export class EventsListComponent{
    events:any[]
    constructor(private eventsService:EventsService){
        this.events = this.eventsService.getEvents();
    }
    

    /*handleEventClicked(data){
        console.log('received:', data)
    }*/

}