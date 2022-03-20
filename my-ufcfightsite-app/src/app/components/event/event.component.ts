import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  clickedEvent;
  //super duper weird ding want mense laat grys word

  constructor(public apiService: ApiService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let eventId = this.route.snapshot.paramMap.get('id');
    this.apiService.getEvent(eventId).then(event => {
      this.clickedEvent = event;
      console.log(this.clickedEvent);
    })
  }
}
