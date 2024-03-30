import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  motdepasse: any;
  email: any;
    
    loginObj: Login;
    aFormGroup: any;
  
    constructor(private http: HttpClient,private router: Router , private formBuilder: FormBuilder) {
      this.loginObj = new Login();
    }
  
    onLogin() {
      debugger;
      this.http.post('https://freeapi.gerasim.in/api/User/Login', this.loginObj).subscribe((res:any)=>{
        if(res.result) {
          alert("Login Success");
          localStorage.setItem('angular17token', res.data.token)
          this.router.navigateByUrl('/dashboard')
        } else {
          alert(res.message)
        }
      })
      
      this.aFormGroup = this.formBuilder.group({
        recaptcha: ['', Validators.required]
      });
    }
    
    siteKey:string="6LemeoIpAAAAABQMxnLdiEuA_A7CP4voPUTsY974";
    
  
    }
  
  
  
  export class Login { 
      email: string;
      motdepasse: string;
      constructor() {
        this.email = '';
        this.motdepasse = '';
      } 
  }