import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm! : FormGroup;
  constructor(private formBuilder: FormBuilder,
               private http: HttpClient,
               private router:Router) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      'fullname':['',[Validators.required]],
      'mobile':['',[Validators.required]],
      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required]] 
    })
  }

  onRegister(){
    this.http.post<any>('http://localhost:3000/signupusers',this.registerForm.value)
    .subscribe(
      next=>{
        alert('Successfully registered');
        this.registerForm.reset();
        this.router.navigate(['/login']);
      }
    )
  }

}
