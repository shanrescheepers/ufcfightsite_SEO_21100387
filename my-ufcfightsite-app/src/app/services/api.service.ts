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
    const payload = { "eventId" : eventId }

    return await fetch(`https://us-central1-fight-site-6dbcd.cloudfunctions.net/getEvent`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(data => data.json())
  }

  async getFight(fightId: string) {
    return await fetch(`https://us-central1-fight-site-6dbcd.cloudfunctions.net/getFight`)
      .then(data => data.json())
  }

  async getFighters() {
    return await fetch(`https://us-central1-fight-site-6dbcd.cloudfunctions.net/getFighters`)
      .then(data => data.json())
  }
}