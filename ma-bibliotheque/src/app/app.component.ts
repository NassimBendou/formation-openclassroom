import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
        apiKey: "AIzaSyBZnEE2nDd6JIfuVcOaV7jqKlZvZSQXk4k",
        authDomain: "ma-bibliotheque-add8c.firebaseapp.com",
        databaseURL: "https://ma-bibliotheque-add8c.firebaseio.com",
        projectId: "ma-bibliotheque-add8c",
        storageBucket: "ma-bibliotheque-add8c.appspot.com",
        messagingSenderId: "244477424046",
        appId: "1:244477424046:web:a59e0053bc569bb18ed83f"
    };
    firebase.initializeApp(config);
  }
}
