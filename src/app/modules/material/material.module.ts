import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
})
export class MaterialModule {}
