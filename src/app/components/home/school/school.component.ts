import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SchoolService } from '../../../services/school.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  _school: any;
  School: any;
  _existSchool: boolean = false;
  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private schoolService: SchoolService,
    private authService: AuthService
  ) {
    this._school = 'active';
    this.createForm();
    this.loadSchool();
   }

  ngOnInit() {
  }

  loadSchool() {
    this.schoolService.getSchool().subscribe( result => { console.log(result)
      this.School = result;
      console.log(this.School);
      if(this.School) { 
        this._existSchool = true;
        console.log(this._existSchool);
        this.setTemplateForm();
      }
    })
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      director: ['',[Validators.required]],
      phone: [''],
      street: [''],
      colony: [''],
      municipal: [''],
      state: [''],
      postal_code: [''],
      account_id: ['']
    });
    this.setAccountControl();
  }

  setAccountControl() {
    const user = this.authService.getUserLoggedIn();
    this.templateForm.controls['account_id'].setValue(user.user_id);
  }
  
  setTemplateForm() {
    this.templateForm.controls['code'].setValue(this.School['code']);
    this.templateForm.controls['name'].setValue(this.School['name']);
    this.templateForm.controls['director'].setValue(this.School['director']);
    this.templateForm.controls['phone'].setValue(this.School['phone']);
    this.templateForm.controls['street'].setValue(this.School['street']);
    this.templateForm.controls['colony'].setValue(this.School['colony']);
    this.templateForm.controls['municipal'].setValue(this.School['municipal']);
    this.templateForm.controls['state'].setValue(this.School['state']);
    this.templateForm.controls['postal_code'].setValue(this.School['postal_code']);
 }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
      if(this._existSchool) {
        this.schoolService.updateSchool(this.School.uuid, this.templateForm.value).subscribe( result => {
          this.toastrService.success(JSON.stringify(result[0].message));
        })
      } else {
        this.schoolService.setSchool(this.templateForm.value).subscribe( result => { 
          this.toastrService.success(JSON.stringify(result[0].message));
        })
      }
     
    }    
  }

}
