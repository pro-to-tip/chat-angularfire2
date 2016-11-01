import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  rooms: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
  }
}