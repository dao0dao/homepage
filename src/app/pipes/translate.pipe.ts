import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../language.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private language: LanguageService) {}
  transform(value: string): string {
    const translations = this.language.getTranslations();
    const lang = this.language.getCurrentLang();
    const keys = value.split('.');
    if (2 !== keys.length) {
      return value;
    }
    if (!Object.keys(translations).length) {
      return value;
    }
    if (!translations[lang]) {
      return value;
    }
    return translations[lang]?.[keys[0]]?.[keys[1]];
  }
}
