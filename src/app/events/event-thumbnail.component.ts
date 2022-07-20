import { Component, Input , Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template:  `
    <div>
        <hr>
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngSwitch] = "event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase = "'8:00 am'" >(Early Start)</span>
                <span *ngSwitchCase = "'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>

            <div>Price: \${{event?.price}}</div>
            <!--<div [hidden]="!event?.location">-->
            <div *ngIf="event?.location">
                <span>Location:{{event?.location?.address}}</span>
                <span>&nbsp;</span>
                <span> {{event?.location?.city}}, {{event.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">OnlineUrl: {{event?.onlineUrl}}</div>
            <!--<button class="btn btn-primary" (click)= "handleClickMe()" > Click Me </button>-->
        </div>
        
    </div> 
    `,
    styles:[`
    .thumbnail{ min-height:210px; } 
    .pad-left{margin-left:10px;}
    .div well{color:#bbb;}
    `]
})

export class EventThumbnailComponent{
    @Input() event: any
    /*@Output() eventClick = new EventEmitter()
    handleClickMe(){
        this.eventClick.emit('foo')
    }*/

}