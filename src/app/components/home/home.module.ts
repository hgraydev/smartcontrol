import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { PeriodComponent } from './period/period.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee/employee.component';
import { SchoolControlComponent } from './school-control/school-control.component';
import { ReportComponent } from './report/report.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { SyllabusDetailComponent } from './syllabus-detail/syllabus-detail.component';
import { PeriodDetailComponent } from './period-detail/period-detail.component';
import { SchoolComponent } from './school/school.component';
import { HeaderSchoolComponent } from './header-school/header-school.component';
import { AcademicOfferComponent } from './academic-offer/academic-offer.component';
import { NewAcademicOfferComponent } from './new-academic-offer/new-academic-offer.component';
import { HeaderPeriodComponent } from './header-period/header-period.component';

import { PeriodGroupComponent } from './period-group/period-group.component';
import { PeriodScoreComponent } from './period-score/period-score.component';

import { SchoolShiftComponent } from './school-shift/school-shift.component';
import { SchoolLevelComponent } from './school-level/school-level.component';
import { NewSchoolShiftComponent } from './new-school-shift/new-school-shift.component';
import { EditSchoolShiftComponent } from './edit-school-shift/edit-school-shift.component';

import { EditSchoolLevelComponent } from './edit-school-level/edit-school-level.component';
import { NewSchoolLevelComponent } from './new-school-level/new-school-level.component';
import { NewSyllabusComponent } from './new-syllabus/new-syllabus.component';
import { EditSyllabusComponent } from './edit-syllabus/edit-syllabus.component';
import { NewSubjectSyllabusComponent } from './new-subject-syllabus/new-subject-syllabus.component';
import { EditSubjectSyllabusComponent } from './edit-subject-syllabus/edit-subject-syllabus.component';

import { EditPeriodComponent } from './edit-period/edit-period.component';

import { NewPeriodComponent } from './new-period/new-period.component';
import { NewPeriodGroupComponent } from './new-period-group/new-period-group.component';
import { NewPeriodScoreComponent } from './new-period-score/new-period-score.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NewScheduleComponent } from './new-schedule/new-schedule.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { NewSubjectScheduleComponent } from './new-subject-schedule/new-subject-schedule.component';

import { NewStudentComponent } from './new-student/new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HeaderStudentComponent } from './header-student/header-student.component';

@NgModule({
  declarations: [
    HomeComponent,
    PeriodComponent,
    HeaderComponent,
    EmployeeComponent,
    SchoolControlComponent,
    ReportComponent,
    SyllabusComponent,
    SyllabusDetailComponent,
    PeriodDetailComponent,
    SchoolComponent,
    HeaderSchoolComponent,
    AcademicOfferComponent,
    NewAcademicOfferComponent,
    HeaderPeriodComponent,
    PeriodGroupComponent,
    PeriodScoreComponent,
    SchoolShiftComponent,
    SchoolLevelComponent,
    NewSchoolShiftComponent,
    EditSchoolShiftComponent,
    EditSchoolLevelComponent,
    NewSchoolLevelComponent,
    NewSyllabusComponent,
    EditSyllabusComponent,
    NewSubjectSyllabusComponent,
    EditSubjectSyllabusComponent,
    NewPeriodComponent,
    EditPeriodComponent,
    NewPeriodGroupComponent,
    NewPeriodScoreComponent,
    NewEmployeeComponent,
    ScheduleComponent,
    NewScheduleComponent,
    EditScheduleComponent,
    NewSubjectScheduleComponent,
    NewStudentComponent,
    EditStudentComponent,
    HeaderStudentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
