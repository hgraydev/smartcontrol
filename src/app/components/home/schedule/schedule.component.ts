import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { GroupService } from '../../../services/group.service';
import { ScheduleService }  from '../../../services/schedule.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
  _GroupId: any;
  Group: any;
  Schedule: any;
  constructor(
    private activetedRoute: ActivatedRoute,
    private groupService: GroupService,
    private scheduleService: ScheduleService,
    private toastrService: ToastrService
  ) { 
    this._GroupId = this.activetedRoute.snapshot.params.id;
    this.loadGroup(this._GroupId);
    // this.loadScheduleByGroup(this._GroupId);
  }

  ngOnInit() {}

  loadGroup(id: any) {
    this.groupService.getGroupById(id).subscribe( result => { console.log(result);
      this.Group = result;
      // this.loadScheduleByGroup(this.Group.uuid);
      this.scheduleService.getScheduleByGroup(this.Group.uuid).subscribe( res => { console.log("GET SCHeDULE");
        this.Schedule = res; console.log(res);
      })
    })
  }

  // loadScheduleByGroup(id: any) {
  //   console.log("SCHEDULE")
  //   this.scheduleService.getScheduleByGroup(id).subscribe(result=>{
  //     console.log("Scheduling........"); 
  //     console.log(result) 
  //     this.Schedule = result;
  //   })
  // } 
  
  orderSchedules(sche, day) {
    // console.log(sche)
    for( var index = 0; index < sche.length; ++index ) {
      if(sche[index].day === day) {
        return (sche[index].start +"-"+ sche[index].end)
      }  
    }
  }

  deleteSchedule(id: any) { console.log(id);
    this.scheduleService.deleteSchedule(id).subscribe( result => {
      this.toastrService.success(JSON.stringify(result[0].message));
      this.scheduleService.getScheduleByGroup(this.Group.uuid).subscribe( res => { console.log("GET SCHeDULE");
        this.Schedule = res; console.log(res);
      })
    }, error => { //console.log(error)
      this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }
}
