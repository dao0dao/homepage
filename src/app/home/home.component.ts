import { Component, HostBinding } from '@angular/core';
import { LinkPipe } from '../pipes/link.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private linkPipe: LinkPipe) {}
  @HostBinding('style.background-image') backgroundImage =
    'url(' + this.linkPipe.transform('/assets/images/3.png') + ')';
}
