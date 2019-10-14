import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  Schedules: any;

  constructor(
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
    this.loadSchedules();
  }

  loadSchedules() {
    this.scheduleService.getSchedules().subscribe( result => {
      console.log(result.offer.schedules)
      this.Schedules = result.offer.schedules;
    })
  }
}
