import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TagPipe } from './pipes/tag.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TagPipe,
    HomeComponent,
    AboutComponent,
    TranslatePipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
