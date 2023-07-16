import { Component, Input } from '@angular/core';
import { HtmlObjectData } from 'src/app/interfaces';

@Component({
  selector: 'app-html-object',
  templateUrl: './html-object.component.html',
  styleUrls: ['./html-object.component.scss'],
})
export class HtmlObjectComponent {
  @Input() data: HtmlObjectData[] = [];
}
