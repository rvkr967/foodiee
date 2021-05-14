import { Component, OnInit } from '@angular/core';
import { IDeliveryPartner } from '../../Interfaces/DelivaryPartner';
import { FoodieService } from '../foodie.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private _foodService: FoodieService, private router: Router) { }
  delpars: IDeliveryPartner[];

  ngOnInit() {
   // this.getDeliveryProducts();
    // this.login();
    sessionStorage.removeItem('user');
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.minLength(12)]],
      password: ['', [Validators.required]]
    });
  }

  SubmitForm(form: FormGroup) {
    console.log(this.loginForm.value.emailId, this.loginForm.value.password);
    //sessionStorage.setItem('user', this.loginForm.value.emailId);
    console.log(sessionStorage.getItem('user'));
    this._foodService.login(this.loginForm.value.emailId, this.loginForm.value.password).subscribe(
      res => {
        if (res == "success") {
          sessionStorage.setItem('user', this.loginForm.value.emailId);
          this.router.navigate(['/homeNew']);
        }
        else {
          sessionStorage.removeItem('user');
          
        }
        console.log(res);

        
      });
  }




        
        
      
 

  //login() {
  //  this._foodService.login().subscribe(
  //    res => {
  //      console.log(res);
  //    });
  //}

}
