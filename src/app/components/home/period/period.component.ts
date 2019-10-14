import { Component, OnInit } from '@angular/core';

import { PeriodService } from '../../../services/period.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {
  Periods: any;
  searchFilter: any;
  //initializing p to one
  p: number = 1;

  constructor(
    private periodService: PeriodService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.loadPeriods();
  }

  loadPeriods() {
    this.periodService.getPeriods().subscribe( result => {
      console.log(result)
      this.Periods = result;
    })
  }

  disablePeriod(id: any) { console.log(id);
    this.periodService.disablePeriod(id).subscribe( result => {
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadPeriods();
    }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

  enablePeriod(id: any) { console.log(id);
    this.periodService.enablePeriod(id).subscribe( result => {
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadPeriods();
    }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

  deletePeriod(id: any) {
    this.periodService.deletePeriod(id).subscribe( result => {
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadPeriods();
    }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
    })
  }

}
