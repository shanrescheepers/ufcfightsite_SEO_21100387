import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';;
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  upcomingSchedule;

  // dependency injection => sit in constructor
  constructor(public apiService: ApiService, public analytics: AngularFireAnalytics) { }

  ngOnInit() {
    this.apiService.getSchedule().then(schedule => {
      this.upcomingSchedule = schedule.data.filter(event => event.Status == "Scheduled")

      this.analytics.logEvent("schedule_screen_viewed")
    })
  }
}