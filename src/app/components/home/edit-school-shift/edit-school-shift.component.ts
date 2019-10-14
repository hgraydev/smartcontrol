import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SchoolShiftService } from '../../../services/school-shift.service';

@Component({
  selector: 'app-edit-school-shift',
  templateUrl: './edit-school-shift.component.html',
  styleUrls: ['./edit-school-shift.component.css']
})

export class EditSchoolShiftComponent implements OnInit {
  
  templateForm: FormGroup;
  submitted = false;
  SchoolShift: any;

  constructor(
    private router: Router,
    private activetedRouter: ActivatedRoute,
    private schoolShiftService: SchoolShiftService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) { 
    this.createForm();
  }

  ngOnInit() {
    let _id = this.activetedRouter.snapshot.params.id;
    
    console.log(_id);

    this.loadSchoolShift(_id);
  }

  loadSchoolShift(id: any) {
    this.schoolShiftService.getSchoolShiftById(id).subscribe( result => {
      this.SchoolShift = result; console.log(this.SchoolShift);
      this.setTemplateForm();
    }, error => { console.log(error);
      if(error.status===400) {
        this.toastrService.warning(JSON.stringify(error[0].message));
      }
    })
  }

  setTemplateForm() {
     this.templateForm.controls['id'].setValue(this.SchoolShift['uuid']);
  }
  
  createForm() {
    this.templateForm = this.formBuilder.group({
      id: [''],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
      this.schoolShiftService.updateSchoolShift(this.SchoolShift["uuid"],this.templateForm.value).subscribe( result => { console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        // this.templateForm.reset();
        // this.templateForm.resetForm();
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }



}
