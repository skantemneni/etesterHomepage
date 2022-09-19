import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialUIModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackCarouselComponent } from './components/homepage/feedback-carousel/feedback-carousel.component';
import { HichartsComponentComponent } from './components/hicharts-component/hicharts-component.component';
import { TestimonialSliderComponent } from './components/homepage/testimonial-slider/testimonial-slider.component';
import { TextSlideWidgetComponent } from './components/homepage/text-slide-widget/text-slide-widget.component';
import { HomepageViewComponent } from './components/homepage/homepage-view/homepage-view.component';
import { AvailableChannelsViewComponent } from './components/homepage/available-channels-view/available-channels-view.component';
import { AvailableChannelWidgetComponent } from './components/homepage/available-channel-widget/available-channel-widget.component';
import { StepsToRegisterWidgetComponent } from './components/homepage/steps-to-register-widget/steps-to-register-widget.component';
import { CircleStepWidgetComponent } from './components/homepage/circle-step-widget/circle-step-widget.component';
import { AppNavMenuBarFullComponent } from './components/homepage/app-nav-menu-bar-full/app-nav-menu-bar-full.component';
import { DynamicDatabase } from './services/DynamicDatabase';
import { MenuBarComponent } from './components/homepage/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackCarouselComponent,
    HichartsComponentComponent,
    TestimonialSliderComponent,
    TextSlideWidgetComponent,
    HomepageViewComponent,
    AvailableChannelsViewComponent,
    AvailableChannelWidgetComponent,
    StepsToRegisterWidgetComponent,
    CircleStepWidgetComponent,
    AppNavMenuBarFullComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialUIModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [DynamicDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
