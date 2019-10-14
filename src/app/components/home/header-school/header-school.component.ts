import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-school',
  templateUrl: './header-school.component.html',
  styleUrls: ['./header-school.component.css']
})
export class HeaderSchoolComponent implements OnInit {
  __schoolSegmentFlag: any = false;
  __offerSegmentFlag: any = false;
  __syllabusSegmentFlag: any = false;
  __levelSegmentFlag: any = false;
  __shiftSegmentFlag: any = false;

  constructor(
    private router: Router,
    private activetedRouter: ActivatedRoute
  ) { 
    let segment = activetedRouter.snapshot.url[0].path;
    if(segment === 'school') {
        this.__schoolSegmentFlag = true;
    }
    if(segment === 'academic-offer') {
      this.__offerSegmentFlag = true;
    }
    if(segment === 'school-syllabus') {
      this.__syllabusSegmentFlag = true;
    }
    if(segment === 'school-level') {
      this.__levelSegmentFlag = true;
    }
    if(segment === 'school-shift') {
      this.__shiftSegmentFlag = true;
    }

  }

  ngOnInit() {
  }

}
