import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SchoolComponent } from './school/school.component';

import { AcademicOfferComponent } from './academic-offer/academic-offer.component';
import { NewAcademicOfferComponent } from './new-academic-offer/new-academic-offer.component';

import { SyllabusComponent } from './syllabus/syllabus.component';
import { NewSyllabusComponent } from './new-syllabus/new-syllabus.component';
import { EditSyllabusComponent } from './edit-syllabus/edit-syllabus.component';
import { SyllabusDetailComponent } from './syllabus-detail/syllabus-detail.component';
import { NewSubjectSyllabusComponent } from './new-subject-syllabus/new-subject-syllabus.component';
import { EditSubjectSyllabusComponent } from './edit-subject-syllabus/edit-subject-syllabus.component';

import { SchoolShiftComponent } from './school-shift/school-shift.component';
import { NewSchoolShiftComponent } from './new-school-shift/new-school-shift.component';
import { EditSchoolShiftComponent } from './edit-school-shift/edit-school-shift.component';

import { SchoolLevelComponent } from './school-level/school-level.component';
import { NewSchoolLevelComponent } from './new-school-level/new-school-level.component';
import { EditSchoolLevelComponent } from './edit-school-level/edit-school-level.component';

import { PeriodComponent } from './period/period.component';
import { PeriodGroupComponent } from './period-group/period-group.component';
import { PeriodScoreComponent } from './period-score/period-score.component';
import { PeriodDetailComponent } from './period-detail/period-detail.component';

import { NewPeriodComponent } from './new-period/new-period.component';
import { NewPeriodGroupComponent } from './new-period-group/new-period-group.component';
import { NewPeriodScoreComponent } from './new-period-score/new-period-score.component';

import { EditPeriodComponent } from './edit-period/edit-period.component';

import { EmployeeComponent } from './employee/employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

import { ScheduleComponent } from './schedule/schedule.component';
import { NewSubjectScheduleComponent } from './new-subject-schedule/new-subject-schedule.component';

// import { NewScheduleComponent } from './new-schedule/new-schedule.component';
// import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';

import { SchoolControlComponent } from './school-control/school-control.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HeaderStudentComponent } from './header-student/header-student.component';


import { ReportComponent } from './report/report.component';

import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], 
    data: {
      allowedRoles: ['admin', 'scontrol', 'acontrol']
    } 
  },
  { path: 'school', component: SchoolComponent },
  { path: 'academic-offer', component: AcademicOfferComponent },
  { path: 'new-academic-offer', component: NewAcademicOfferComponent },
  
  { path: 'school-syllabus', component: SyllabusComponent },
  { path: 'detail-school-syllabus/:id', component: SyllabusDetailComponent },
  { path: 'new-school-syllabus', component: NewSyllabusComponent },
  { path: 'edit-school-syllabus/:id', component: EditSyllabusComponent },
  { path: 'new-subject-syllabus/:id', component: NewSubjectSyllabusComponent },
  { path: 'edit-subject-syllabus/:id', component: EditSubjectSyllabusComponent },
  
  { path: 'school-level', component: SchoolLevelComponent },
  { path: 'new-school-level', component: NewSchoolLevelComponent },
  { path: 'edit-school-level/:id', component: EditSchoolLevelComponent },

  { path: 'school-shift', component: SchoolShiftComponent },
  { path: 'new-school-shift', component: NewSchoolShiftComponent },
  { path: 'edit-school-shift/:id', component: EditSchoolShiftComponent },

  { path: 'period', component: PeriodComponent },
  { path: 'period-group', component: PeriodGroupComponent },
  { path: 'period-score', component: PeriodScoreComponent },

  { path: 'new-period', component: NewPeriodComponent },
  { path: 'new-period-group', component: NewPeriodGroupComponent },
  { path: 'new-period-score', component: NewPeriodScoreComponent },

  { path: 'edit-period/:id', component: EditPeriodComponent },

  { path: 'period-detail', component: PeriodDetailComponent },
  
  { path: 'employee', component: EmployeeComponent },
  { path: 'new-employee', component: NewEmployeeComponent },
  
  { path: 'schedule/:id', component: ScheduleComponent },
  { path: 'new-subject-schedule/:id', component: NewSubjectScheduleComponent },
  // { path: 'new-schedule', component: NewScheduleComponent },
  // { path: 'edit-schedule', component: EditScheduleComponent },

  { path: 'school-control', component: SchoolControlComponent },
  { path: 'new-student', component: NewStudentComponent },

  { path: 'report', component: ReportComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
