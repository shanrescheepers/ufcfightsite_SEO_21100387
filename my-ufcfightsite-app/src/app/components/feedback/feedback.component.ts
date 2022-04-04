import { Component, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback = new FormControl("", Validators.required)

  constructor(public analytics: AngularFireAnalytics, public snackbar: MatSnackBar, public firestoreDB: AngularFirestore) {

  }

  ngOnInit(): void {
  }

  submitFeedback() {
    this.analytics.logEvent("user_feedback_captured", { feedback: `${this.feedback.value}` })
    this.firestoreDB.collection('fightsite_user_feedbacks_collection').add({
      // JSON objs with key name and waarde
      feedback: this.feedback.value,
      //In the moment's data, taking the unique ID generated of FS.Firestore calls is = Async Calls
      timestamp: new Date()
    }).then(() => {
      // new as die data reg deur kom, die promise, sal 31+32 gebeur. NET wanneer die data terugkom suksesvol
      this.feedback.reset()
      this.snackbar.open("Feedback submitted. Thank you very much!")
    })
    // ERROR Error: Uncaught (in promise): FirebaseError: [code=permission-denied]: Missing or insufficient permissions.
  }
}
