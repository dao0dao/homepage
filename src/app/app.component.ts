import { Component, HostBinding, effect } from '@angular/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private language: LanguageService) {
    effect(() => {
      if (this.language.isLanguage$()) {
        this.isTranslationsReady = true;
      }
    });
    this.language.setTranslations();
  }
  isTranslationsReady: boolean = false;
}
