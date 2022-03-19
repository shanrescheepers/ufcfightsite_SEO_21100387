import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FightersComponent } from './components/fighters/fighters.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'event/:id', component: EventComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'fighters', component: FightersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
