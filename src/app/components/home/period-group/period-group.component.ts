import { Component, OnInit } from '@angular/core';
import { GroupService }  from '../../../services/group.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-period-group',
  templateUrl: './period-group.component.html',
  styleUrls: ['./period-group.component.css']
})

export class PeriodGroupComponent implements OnInit {
  Groups: any;

  constructor(
    private groupService: GroupService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.loadGroups();
  }

  loadGroups() {
    this.groupService.getGroups().subscribe( result => { console.log(result);
      this.Groups = result;
    })
  }

  deleteGroup(id: any) {
    this.groupService.deleteGroup(id).subscribe( result => {
      this.toastrService.success(JSON.stringify(result[0].message));
      this.loadGroups();
    })
  }

}
