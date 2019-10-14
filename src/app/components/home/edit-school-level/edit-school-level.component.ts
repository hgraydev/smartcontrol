import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { LevelService} from '../../../services/level.service';

@Component({
  selector: 'app-edit-school-level',
  templateUrl: './edit-school-level.component.html',
  styleUrls: ['./edit-school-level.component.css']
})
export class EditSchoolLevelComponent implements OnInit {
  
  templateForm: FormGroup;
  submitted = false;
  SchoolLevel: any;

  constructor(
    private router: Router,
    private activetedRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private levelService: LevelService

  ) { }

  ngOnInit() {
    this.createForm();
    let _id = this.activetedRouter.snapshot.params.id;
    this.loadSchoolLevel(_id);
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      id: [''],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
      this.levelService.updateLevel(this.SchoolLevel["uuid"],this.templateForm.value).subscribe( result => { console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

  loadSchoolLevel(id: any) {
    this.levelService.getLeveById(id).subscribe( result => { console.log(result);
      this.SchoolLevel = result;
      this.setTemplateForm();
    }, error => { console.log(error); 
      if(error.status===400) {
        this.toastrService.warning(JSON.stringify(error[0].message));
      }
    })
  }

  setTemplateForm() {
    this.templateForm.controls['description'].setValue(this.SchoolLevel['description']); 
  }

}
