import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SyllabusService } from '../../../services/syllabus.service';
import { SubjectService } from '../../../services/subject.service';


@Component({
  selector: 'app-syllabus-detail',
  templateUrl: './syllabus-detail.component.html',
  styleUrls: ['./syllabus-detail.component.css']
})
export class SyllabusDetailComponent implements OnInit {
  
  Syllabus: any;
  id: any;
  _syllabusId: any;

  constructor(
    private syllabusService: SyllabusService,
    private subjectService: SubjectService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {

    this._syllabusId = this.activatedRoute.snapshot.params.id;
    // this.activateRoute.queryParams.subscribe( (params) => {
    //   this.id = params.id;
    //   console.log(this.id);
    //   this.loadSubjects(this.id);
    // })
    this.loadSubjects(this._syllabusId);
  }

  loadSubjects(id){
    this.syllabusService.getSubjectsBySyllabus(id).subscribe( result =>{
      this.Syllabus = result;
      console.log(this.Syllabus)
    })
  }

  deleteSubjectInSyllabus(id: any) {
    this.subjectService.deleteSubject(id).subscribe( result => { console.log(result);
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadSubjects(this._syllabusId);
    })
  }
}
