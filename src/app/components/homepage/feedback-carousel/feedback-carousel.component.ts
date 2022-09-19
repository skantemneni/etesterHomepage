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

//  images = [687, 944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    "../../../assets/images/homepage/1_studyprb.png",
    "../../../assets/images/homepage/2_why-etester.png",
    "../../../assets/images/homepage/3_student_review.jpg",
    "../../../assets/images/homepage/4_value-to-user.png",
    "../../../assets/images/homepage/5_avail_courses.jpg"

  ];

}
