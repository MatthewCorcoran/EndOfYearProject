import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  myFeedback:string = " ";

  constructor(private storage: Storage, private navCtrl: NavController) { }
 
   ngOnInit() {
     this.storage.get("myFeedback")
       .then((data) => {
         this.myFeedback = data;
     })
     .catch();
   }
 
   saveFeedback(){
     console.log(this.myFeedback);
     this.storage.set("myFeedback", this.myFeedback)
     .then(
     () => {
      this.navCtrl.back();
     })
     .catch();
     }
  }
 
