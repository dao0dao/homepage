import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodeLineCounterService {
  private codeLine: number = 0;
  get line() {
    this.codeLine++;
    return this.codeLine;
  }
}
