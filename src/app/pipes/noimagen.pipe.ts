import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'noimagen',
})
export class NoImagenPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(linkImage: String): SafeUrl | String {
    if (linkImage !== 'N/A') {
      return this.sanitizer.bypassSecurityTrustUrl(linkImage.toString());
    }

    return 'assets/img/no-image.svg';
  }
}
