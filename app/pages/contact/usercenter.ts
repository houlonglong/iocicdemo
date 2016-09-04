import {Component,ViewEncapsulation} from '@angular/core';
import { ImagePicker } from 'ionic-native';
import {ionicBootstrap,NavController,ViewController,Loading,Alert,Toast,Modal } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ContactPage} from './contact';
@Component({
  templateUrl: 'build/pages/contact/usercenter.html'
})
export class Usercenter {	
	user = {
     'touxiang':'http://img.mukewang.com/user/5405debb00014fd001800180-100-100.jpg'
  };

    
  constructor(private navCtrl: NavController,
   private ViewController:ViewController) {
  		this.navCtrl = navCtrl
      this.ViewController = ViewController
      let logined = localStorage['logined']
      if(logined !== 'true'){
        var modal = Modal.create(ContactPage) 
             this.navCtrl.present(modal)
      }
  }

  uploadImage(options){

  	ImagePicker.getPictures(options).then((results) => {
	  for (var i = 0; i < results.length; i++) {
	  		this.user.touxiang =  results[i]
	      console.log('Image URI: ' + results[i]);
	  }
	}, (err) => { });
  	
  }
   loginout(){
    var modal = Modal.create(ContactPage) 
             this.navCtrl.present(modal)

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