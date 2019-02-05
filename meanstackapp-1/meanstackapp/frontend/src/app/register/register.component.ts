import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

myData: string;
response:any;

registerForm:FormGroup = new FormGroup({
  username:new FormControl(null,Validators.required),
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
  cpassword:new FormControl(null,[Validators.required,Validators.minLength(6)])
})
public payload:string;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
  }
  register(){
    console.log("test")
  if(!this.registerForm.valid||this.registerForm.controls.password.value!=this.registerForm.controls.cpassword.value){
    console.log('Invalid Form');return;
     }
     this._userService.register(JSON.stringify(this.registerForm.value))
     
    //  .subscribe(
    //  data => {
    //    console.log("test1");
    //    console.log(data);
    //    this._router.navigate(['/login']);},
    //  error=>console.error(error))

    .subscribe(
       response=>console.log(response)
        );
        
     }






//   public register() {
//     this.payload = JSON.stringify(this.registerForm.value);
}
