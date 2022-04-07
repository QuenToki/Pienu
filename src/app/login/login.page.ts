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
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ5MzQwNjA5LCJleHAiOjE2NDk0MjcwMDl9.tunJpyyAS6VubhB9YT78j0kZx_QbFFU_dYOpvJSuOgA';

  }
  
  login() {
    fetch('https://pienu.herokuapp.com/api/auth/signin',{
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
      if(data.accessToken !== undefined){
        console.log("token : "+data.accessToken);
        localStorage.setItem('token', data.accessToken);
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
