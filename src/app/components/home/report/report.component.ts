import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StudentService } from '../../../services/student.service'
import { ControlSchoolService } from '../../../services/control-school.service'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  templateForm: FormGroup;
  submitted = false;

  Filters: any;
  Enrolls: any;
  Filter: any;
  searchFilter;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private controlService: ControlSchoolService
  ) { }

  ngOnInit() {
    this.createForm();
    // this.loadOffers();
  }

  // loadOffers() {
  //   this.controlService.getOffers().subscribe( result => {
  //     this.Filters = result;
  //   })
  // }

  createForm() {
    this.templateForm = this.formBuilder.group({
      filter: ['',[Validators.required]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else {
      // this.studentService.getStudents(this.templateForm.value.filter).subscribe( result => {
      //   console.log(result);
      //   this.Enrolls = result;
      // })
      // console.log(this.templateForm.value.filter);
    }
  }

}
