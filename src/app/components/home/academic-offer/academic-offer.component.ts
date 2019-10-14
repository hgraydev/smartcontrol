import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-academic-offer',
  templateUrl: './academic-offer.component.html',
  styleUrls: ['./academic-offer.component.css']
})
export class AcademicOfferComponent implements OnInit {

  Offers: any;

  constructor(
    private offerService: OfferService,
    private toastrService: ToastrService
  ) { 
    this.loadOffers();
  }

  ngOnInit() {
  }

  loadOffers() {
    this.offerService.getOffers().subscribe( result => { console.log(result);
      this.Offers = result; 
    })
  }

  deleteOffer(id: any) {
    this.offerService.deleteOffer(id).subscribe( result => {
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadOffers();
    })
  }

}
