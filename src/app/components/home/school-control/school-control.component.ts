import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SchoolService } from '../../../services/school.service';
import { PeriodService } from '../../../services/period.service';
import { OfferService } from '../../../services/offer.service';

import { StudentService } from '../../../services/student.service'
import { ControlSchoolService } from '../../../services/control-school.service'


@Component({
  selector: 'app-school-control',
  templateUrl: './school-control.component.html',
  styleUrls: ['./school-control.component.css']
})
export class SchoolControlComponent implements OnInit {
  templateForm: FormGroup;
  submitted = false;

  Schools: any;
  _school_id: any;
  Periods: any;
  _period_id: any;
  Offers: any;
  _offer_id: any;

  Filters: any;
  Enrolls: any;
  Students: any;
  Filter: any;
  searchFilter;

  constructor(
    private formBuilder: FormBuilder,
    private schoolService: SchoolService,
    private periodService: PeriodService,
    private offerService: OfferService,

    private studentService: StudentService,
    private controlService: ControlSchoolService
  ) { }

  ngOnInit() {
    this.loadSchools();
    this.loadPeriods();
    this.createForm();
    
  }

  loadSchools() {
    this.schoolService.getSchool().subscribe(result => {
      this.Schools = result;
      console.log(result)
    })
  }
  selectSchool(event): void {
    this._school_id = event.target.value;
    this.loadOffers(this._school_id);
  }

  loadPeriods() {
    this.periodService.getPeriods().subscribe( result => {
      this.Periods = result;
    })
  }
  selectPeriod(event): void {
    this._period_id = event.target.value;
    this.loadGroups();
  }

  loadOffers(id: any) {
    this.offerService.getOffersBySchool(id).subscribe( result => {
      this.Offers = result;
      console.log(result)
    })
  }
  selectOffer(event): void {
    this._offer_id = event.target.value;
    console.log(this._offer_id);
    this.loadGroups();
  }

  loadGroups() {
    if(this._school_id == undefined || this._period_id == undefined ||  this._offer_id == undefined) {
      console.log("NOT LOAD GROUPS")
    } else {
      console.log("LOAD GROUPS")
        console.log(this._school_id);
        console.log(this._period_id);
        console.log(this._offer_id);
    }
  }

  // loadOffers(id: any) {
  //   this.controlService.getOffersBySchool(id).subscribe( result => {
  //     this.Filters = result;
  //   })
  // }

  // loadStudents() {
  //   this.studentService.getStudents().subscribe( result => {
  //     this.Students = result;
  //   })
  // }

  createForm() {
    this.templateForm = this.formBuilder.group({
      school_id: ['', [Validators.required]],      
      period_id: ['',[Validators.required]],
      offer_id: ['',[Validators.required]],
      group_id: ['',[Validators.required]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value.filter);
    }
  }

}