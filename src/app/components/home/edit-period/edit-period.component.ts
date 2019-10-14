import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { PeriodService } from '../../../services/period.service';

@Component({
  selector: 'app-edit-period',
  templateUrl: './edit-period.component.html',
  styleUrls: ['./edit-period.component.css']
})
export class EditPeriodComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;
  _idPeriod: any;
  Period: any;

  constructor(
    private activetedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private periodService: PeriodService

  ) {
    this._idPeriod = this.activetedRouter.snapshot.params.id;
    this.createForm();
    this.loadPeriod();
   }

  ngOnInit() {
  }

  loadPeriod() {
    this.periodService.getPeriodById(this._idPeriod).subscribe( result => {
      this.Period = result;
      console.log(this.Period);
      // this.setTemplateForm();
      // this.templateForm.controls['school_id'].setValue(this.Period['school_id']); 
      this.templateForm.controls['description'].setValue(this.Period['description']); 
      this.templateForm.controls['start'].setValue(this.Period['start']); 
      this.templateForm.controls['ends'].setValue(this.Period['ends']); 
    })
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      // school_id: ['', [Validators.required]],
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
      this.periodService.updatePeriod(this.Period.uuid, this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
