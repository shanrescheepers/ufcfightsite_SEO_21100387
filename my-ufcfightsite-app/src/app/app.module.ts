import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeatureComponent } from './components/feature/feature.component';
import { LandingComponent } from './components/landing/landing.component';
import { MaterialModule } from './material/material.module';
import { EventComponent } from './components/event/event.component';
import { FightersComponent } from './components/fighters/fighters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics'
import { AngularFireModule } from '@angular/fire/compat'
import { provideFunctions, getFunctions } from '@angular/fire/functions';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FeatureComponent,
    LandingComponent,
    EventComponent,
    FightersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFunctions(() => getFunctions()),
    AngularFireAnalyticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
