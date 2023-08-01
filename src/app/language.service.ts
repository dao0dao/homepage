import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject, filter, mergeMap, of } from 'rxjs';

export interface TranslationObject {
  [key: string]: LanguageObject;
}

interface LanguageObject {
  [key: string]: {
    [key: string]: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private http: HttpClient) {}

  private currentLanguage: string = 'en';
  private currentLanguageSignal = signal(this.currentLanguage);

  private translations = {} as TranslationObject;
  public translationsSignal = signal(this.translations);

  private isLanguageSet = signal(false);

  public isLanguage$ = this.isLanguageSet.asReadonly();
  private getCurrentLanguage$ = this.currentLanguageSignal.asReadonly();
  private getTranslations$ = this.translationsSignal.asReadonly();

  public computedSignal = computed(() => ({
    lang: this.getCurrentLanguage$(),
    translations: this.getTranslations$(),
  }));

  getCurrentLang() {
    return this.currentLanguage;
  }

  getTranslations() {
    return this.translations;
  }

  setTranslations() {
    this.http
      .get<LanguageObject>('assets/translations/pl.json')
      .pipe(
        mergeMap((translation) => {
          this.translations['pl'] = translation;
          this.translationsSignal.set(this.translations);
          return this.http.get<{
            [key: string]: {
              [key: string]: string;
            };
          }>('assets/translations/en.json');
        })
      )
      .subscribe({
        next: (translation) => {
          if (this.translations) {
            this.translations['en'] = translation;
            this.translationsSignal.set(this.translations);
          }
          this.isLanguageSet.set(true);
        },
      });
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.currentLanguageSignal.set(lang);
  }
}
