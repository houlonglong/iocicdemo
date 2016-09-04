import {Component,ViewEncapsulation} from '@angular/core';
import { ImagePicker } from 'ionic-native';
import {ionicBootstrap,NavController,Loading,Alert,Toast,Modal,ViewController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';
@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {	
	
    public user = {
    	username :'',
    	password:''
    }
  constructor(private navCtrl: NavController,
  			  private ViewController:ViewController
  	) {
  		this.navCtrl = navCtrl;
  		this.ViewController = ViewController
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
  	if(this.user.password == "123456"){
  		
  		localStorage["username"] =this.user.username
  		localStorage["logined"] = true
  		
  		let loading = Loading.create({
	      spinner: 'dots',
	      content: '正在登陆中...',
	      duration: 3000
	    });
	     this.navCtrl.present(loading);
	    setTimeout(()=>{
	    		
			this.ViewController.dismiss()
			loading.dismiss()	

	 },0)

	    
  	}
  	

   
  }
  register(){
      var modal = Modal.create(RegisterPage);	
      this.navCtrl.present(modal);
  }
}