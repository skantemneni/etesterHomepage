import { Component, OnInit } from '@angular/core';


export interface Testimonial {
  heading: string;
  salutation: string;
  textlist: string[];
}


@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss']
})
export class TestimonialSliderComponent implements OnInit {

  testimonials: Testimonial[] = [
    {
      heading: "from...  Mumbai",
      salutation: "-Dhara Pandya , Mumbai",
      textlist: ["Dont stress....", "Forget the rest...", "Give eTester test....", "And get the results best..."]
    },
    {
      heading: "from...  Pune, Maharashtra",
      salutation: "-Smruti Shelke, Pune, Maharashtra",
      textlist: ["I am trying ca-cpt this june, as I am also working,I'm not able to study more. I came across this site & am so very thankful for the test series that you have made available. Helps a lot in reviewing my efforts & preparing more better. Thank you. Its a wonderful job you are doing."]
    },
    {
      heading: "from...  Gorakhpur, Uttar Pradesh",
      salutation: "-Abhinav Pandey, Gorakhpur, Uttar Pradesh",
      textlist: ["I am appearing for CS FOUNDATION EXAM IN DECEMBER. I am very thankful to the PREXAM for such excellent test series provided by them.It helps me a lot in the preparation of my subjects"]
    },
    {
      heading: "from...  Adilabad, Telengana",
      salutation: "-Racharla Santosh Kumar, Adilabad, Telengana",
      textlist: ["A wonderful job done by the website for students aspiring to shine in competitive exams.Quite useful to the exam prospects who cannot afford for special & costly coaching.Thanks a lot to the creators & site managers."]
    },
    {
      heading: "from...  Pune, Maharashtra",
      salutation: "-Rahul Sharma, Pune, Maharashtra",
      textlist: [" Simple way to reduce 'examphobia'"]
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
