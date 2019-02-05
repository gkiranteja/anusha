import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberOnlyDirective } from './number.directive';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', Validators.required],
      company:['',[Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirm_password:['',[Validators.required,matchValidator(this.password)]],
      phone_number:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      message:['',[Validators.required,Validators.minLength(6)]]
  }); 
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    // this.submitted = true;
    console.log(this.registerForm);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
}
}
