import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from '../testimonial-slider/testimonial-slider.component';

@Component({
  selector: 'app-text-slide-widget',
  templateUrl: './text-slide-widget.component.html',
  styleUrls: ['./text-slide-widget.component.scss']
})
export class TextSlideWidgetComponent implements OnInit {

  @Input() testimonial?: Testimonial = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
