import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
//import {UserPage} from '../user/user';
import {Tabs} from 'ionic-angular';
import {Injectable,ViewChild} from '@angular/core';
@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef:Tabs
  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
    //this.tab4Root = UserPage;
  }
  ionViewDidEnter(){

    // 注意版本 console.log(this.tabRef)
    this.tabRef.select(0)
    
  }
}
