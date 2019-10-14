import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../../services/student.service';
@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      curp: ['', [Validators.required, Validators.minLength(18)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      mlastname: ['', [Validators.required, Validators.minLength(3)]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      cellphone: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
      this.studentService.setStudent(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
