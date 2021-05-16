import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  myComment:string = " ";

  constructor(private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
    this.storage.get("myComment")
       .then((data) => {
         this.myComment = data;
     })
     .catch();
  }

  saveComment(){
    console.log(this.myComment);
    this.storage.set("myComment", this.myComment)
    .then(
    () => {
     this.navCtrl.back();
    })
    .catch();
    }
}
