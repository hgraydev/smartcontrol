import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ScheduleService } from '../../../services/schedule.service';

@Component({
  selector: 'app-score-subject',
  templateUrl: './score-subject.component.html',
  styleUrls: ['./score-subject.component.css']
})
export class ScoreSubjectComponent implements OnInit {
  templateForm: FormGroup;
  submitted = false;
  Offers: any;
  Subjects: any;
  Students: any;
  Filter: any;
  searchFilter;

  constructor(
    private formBuilder: FormBuilder,
    private scheduleService: ScheduleService

  ) { }

  ngOnInit() {
    this.loadOffer();
    this.createForm();
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      offer_id: ['',[Validators.required]],
      subject_id: ['',[Validators.required]]
    });
  }

  loadOffer() {
    this.scheduleService.getOfferByAcademic().subscribe( result => {
      console.log(result)
      this.Offers = result;
    })
  }

  loadSubjects(e) {
    console.log(e.target.value);
    if(e.target.value) {
      this.scheduleService.getSubjectByAcademic(e.target.value).subscribe( result => {
        console.log(result)
        this.Subjects = result;
      })
    } else {
      console.log(e.target.value);
    }
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else {
      this.scheduleService.getStudentsEnrolled(this.templateForm.value).subscribe( result => {
        console.log(result);
        this.Students = result;
      }, error =>{
        console.log(error);
      })
    }
  }
}
