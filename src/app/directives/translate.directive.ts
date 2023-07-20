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
      const innerText = this.el.nativeElement.innerText;
      this.setInitialAttribute(innerText);
      const translation = this.translate(
        this.keys,
        data.lang,
        data.translations
      );
      this.el.nativeElement.innerText = translation;
    });
  }

  private readonly attributeName = 'keys';

  private setInitialAttribute(value: string) {
    const el = this.el.nativeElement;
    if (!el.getAttribute(this.attributeName)) {
      el.setAttribute(this.attributeName, value);
    }
  }

  private get keys() {
    return (
      this.el.nativeElement.getAttribute(this.attributeName) ??
      this.el.nativeElement.innerText
    );
  }

  private translate(
    input: string,
    lang: string,
    translations: TranslationObject
  ) {
    const value = input.trim();
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
