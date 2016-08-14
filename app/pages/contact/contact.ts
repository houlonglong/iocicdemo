import {Component} from '@angular/core';
import {NavController,Loading} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {	
	
    public user = {
    	username : '',
    	password:''
    }
   

  constructor(private navCtrl: NavController) {
  		this.navCtrl = navCtrl;
  }
  login(){
  		console.log(this.user)
  		let loading = Loading.create({
  			content:'加载中',
  			duration:3000,
  			dismissOnPageChang:true
  		})
  		this.navCtrl.present(loading)
  }
}
