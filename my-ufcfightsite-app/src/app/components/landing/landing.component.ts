import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public analytics: AngularFireAnalytics) { }

  ngOnInit(): void {
    this.analytics.logEvent("landing_page_viewed");
  }

}
