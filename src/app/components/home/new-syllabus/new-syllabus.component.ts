import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SyllabusService } from '../../../services/syllabus.service';

@Component({
  selector: 'app-new-syllabus',
  templateUrl: './new-syllabus.component.html',
  styleUrls: ['./new-syllabus.component.css']
})
export class NewSyllabusComponent implements OnInit {
  
  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private syllabusService: SyllabusService
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      mode: ['', [Validators.required]],
      background: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      measure: ['', [Validators.required]],
      no_measure: ['', [Validators.required]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
      this.syllabusService.setSyllabus(this.templateForm.value).subscribe( result => { console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
        // this.templateForm.resetForm();
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

  

}
