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
     'touxiang':'../../img/'+localStorage['username']+'.jpg'
  };

    
  constructor(private navCtrl: NavController,
   private ViewController:ViewController) {
  		this.navCtrl = navCtrl
      this.ViewController = ViewController
     
      let username = localStorage['username']
      if(localStorage['logined'] == 'true'){
          this.user.touxiang =  '../../img/'+localStorage['username']+'.jpg'
      }
       let modal = Modal.create(ContactPage)
           modal.onDismiss(data=>{
                this.user.touxiang = '../../img/'+localStorage['username']+'.jpg'
           }) 
           this.navCtrl.present(modal)
  }

 
   loginout(){
    localStorage.clear()
    var modal = Modal.create(ContactPage)
    this.navCtrl.present(modal)
    modal.onDismiss(data=>{
      this.user.touxiang = '../../img/'+ localStorage['username']+'.jpg'
    })  
   

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