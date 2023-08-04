import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TagPipe } from './pipes/tag.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { HtmlObjectComponent } from './about/html-object/html-object.component';
import { HtmlArrayComponent } from './about/html-array/html-array.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TranslateDirective } from './directives/translate.directive';
import { PortfolioPopUpComponent } from './portfolio/portfolio-pop-up/portfolio-pop-up.component';
import { ContactComponent } from './contact/contact.component';
import { LinkPipe } from './pipes/link.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TagPipe,
    HomeComponent,
    AboutComponent,
    TranslatePipe,
    HtmlObjectComponent,
    HtmlArrayComponent,
    PortfolioComponent,
    TranslateDirective,
    PortfolioPopUpComponent,
    ContactComponent,
    LinkPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [LinkPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
