import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() modalOpened: boolean;
  @Input() onFormClosed: Function;
  @Input() onCreateUser: Function;
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }


  ngOnInit() {
  }

  submitForm() {
    if (this.userForm.valid) {
      this.onCreateUser(this.userForm.value);
      this.onFormClosed();
      this.userForm.reset();
    }
  }

  createForm = () => {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        suite: ['', Validators.required],
        city: ['', Validators.required],
      }),
    });
  }


}
