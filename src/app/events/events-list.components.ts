import {Component, OnInit} from '@angular/core';

import { EventsService } from './shared/events.service';

declare let toastr;

@Component({
    selector: 'events-list',
    template: `
    <h1>Upcoming Angular Events</h1>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"  ></event-thumbnail>
        </div>
    </div>
    `
    /*template: `<event-thumbnail (eventClick)= "handleEventClicked($event)" 
    [event] = event1 ></event-thumbnail>`*/

})

export class EventsListComponent implements OnInit{
    events:any[]
    constructor(private eventsService:EventsService){
        
    }

    ngOnInit(){
        this.events = this.eventsService.getEvents();
    }

    handleThumbnailClick(eventName){
        toastr.success(eventName)
    }
    

}