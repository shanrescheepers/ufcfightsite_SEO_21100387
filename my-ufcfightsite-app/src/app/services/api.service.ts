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

    return await fetch(`https://us-central1-fight-site-6dbcd.cloudfunctions.net/getEvent`, {
      method: 'POST',
      body: eventId,
    })
      .then(data => data.json())
  }

  async getFighters() {
    return await fetch(`https://us-central1-fight-site-6dbcd.cloudfunctions.net/getFighters`)
      .then(data => data.json())
  }
}