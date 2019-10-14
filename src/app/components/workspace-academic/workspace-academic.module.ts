import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module




import { WorkspaceAcademicRoutingModule } from './workspace-academic-routing.module';
import { HeaderAcademicComponent } from './header-academic/header-academic.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScoreSubjectComponent } from './score-subject/score-subject.component';

@NgModule({
  declarations: [
    HeaderAcademicComponent, 
    ScheduleComponent, ScoreSubjectComponent
  ],
  imports: [
    CommonModule,
    WorkspaceAcademicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class WorkspaceAcademicModule { }
