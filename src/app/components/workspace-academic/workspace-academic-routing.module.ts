import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScoreSubjectComponent } from './score-subject/score-subject.component';

const routes: Routes = [
  { path: 'workspace-academic', component: ScheduleComponent },
  { path: 'workspace-academic/schedule', component: ScheduleComponent },
  { path: 'workspace-academic/score-subject', component: ScoreSubjectComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceAcademicRoutingModule { }
