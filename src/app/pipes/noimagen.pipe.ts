import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen',
})
export class NoImagenPipe implements PipeTransform {
  transform(linkImage: String): String {
    if (linkImage !== 'N/A') {
      return linkImage;
    }

    return 'assets/img/no-image.svg';
  }
}
