import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  sigUpForm!: FormGroup;
  passHide = true;
  maxDate: Date;
  minDate: Date;
  submitCheck: boolean = false;

  constructor(private _fb: FormBuilder) {
    this.maxDate = dayjs().toDate();
    this.minDate = dayjs()
      .set('year', this.maxDate.getFullYear() - 100)
      .toDate();
    console.log(this.maxDate, this.minDate);
  }

  ngOnInit(): void {
    this.sigUpForm = this._fb.group({
      email: this._fb.control(''),
      password: this._fb.control(''),
      birthday: this._fb.control(''),
    });
  }

  get f() {
    return this.sigUpForm.controls;
  }

  get age() {
    return this.f['birthday'].value
      ? dayjs().diff(dayjs(this.f['birthday'].value), 'year')
      : '';
  }

  sigup() {}
}
