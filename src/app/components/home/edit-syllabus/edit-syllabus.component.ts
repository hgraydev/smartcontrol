import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SyllabusService } from '../../../services/syllabus.service';

@Component({
  selector: 'app-edit-syllabus',
  templateUrl: './edit-syllabus.component.html',
  styleUrls: ['./edit-syllabus.component.css']
})
export class EditSyllabusComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;
  SchoolSyllabus: any;

  constructor(
    private activetedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private syllabusService: SyllabusService
  ) { }

  ngOnInit() {
    this.createForm();
    let _id = this.activetedRouter.snapshot.params.id;
    this.loadSchoolSyllabus(_id);
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
      this.syllabusService.updateSyllabus(this.SchoolSyllabus['uuid'],this.templateForm.value).subscribe( result => { console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        // this.templateForm.reset();
        // this.templateForm.resetForm();
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

  loadSchoolSyllabus(id: any) {
    this.syllabusService.getSyllabysById(id).subscribe( result => {
      this.SchoolSyllabus = result;
      this.setTemplateForm();
    }, error => { console.log(error);
      if(error.status===400) {
        this.toastrService.warning(JSON.stringify(error[0].message));
      }
    })
  }

  setTemplateForm() {
    // this.templateForm.controls['id'].setValue(this.SchoolSyllabus['uuid']);
    this.templateForm.controls['code'].setValue(this.SchoolSyllabus['code']); 
    this.templateForm.controls['name'].setValue(this.SchoolSyllabus['name']); 
    this.templateForm.controls['mode'].setValue(this.SchoolSyllabus['mode']); 
    this.templateForm.controls['duration'].setValue(this.SchoolSyllabus['duration']); 
    this.templateForm.controls['measure'].setValue(this.SchoolSyllabus['measure']); 
    this.templateForm.controls['no_measure'].setValue(this.SchoolSyllabus['no_measure']); 
    this.templateForm.controls['background'].setValue(this.SchoolSyllabus['background']);   
  }

}
