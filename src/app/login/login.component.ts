import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from  '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  contactForm: FormGroup;
  odczyt: any;

  constructor(public dialogRef: MatDialogRef<LoginComponent>, private formBuilder: FormBuilder) { 
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Your form data : ', this.contactForm.value );
    this.odczyt = this.contactForm.value.fullName;
}
  
  closeModal() {
    this.dialogRef.close();
  }

}
