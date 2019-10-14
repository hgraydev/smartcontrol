import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { LevelService } from '../../../services/level.service';
import { SchoolShiftService } from '../../../services/school-shift.service';
import { SyllabusService } from  '../../../services/syllabus.service';
import { SchoolService } from  '../../../services/school.service';
import { OfferService } from  '../../../services/offer.service';

@Component({
  selector: 'app-new-academic-offer',
  templateUrl: './new-academic-offer.component.html',
  styleUrls: ['./new-academic-offer.component.css']
})

export class NewAcademicOfferComponent implements OnInit {
  templateForm: FormGroup;
  submitted = false;
  Levels: any;
  Shifts: any;
  Syllabus: any;
  School: any;

  constructor(
    private formBuilder: FormBuilder,
    private levelService: LevelService,
    private shiftService: SchoolShiftService,
    private syllabusService: SyllabusService,
    private schoolService: SchoolService,
    private toastrService: ToastrService,
    private offerService: OfferService
    
  ) {
    this.createForm();
    this.loadSchool();
    this.loadLevels();
    this.loadShifts();
    this.loadSyllabus();
    
   }

  ngOnInit() {
    
  }
 
  get f() { return this.templateForm.controls; }

  createForm() {
    this.templateForm = this.formBuilder.group({
      school_id: ['', [Validators.required]],
      level_id: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      shift_id: ['', [Validators.required]],
      syllabus_id: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
        this.offerService.setOffer(this.templateForm.value).subscribe( result => {
          this.toastrService.success(JSON.stringify(result[0].message));
        }, err => {
          console.log(err);
        })
    }    
  }

  loadSchool() {
    this.schoolService.getSchool().subscribe(result => {
      this.School =  result;
      // this.templateForm.controls['school_id'].setValue(this.School.uuid);
    })
  }

  loadLevels() {
    this.levelService.getLevel().subscribe( result => {
      this.Levels = result;
    })
  }

  loadShifts() {
    this.shiftService.getSchoolShift().subscribe( result => {
      this.Shifts = result;
    }) 
  }

  loadSyllabus() {
    this.syllabusService.getSyllabus().subscribe( result => {
      this.Syllabus = result;
    })
  }

}
