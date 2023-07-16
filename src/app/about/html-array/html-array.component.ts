import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-html-array',
  templateUrl: './html-array.component.html',
  styleUrls: ['./html-array.component.scss'],
})
export class HtmlArrayComponent {
  @Input() data: string[] = [];
}
