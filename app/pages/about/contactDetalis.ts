import {Component,} from '@angular/core';
import {NavController,NavParams,ViewController} from 'ionic-angular';
		
@Component({
  templateUrl: 'build/pages/about/ContactDetalis.html'
})
export class ContactDetalis{
	item;
	static get parameters(){
		return [[NavParams],[ViewController]]
	}
	constructor(params: NavParams, public viewCtrl: ViewController) {
    	this.item = params.data.item
    	console.log(this.item)
  }
  dismiss() {

    this.viewCtrl.dismiss();
  }
 
}
