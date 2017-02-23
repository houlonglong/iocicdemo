import {Component,ViewEncapsulation} from '@angular/core';
import { Http} from '@angular/http';
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
  			  private http: Http,
  			  private ViewController:ViewController
  	) {
  		this.navCtrl = navCtrl;
  		this.http = http;
  		this.ViewController = ViewController
  }
  login(){
  	if(this.user.username.length == 0){
  	
  		let ToastUserNameError = Toast.create({
  			 message: '您输入用户名不正确',
     		 duration: 1000,
     		 position: 'button',

  		})
  		// let AlertUserNameError =Alert.create({
  		// 	title: '龙龙干姬晴',
		  //   subTitle: '龙龙干姬晴龙龙干姬晴龙龙干姬晴',
		  //   buttons:['爽不爽']
		    
  		// })
  		 this.navCtrl.present(ToastUserNameError)
  		 return;	 
  	}
  	if(this.user.password.length == 0){
  	
  		let ToastUserNameError = Toast.create({
  			 message: '密码不正确',
     		 duration: 1000,
     		 position: 'button',

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
  // 	if(this.user.password == "123456"){
  		
  // 		localStorage["username"] =this.user.username
  // 		localStorage["logined"] = true
  		
  // 		let loading = Loading.create({
	 //      spinner: 'dots',
	 //      content: '正在登陆中...',
	 //      duration: 3000
	 //    });
	 //     this.navCtrl.present(loading);
	 //    setTimeout(()=>{
	    		
		// 	this.ViewController.dismiss(this.user.username)
		// 	loading.dismiss()	

	 // },0)  
  // 	}
  		/*请求API*/
         this.http.get("http://api.gugujiankong.com/account/Login?email=" + this.user.username + "&password=" + this.user.password)			
  		 .subscribe(data=>{
  		 	console.log(data)
  		 	localStorage["username"] =this.user.username
    		localStorage["logined"] = true
    			
    		
    		this.ViewController.dismiss(this.user.username)
    		loading.dismiss()
  		 },error=>{
  		 	 let toast = Toast.create({
                        message: "登录失败！",
                        duration: 2000
                    });
                    this.navCtrl.present(toast);
  		 })

   
  }
  register(){
      var modal = Modal.create(RegisterPage);	
      this.navCtrl.present(modal);
  }
}