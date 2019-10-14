import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../services/account.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  templateForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private accountService: AccountService
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.templateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]], //add expreg for password
      confirm_password: ['', [Validators.required, Validators.minLength(8)]],
      terms: ['', [Validators.required]]
    });
  }

  get f() { return this.templateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.templateForm.invalid) {
        return;
    } else { //console.log(this.templateForm.value);
      this.accountService.createAccount(this.templateForm.value).subscribe( result=> { console.log(result) 
        this.toastrService.success(JSON.stringify(result[0].message));
      }, error => { //console.log(error)
        this.toastrService.warning(JSON.stringify(error[0].message));
      })
    }    
  }

}
