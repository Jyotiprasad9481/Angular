import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    firstName : new FormControl('' , Validators.required),
    lastName : new FormControl('' , Validators.required),
    email : new FormControl('' , [Validators.required, Validators.email])
  });
  onSubmit(){
    console.log(this.registrationForm.value)
  }
  }

