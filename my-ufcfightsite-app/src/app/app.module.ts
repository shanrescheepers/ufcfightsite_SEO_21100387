import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FightersComponent } from './components/fighters/fighters.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    FeatureComponent,
    FeedbackComponent,
    FightersComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
