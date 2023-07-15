import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { mergeMap, of } from 'rxjs';

interface TranslationObject {
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
  private translations = {} as TranslationObject;
  private isLanguageSet = signal(false);
  public isLanguage$ = this.isLanguageSet.asReadonly();

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
          }
          this.isLanguageSet.set(true);
        },
      });
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
  }
}
