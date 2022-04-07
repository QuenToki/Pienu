import { Component, OnInit } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
  
})

export class CalendrierPage implements OnInit {
  currentDate = new Date();
  currentMonth: string;
  constructor() { }
  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }
  ngOnInit() {
  }

}
