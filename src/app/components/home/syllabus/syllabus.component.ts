import { Component, OnInit } from '@angular/core';

import { SyllabusService } from '../../../services/syllabus.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  
  SchoolSyllabus: any;

  constructor(
    private syllabusService: SyllabusService
  ) { }

  ngOnInit() {
    this.loadSyllabus();
  }
  
  loadSyllabus(){
    this.syllabusService.getSyllabus().subscribe( result => {
      console.log(result);
      this.SchoolSyllabus = result;
    })
  }
}
