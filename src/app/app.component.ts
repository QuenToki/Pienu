import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';

import { Platform } from '@ionic/angular';  
import { SplashScreen } from '@ionic-native/splash-screen';  
import { StatusBar } from '@ionic-native/status-bar'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;  

  constructor(   
    private modalController : ModalController,
    private platform: Platform,  
    // private splashScreen: typeof SplashScreen,  
    // private statusBar: typeof StatusBar  
  ) {   
    this.presentModal();  
    this.sideMenu();  
    this.initializeApp();  
  }

  initializeApp() {  
    this.platform.ready().then(() => {  
      // this.statusBar.styleDefault();   
      // this.splashScreen.hide();  
    });  
  } 

  sideMenu() {  
    // this.navigate =   
    // [  
    //     { 
    //     title : 'App',
    //     url   : '/apps',
    //     icon  : 'apps' 
    //     },
    //   { 
    //     title : 'Book',  
    //     url   : '/book',  
    //     icon  : 'book'  
    //   },   
    //   {  
    //     title : 'Paint',  
    //     url   : '/paint',  
    //     icon  : 'brush'   
    //   },  
    //   {  
    //     title : 'Contacts',  
    //     url   : '/contacts',  
    //     icon  : 'contacts'  
    //   },   
    //   {
    //       title : 'Facebook',
    //       url   : '/facebook.com',
    //       icon  : 'logo-facebook'
    //   },
    // ]; 
  }  
 
  async presentModal() {
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}


// -----------
