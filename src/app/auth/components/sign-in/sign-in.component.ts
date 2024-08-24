import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){

  }


  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  submitted = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }



  admin = {
    username: 'admin',
    password: 'admin'
  }

  formSubmit(){
    console.log( this.form.value );

    
  }

}
