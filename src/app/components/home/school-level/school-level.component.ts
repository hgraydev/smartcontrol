import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 
import { LevelService } from '../../../services/level.service';

@Component({
  selector: 'app-school-level',
  templateUrl: './school-level.component.html',
  styleUrls: ['./school-level.component.css']
})
export class SchoolLevelComponent implements OnInit {

  Levels: any;

  constructor(
    private levelService: LevelService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.loadSchoolLevels();
  }

  loadSchoolLevels(){
    this.levelService.getLevel().subscribe( result =>{ console.log( result );
      this.Levels = result;
    })
  }


  deleteSchoolLevel(_id: any){
    this.levelService.deleteLevel(_id).subscribe( result => { console.log( result) 
      this.toastrService.success(JSON.stringify(result[0].message))
      this.loadSchoolLevels();
    })
  }

}
