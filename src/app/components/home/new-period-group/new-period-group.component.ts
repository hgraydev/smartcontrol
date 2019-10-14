import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SchoolService } from  '../../../services/school.service';
import { OfferService } from  '../../../services/offer.service';
import { GroupService } from  '../../../services/group.service';
import { PeriodService } from  '../../../services/period.service';

@Component({
  selector: 'app-new-period-group',
  templateUrl: './new-period-group.component.html',
  styleUrls: ['./new-period-group.component.css']
})
export class NewPeriodGroupComponent implements OnInit {
  templateForm: FormGroup;
  submitted = false;
  Schools: any;
  Offers: any;
  Periods: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private schoolService: SchoolService,
    private groupService: GroupService,
    private offerService: OfferService,
    private periodService: PeriodService
  ) { 
    this.createForm();
    this.loadSchool();
    this.loadPeriods();
    this.loadOffers();
    
  }

  ngOnInit() {
  }

  get f() { return this.templateForm.controls; }

  createForm() {
    this.templateForm = this.formBuilder.group({
      school_id: ['', [Validators.required]],
      offer_id: ['', [Validators.required]],
      period_id: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      group: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
        this.groupService.setGroup(this.templateForm.value).subscribe( result => {
          this.toastrService.success(JSON.stringify(result[0].message));
        }, err => {
          console.log(err);
        })
    }
  }

  loadSchool() {
    this.schoolService.getSchool().subscribe(result => { console.log(result);
      this.Schools =  result;
      // this.templateForm.controls['school_id'].setValue(this.School.uuid);
    })
  }

  loadPeriods() {
    this.periodService.getPeriodsByStatus("Active").subscribe( result => { console.log(result);
      this.Periods = result;
    })
  }

  loadOffers() { // se carga las ofertas del unico plantel,, se debe crear un servicio para cada plante bySchoolId
    this.offerService.getOffers().subscribe( result => { console.log(result);
      this.Offers = result;
    })
  }

}
