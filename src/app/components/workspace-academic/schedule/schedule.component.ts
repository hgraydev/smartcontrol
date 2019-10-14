import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../../../services/schedule.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  
  Schedules: any;
  Schedule: [];

  constructor(
    private scheduleService: ScheduleService

  ) { }

  ngOnInit() {
    this.loadAcademicSchedules();
  }

  loadAcademicSchedules() {
    this.scheduleService.getAcademicSchedules().subscribe( result => {
      console.log(result);
      this.Schedules = result;
      // this.orderSchedules(this.Schedules[0].schedules,"LUNES");
    })
  }

  orderSchedules(sche, day) {
    // console.log(sche)
    for( var index = 0; index < sche.length; ++index ) {
      if(sche[index].day === day) {
        return (sche[index].start +" - " + sche[index].end)
      }  
    }
  }
}
