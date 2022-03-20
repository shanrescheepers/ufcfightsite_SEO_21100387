import { Component, OnInit } from '@angular/core';
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

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFighters().then(allFighters => {
      this.fighters = allFighters.data;
    })
  }

  searchFighter() {
    this.searchedFighters = this.fighters.filter(fighter => fighter.LastName.includes(this.lastName.value))
    console.log(this.searchedFighters)
  }
}