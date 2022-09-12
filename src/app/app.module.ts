import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialUIModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackCarouselComponent } from './components/feedback-carousel/feedback-carousel.component';
import { HichartsComponentComponent } from './components/hicharts-component/hicharts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackCarouselComponent,
    HichartsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialUIModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
