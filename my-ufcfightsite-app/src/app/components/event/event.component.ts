import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  clickedEvent;
  //super duper weird ding want mense laat grys word

  constructor(public apiService: ApiService, public route: ActivatedRoute, public analytics: AngularFireAnalytics) { }

  ngOnInit(): void {
    let eventId = this.route.snapshot.paramMap.get('id');
    this.apiService.getEvent(eventId).then(event => {
      this.clickedEvent = event.data;
      this.analytics.logEvent("event_screen_viewed", { event: this.clickedEvent.Name });//event: is wat op ana gaan wys, value is ufc 278 for example
    })

  }
}
