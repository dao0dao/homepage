import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navHeight = signal(0);
  public navHeight$ = this.navHeight.asReadonly();
  setNavHeight(height: number) {
    this.navHeight.update(() => height);
  }
}
