import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeStudentComponent } from './home-student/home-student.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
  { path: 'workspace-student', component: HomeStudentComponent },
  { path: 'workspace-student/schedule', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceStudentRoutingModule { }
