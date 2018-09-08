import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userDoc: any;
  inUserDoc: any;
  item: any;
  test: any;
  constructor(private afs: AngularFirestore) {
    this.userDoc = afs.doc<any>('Demo/Label');
    this.item = this.userDoc.valueChanges();
    this.item.subscribe(res=> {
      console.log(res.name);
      this.test = res.name;

    })
  }
/*
constructor(private fireStore: AngularFirestore) {
  this.userProfileCollection = fireStore.collection<any>('userProfile');
}*/


}
