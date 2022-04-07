import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';

import { Platform } from '@ionic/angular';  

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
  ) {   
    this.presentModal();  
    this.initializeApp();  
  }

  initializeApp() {  
    this.platform.ready().then(() => {  
    });  
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
