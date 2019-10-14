import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceStudentRoutingModule } from './workspace-student-routing.module';
import { HeaderStudentComponent } from './header-student/header-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    HeaderStudentComponent, 
    HomeStudentComponent, 
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    WorkspaceStudentRoutingModule
  ]
})
export class WorkspaceStudentModule { }
