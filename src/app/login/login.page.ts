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
    fetch('http://localhost:8080/api/auth/signin',{
      method: 'POST',
      body: JSON.stringify(this.loginData),
      headers: {
        "Content-Type": "application/json",
      }
  })
    .then(response => {
        return response.json();
    })
    .then(data => {
      console.log(data);
      //console.log(data.accessToken);
      //console.log(data.message);
      if(data.accessToken !== undefined ){
        console.log("token : "+data.accessToken);
        localStorage.setItem('token', data.accessToken);
               
        console.log('ok');
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('mail', data.mail);
        this.router.navigateByUrl('/welcome');
        
      }else{
        //this.erreur.message = data.message;
        console.log('erreur');
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
