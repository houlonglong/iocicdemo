import {Component,ViewEncapsulation} from '@angular/core';
import { ImagePicker } from 'ionic-native';
import {ionicBootstrap,NavController,Loading,Alert,Toast,Modal } from 'ionic-angular';
import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';
@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {	
	
    public user = {
    	username :'',
    	password:'',
    	touxiang:'http://img.mukewang.com/user/5405debb00014fd001800180-100-100.jpg'
    }
   

  constructor(private navCtrl: NavController) {
  		this.navCtrl = navCtrl;
  }
  login(){
  	if(this.user.username.length == 0){
  		console.log(Toast,this.user)
  		let ToastUserNameError = Toast.create({
  			 message: '您输入用户名不正确',
     		 duration: 3000,
     		 position: 'middle',

  		})
  		// let AlertUserNameError =Alert.create({
  		// 	title: '龙龙干姬晴',
		  //   subTitle: '龙龙干姬晴龙龙干姬晴龙龙干姬晴',
		  //   buttons:['爽不爽']
		    
  		// })
  		 this.navCtrl.present(ToastUserNameError)
  		  		return;
  	}
  	let loading = Loading.create({
      spinner: 'dots',
      content: '正在登陆中...',
      duration: 3000
    });

    this.navCtrl.present(loading);
  }
  register(){
      var modal = Modal.create(RegisterPage);	
      this.navCtrl.present(modal);
  }
  uploadImage(options){

  	ImagePicker.getPictures(options).then((results) => {
	  for (var i = 0; i < results.length; i++) {
	  		this.user.touxiang =  results[i]
	      console.log('Image URI: ' + results[i]);
	  }
	}, (err) => { });
  	
  }
}