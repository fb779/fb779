import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoImagenPipe } from './noimagen.pipe';

const PIPES = [NoImagenPipe];

@NgModule({
  declarations: [PIPES],
  imports: [CommonModule],
  exports: [CommonModule, PIPES],
})
export class PipesModule {}
