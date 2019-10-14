import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SchoolShiftService } from '../../../services/school-shift.service';

@Component({
  selector: 'app-new-school-shift',
  templateUrl: './new-school-shift.component.html',
  styleUrls: ['./new-school-shift.component.css']
})
export class NewSchoolShiftComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private schoolShiftService: SchoolShiftService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) { 
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { //console.log(this.templateForm.value);
      this.schoolShiftService.setSchoolShift(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
        // this.templateForm.resetForm();
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
