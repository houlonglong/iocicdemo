import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/register/register.html'
})
export class RegisterPage {
	// static get parameters(){
	// 	return [[ViewController]]
	// }
  constructor(
      public viewCtrl: ViewController
  ) {
  	//console.log(ViewController)
  	//this.ViewController = ViewController;
  	
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}

