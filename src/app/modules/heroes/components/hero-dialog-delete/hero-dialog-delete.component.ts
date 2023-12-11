import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from './../../models/hero';


@Component({
  selector: 'app-hero-dialog-delete',
  templateUrl: './hero-dialog-delete.component.html',
  styleUrls: ['./hero-dialog-delete.component.scss']
})
export class HeroDialogDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HeroDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) { }

  ngOnInit(): void {
  }

}
