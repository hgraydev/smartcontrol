import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { LevelService } from '../../../services/level.service';

@Component({
  selector: 'app-new-school-level',
  templateUrl: './new-school-level.component.html',
  styleUrls: ['./new-school-level.component.css']
})
export class NewSchoolLevelComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private levelService: LevelService
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
      this.levelService.setLevel(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
        // this.templateForm.resetForm();
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
