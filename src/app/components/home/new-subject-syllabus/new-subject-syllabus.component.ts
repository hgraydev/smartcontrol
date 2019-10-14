import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

import { SyllabusService } from '../../../services/syllabus.service';
import { SubjectService } from '../../../services/subject.service';

@Component({
  selector: 'app-new-subject-syllabus',
  templateUrl: './new-subject-syllabus.component.html',
  styleUrls: ['./new-subject-syllabus.component.css']
})
export class NewSubjectSyllabusComponent implements OnInit {
  
  templateForm: FormGroup;
  submitted = false;
  Syllabus: any;
  Subjects: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private syllabusService: SyllabusService,
    private subjectService: SubjectService
  ) {
    this.createForm();
    let _id = this.activatedRoute.snapshot.params.id;
    this.syllabusService.getSubjectsBySyllabus(_id).subscribe( result => { console.log(result); 
      this.Syllabus = result;
      console.log(this.Syllabus);
      this.templateForm.controls['syllabus_id'].setValue(this.Syllabus.uuid); 
    })
   }

  ngOnInit() {}

  createForm() {
    this.templateForm = this.formBuilder.group({
      syllabus_id:[''],
      code: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      grade: ['', [Validators.required]],
      seriation: [''],
      hour_teacher: ['', [Validators.required]],
      hour_independent: ['', [Validators.required]],
      credit: ['', [Validators.required]],
      instalation: ['', [Validators.required]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
      return;
    } else { //console.log(this.templateForm.value);
      this.subjectService.setSubject(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

  loadSubjects(idSyllabus: any) {
    this.syllabusService.getSubjectsBySyllabus(idSyllabus).subscribe( result => { console.log(result);
      this.Subjects = result;
    })
  }
  clearForm(){

  }

}
