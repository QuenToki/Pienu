import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  monthlyTask = {
    descritpion: '',
    
  };
constructor() {
  fetch('http://localhost:8080/api/monthly',{
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    "x-access-token":  localStorage.getItem('token')
  }
}).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  console.log(data.length);
  for(let i=0; i<data.length; i++){
    console.log(data[i].titre);
    this.monthlyTask.descritpion = data[i].titre;
  }
});
 }

ngOnInit() {
}

}