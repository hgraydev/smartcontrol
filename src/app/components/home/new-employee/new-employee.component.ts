import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeTypeService } from '../../../services/employee-type.service';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  templateForm: FormGroup;
  submitted = false;
  EmployeeTypes: any; 

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private employeeTypeService: EmployeeTypeService,
    private employeeService: EmployeeService
  ) {
    this.createForm();
    this.loadEmployeeType();
   }

  ngOnInit() {
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      rfc: ['', [Validators.required, Validators.minLength(12)]],
      curp: ['', [Validators.required, Validators.minLength(18)]],
      nss: ['', [Validators.required, Validators.minLength(11)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      mlastname: [''],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      cellphone: [''],
      email: ['', [Validators.required]],
      type_id: ['', [Validators.required]]

    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { console.log(this.templateForm.value);
      this.employeeService.setEmployee(this.templateForm.value).subscribe( result => { //console.log(result);
        this.toastrService.success(JSON.stringify(result[0].message));
        this.templateForm.reset();
      }, error => { console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

  loadEmployeeType() {
    this.employeeTypeService.getEmployeeTypes().subscribe( result => { console.log(result);
      this.EmployeeTypes = result;
    })
  }

}
