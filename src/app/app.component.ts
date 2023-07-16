import { Component, HostBinding, effect } from '@angular/core';
import { LanguageService } from './language.service';
import { CodeLineCounterService } from './code-line-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private language: LanguageService,
    private lineCounter: CodeLineCounterService
  ) {
    effect(() => {
      if (this.language.isLanguage$()) {
        this.isTranslationsReady = true;
      }
    });
    this.language.setTranslations();
  }
  isTranslationsReady: boolean = false;

  ngAfterViewInit() {
    const codeLineDOM = document.querySelectorAll('.codeLine');
    codeLineDOM.forEach((el) => {
      el.setAttribute('line', this.lineCounter.line.toString());
    });
  }

}
