import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SyllabusService } from '../../../services/syllabus.service';
import { SubjectService } from '../../../services/subject.service';


@Component({
  selector: 'app-edit-subject-syllabus',
  templateUrl: './edit-subject-syllabus.component.html',
  styleUrls: ['./edit-subject-syllabus.component.css']
})
export class EditSubjectSyllabusComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;
  Syllabus: any;
  Subject: any;
  _subject_id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private syllabusService: SyllabusService,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.createForm();
    this._subject_id = this.activatedRoute.snapshot.params.id;
    this.loadSubjectById(this._subject_id);
   
  }

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
    } else { console.log(this.templateForm.value);
      this.subjectService.updateSubject(this._subject_id, this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

  loadSubjectById(idSubject: any) {
    this.subjectService.getSubjectById(idSubject).subscribe( result => { console.log(result); 
        this.Subject = result;
        this.loadSyllabusAndSubjects(this.Subject.syllabus_id);
        this.setForm();
    })
  }

  loadSyllabusAndSubjects(idSyllabus: any) {
    this.syllabusService.getSubjectsBySyllabus(idSyllabus).subscribe( result => { console.log(result);
      this.Syllabus = result;
    })
  }

  setForm() {
    this.templateForm.controls['syllabus_id'].setValue(this.Subject.syllabus_id);
    this.templateForm.controls['code'].setValue(this.Subject.code);
    this.templateForm.controls['name'].setValue(this.Subject.name); 
    this.templateForm.controls['grade'].setValue(this.Subject.grade); 
    this.templateForm.controls['seriation'].setValue(this.Subject.seriation); 
    this.templateForm.controls['hour_teacher'].setValue(this.Subject.hour_teacher); 
    this.templateForm.controls['hour_independent'].setValue(this.Subject.hour_independent); 
    this.templateForm.controls['credit'].setValue(this.Subject.credit); 
    this.templateForm.controls['instalation'].setValue(this.Subject.instalation); 
  }
}
