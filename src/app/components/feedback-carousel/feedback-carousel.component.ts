import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-carousel',
  templateUrl: './feedback-carousel.component.html',
  styleUrls: ['./feedback-carousel.component.scss']
})
export class FeedbackCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [687, 944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
