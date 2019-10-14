import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { PeriodService } from '../../../services/period.service';
import { SchoolService } from '../../../services/school.service';
@Component({
  selector: 'app-new-period',
  templateUrl: './new-period.component.html',
  styleUrls: ['./new-period.component.css']
})
export class NewPeriodComponent implements OnInit {
  templateForm: FormGroup;
  submitted = false;
  School: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private periodService: PeriodService,
    private schoolService: SchoolService
  ) { 
    this.createForm();
    this.schoolService.getSchool().subscribe( result => {
      this.School = result;
      console.log(this.School);
      this.templateForm.controls['school_id'].setValue(this.School['uuid']); 
    })
   }

  ngOnInit() {
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      school_id: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      start: ['', [Validators.required]],
      ends: ['', [Validators.required]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
      this.periodService.setPeriod(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
