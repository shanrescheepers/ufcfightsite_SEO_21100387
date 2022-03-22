import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback = new FormControl("", Validators.required)

  constructor(public analytics: AngularFireAnalytics, public snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitFeedback() {
    this.analytics.logEvent("user_feedback_captured", { feedback: `${this.feedback.value}` })
    this.feedback.reset()
    this.snackbar.open("Feedback submitted. Thank you very much!")
  }
}
