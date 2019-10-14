import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-period',
  templateUrl: './header-period.component.html',
  styleUrls: ['./header-period.component.css']
})
export class HeaderPeriodComponent implements OnInit {
  __periodSegmentFlag: any = false;
  __periodGroupSegmentFlag: any = false;
  __periodScoreSegmentFlag: any = false;
  constructor(
    private router: Router,
    private activetedRouter: ActivatedRoute
  ) { 
    let segment = activetedRouter.snapshot.url[0].path;
    if(segment === 'period') {
        this.__periodSegmentFlag = true;
    }
    if(segment === 'period-group') {
      this.__periodGroupSegmentFlag = true;
    }
    if(segment === 'period-score') {
      this.__periodScoreSegmentFlag = true;
    }
  }

  ngOnInit() {
  }

}
