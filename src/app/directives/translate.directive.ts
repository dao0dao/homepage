import { Directive, ElementRef, computed, effect } from '@angular/core';
import { LanguageService, TranslationObject } from '../language.service';

@Directive({
  selector: '[translate]',
})
export class TranslateDirective {
  constructor(
    private el: ElementRef<HTMLElement>,
    private language: LanguageService
  ) {
    effect(() => {
      const data = this.language.computedSignal();
      this.setKeys(this.el.nativeElement.innerHTML);
      const translation = this.translate(
        this.keys,
        data.lang,
        data.translations
      );
      this.el.nativeElement.innerText = translation;
    });
  }

  private keys: string = '';
  ngOnInit() {
    this.keys = this.el.nativeElement.innerHTML;
  }

  private setKeys(keys: string) {
    if (!this.keys) {
      this.keys = keys;
    }
  }

  private translate(
    inputKeys: string,
    lang: string,
    translations: TranslationObject
  ) {
    const value = inputKeys.trim();
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
