import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ EditprogramPage } from '../../pages/editprogram/editprogram'; 

import{ AddinbodyPage } from '../../pages/addinbody/addinbody'; 

import{ BodyresultPage } from '../../pages/bodyresult/bodyresult'; 
/**
 * Generated class for the TrainerviewclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trainerviewclient',
  templateUrl: 'trainerviewclient.html',
})
export class TrainerviewclientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainerviewclientPage'); 
  }
  programEdit(){
    this.navCtrl.push(EditprogramPage);
  }
  inbodyResult(){
    this.navCtrl.push(AddinbodyPage);
  }
  bodyResult(){
    this.navCtrl.push(BodyresultPage);
  }



}
