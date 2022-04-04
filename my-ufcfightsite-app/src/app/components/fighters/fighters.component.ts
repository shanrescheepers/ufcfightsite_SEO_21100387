import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class FightersComponent implements OnInit {
  fighters;
  searchedFighters;
  lastName = new FormControl('');

  constructor(public apiService: ApiService, public analytics: AngularFireAnalytics) { }

  ngOnInit(): void {
    this.apiService.getFighters().then(allFighters => {
      this.fighters = allFighters.data;
    })
    this.analytics.logEvent("fighter_screen_viewed");
  }

  searchFighter() {
    // Ek gaan die to lower case eerste laat gebeur, sodat dit meer User Friendly moet wees, so enige letter append die toLowerCase meth.

    this.searchedFighters = this.fighters.filter(fighter => fighter.LastName.toLowerCase().includes(this.lastName.value.toLowerCase()))

    this.analytics.logEvent("fighter_searched", { name: `${this.lastName.value}` })
    // hierdie stuur die data van die user na die analytics toe, agv die event
  }
}