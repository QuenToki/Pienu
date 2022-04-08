import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;  
  user = {
    mail: '',
    
  };
  constructor(   
    private modalController : ModalController,
    private platform: Platform,
    private router: Router  
  ) {   
    this.presentModal();  
    this.initializeApp();  
    this.user.mail = localStorage.getItem('mail');
  }

   
  deconexion() {
    
     
        localStorage.clear();
        this.router.navigateByUrl('/login');

    
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
