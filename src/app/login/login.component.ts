import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router:Router) { }
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })
  }

  onLogin(){
    this.http.get<any>('http://localhost:3000/signupusers')
    .subscribe(
      next=>{
        const user=next.find((a:any)=>{
                return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
        });
        if(user){
          alert('Login Success');
          this.loginForm.reset();
          this.router.navigate(['/shopbridge']);
        }
        else{
          alert('User not found')
        }
      },
      err=>{
        alert('Something went wrong');
      }
    )
  }

}
