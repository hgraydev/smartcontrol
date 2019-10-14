import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { SchoolShiftService } from '../../../services/school-shift.service';

@Component({
  selector: 'app-school-shift',
  templateUrl: './school-shift.component.html',
  styleUrls: ['./school-shift.component.css']
})
export class SchoolShiftComponent implements OnInit {

  SchoolShifts: any;
  
  constructor(
    private schoolShiftService: SchoolShiftService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.loadShoolShifts();
  }

  loadShoolShifts() {
    this.schoolShiftService.getSchoolShift().subscribe( result => { console.log(result);
      this.SchoolShifts = result;
    })
  }

  deleteSchoolShift(id: any) {
    this.schoolShiftService.deleteSchoolShift(id).subscribe( result => {
      this.toastrService.success(JSON.stringify(result[0].message));
    }, error => {
      this.toastrService.warning(JSON.stringify(error[0].message));
    })
    this.loadShoolShifts();
  }

}
