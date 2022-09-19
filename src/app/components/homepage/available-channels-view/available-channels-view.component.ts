import { Component, OnInit } from '@angular/core';

export interface ChannelDetails {
  name: string;
  description: string;
  imageUrl: string;
  lessonCount: number;
  testCount: number;
  assessmentCount: number;
  subscriberCount: number;
  idChannel: number;
}

/*export const LEVEL_DESCRIPTION_SIZE: number = 150;
*/
 


@Component({
  selector: 'app-available-channels-view',
  templateUrl: './available-channels-view.component.html',
  styleUrls: ['./available-channels-view.component.scss']
})
export class AvailableChannelsViewComponent implements OnInit {

/*  public static shorten(text: string, maxLength: number): string {
    let ret: string = text || "";
    if (ret.length > maxLength) {
      ret = ret.substring(0, maxLength - 3) + "...";
    }
    return ret;
  }
*/
  channels: ChannelDetails[] = [
    {
      name: "IIT JEE",
      description: "Exam Preperation for IIT JEE Mains and Advanced Exams",
      imageUrl: "../../../../assets/images/homepage/b.jee-main.png",
      lessonCount: 111,
      testCount: 12,
      assessmentCount: 122,
      subscriberCount: 7367,
      idChannel: 131,
    },
    {
      name: "BITSAT Exam",
      description: "Exam Preperation for BITSAT Entrance Exam",
      imageUrl: "../../../../assets/images/homepage/b.jee-main.png",
      lessonCount: 111,
      testCount: 12,
      assessmentCount: 122,
      subscriberCount: 2111,
      idChannel: 132,
    },
    {
      name: "Engineering Entrance",
      description: "Exam Preperation for State Level Engineering Entrance Exams - EAMCET",
      imageUrl: "../../../../assets/images/homepage/b.jee-main.png",
      lessonCount: 118,
      testCount: 15,
      assessmentCount: 138,
      subscriberCount: 13912,
      idChannel: 133,
    },
    {
      name: "Medical Entrance",
      description: "Exam Preperation for State Level Medical Entrance Exams - EAMCET",
      imageUrl: "../../../../assets/images/homepage/b.medical.png",
      lessonCount: 113,
      testCount: 10,
      assessmentCount: 102,
      subscriberCount: 8907,
      idChannel: 133,
    },
    {
      name: "Bank Exams",
      description: "Exam Preperation for various Bank Entrance Exams",
      imageUrl: "../../../../assets/images/homepage/b.bank-exam.png",
      lessonCount: 10,
      testCount: 10,
      assessmentCount: 48,
      subscriberCount: 11907,
      idChannel: 111,
    },
    {
      name: "CA-CPT Entrance",
      description: "Exam Preperation for the CA-CPT Entrance Exam",
      imageUrl: "../../../../assets/images/homepage/b.ca-cpt.png",
      lessonCount: 0,
      testCount: 2,
      assessmentCount: 0,
      subscriberCount: 112,
      idChannel: 112,
    },
    {
      name: "CAT Exam",
      description: "Exam Preperation for CAT Entrance Exam",
      imageUrl: "../../../../assets/images/homepage/b.cat.png",
      lessonCount: 0,
      testCount: 2,
      assessmentCount: 0,
      subscriberCount: 196,
      idChannel: 113,
    },
    {
      name: "Foundation",
      description: "Exam Preperation for various High School Proficiency exams",
      imageUrl: "../../../../assets/images/homepage/b.cs-foundation.png",
      lessonCount: 60,
      testCount: 10,
      assessmentCount: 241,
      subscriberCount: 1040,
      idChannel: 104,
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
