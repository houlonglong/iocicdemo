import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import { Geolocation } from 'ionic-native';
import { LocalNotifications } from 'ionic-native';
@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      StatusBar.styleDefault();
      //获取地理位置
    // Geolocation.getCurrentPosition().then((resp) => {
    //   console.log(  resp.coords.longitude, resp.coords.latitude)
    //   resp.coords.latitude
    //   resp.coords.longitude
    // })
   //获取本地提醒
    LocalNotifications.schedule({
        text: '消息中心',
         at: new Date(new Date().getTime() + 3600),
         led: 'FF0000',
         sound: null
    });


    });
  }
}

ionicBootstrap(MyApp);
