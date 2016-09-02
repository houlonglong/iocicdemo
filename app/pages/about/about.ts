import {Component,} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
	
import {ContactDetalis} from '../about/contactDetalis';	
@Component({
  templateUrl: 'build/pages/about/about.html'
})


export class AboutPage {
  public contacts;

  static get parameters(){
	 	return [[NavController]]
   }
  constructor(public nav: NavController) {

  	 this.contacts = [{
	   	'id':1,
	   	'img':'http://img0.imgtn.bdimg.com/it/u=912474293,3286185463&fm=21&gp=0.jpg',
	   	'name':'微信',
	   	'phone':'13564898513'
	   },{
	   	'id':2,
	   	'img':'http://img5.imgtn.bdimg.com/it/u=1164794187,2712985580&fm=21&gp=0.jpg',
	   	'name':'支付宝',
	   	'phone':'15618265151'
	   },{
	   	'id':3,
	   	'img':'http://img0.imgtn.bdimg.com/it/u=912474293,3286185463&fm=21&gp=0.jpg',
	   	'name':'微信',
	   	'phone':'13564898513'
	   },{
	   	'id':4,
	   	'img':'http://img0.imgtn.bdimg.com/it/u=912474293,3286185463&fm=21&gp=0.jpg',
	   	'name':'微信',
	   	'phone':'13564898513'
	   }]
  }
   itemClick(event,contacts){

   	this.nav.push(ContactDetalis,{item:contacts})
   		
   		//在点击的时候加载对应详细
   }
}
