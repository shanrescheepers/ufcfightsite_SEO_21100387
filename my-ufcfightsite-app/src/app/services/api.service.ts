import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  async getSchedule() {
    return await fetch("https://us-central1-fight-site-6dbcd.cloudfunctions.net/getSchedule")
      .then(data => data.json())
  }

  async getEvent(eventId: string) {
    return await fetch(`https://us-central1-fight-site-6dbcd.cloudfunctions.net/getEvent`)
      .then(data => data.json())
  }

  async getFight(fightId: string) {
    return await fetch(`https://api.sportsdata.io/v3/mma/stats/json/Fight/${fightId}?key=0d7764cec6ff4982b6257b85ab293701`)
      .then(data => data.json())
  }

  async getFighter(fighterId: string) {
    return await fetch(`https://api.sportsdata.io/v3/mma/scores/json/Fighter/${fighterId}?key=0d7764cec6ff4982b6257b85ab293701`)
      .then(data => data.json())
  }
}