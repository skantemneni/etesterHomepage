import { Component, OnInit } from '@angular/core';
import { DynamicDatabase } from '../../../services/DynamicDatabase';

@Component({
  selector: 'app-homepage-view',
  templateUrl: './homepage-view.component.html',
  styleUrls: ['./homepage-view.component.scss']
})
export class HomepageViewComponent implements OnInit {

  title = "mat-menu-dynamic-data";
  initialData: string[] = [];
  constructor(private database: DynamicDatabase) {
    this.initialData = this.database.rootLevelNodes.slice();
  }

  ngOnInit(): void {
  }

}
