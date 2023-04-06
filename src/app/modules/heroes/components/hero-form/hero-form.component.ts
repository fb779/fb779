import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { actionList, alignmentList, genderList } from '../../models/data';
import { ActionEmit, Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  heroForm!: FormGroup;

  get actions() {
    return actionList;
  }

  get genders() {
    return genderList;
  }

  get alignments() {
    return alignmentList;
  }

  get hero() {
    return this.data.hero;
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<HeroFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActionEmit
  ) {}

  ngOnInit(): void {}

  private buildForm() {
    this.heroForm = this.fb.group({});
  }
}
