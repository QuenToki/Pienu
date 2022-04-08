import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData = {
    mail: '',
    password: ''
  };
  recupInfo = {
    mail: '',
    password: ''
  };
  erreur ={
    message:""
  };
  constructor(private router: Router,) { 

  }
  

  login() {
    fetch('https://mockapi.io/projects/624d6073c172b69d6932019d/users',{
      method: 'POST',
      body: JSON.stringify(this.loginData),
      headers: {
        "Content-Type": "application/json",
      }
    }).
    then(response => {
        return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(data.accessToken);
      console.log(data.message);
      if(data.mail !== undefined && data.password !== undefined){
        //console.log("token : "+data.accessToken);
        //localStorage.setItem('token', data.accessToken);
        localStorage.setItem('mail', this.loginData.mail);
        this.router.navigateByUrl('/welcome');
      }else{
        this.erreur.message = data.message;

      }

    });
    
    
    
   /* if(this.loginData.mail === this.recupInfo.mail && this.loginData.password === this.recupInfo.password){
      console.log('ok');
      
      
    }else{
      this.erreur.message = "Erreur d'authentification";
    }*/
  }
  
  ngOnInit(): void {
  }

}
