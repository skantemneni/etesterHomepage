import { Component, Input, OnInit } from '@angular/core';
import { DynamicDatabase } from '../../../services/DynamicDatabase';

/**
 * Example from "https://indepth.dev/tutorials/angular/angular-material-nested-menu-dynamic-data
 */
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  @Input() isRootNode = false;

  constructor(private database: DynamicDatabase) { }

  ngOnInit(): void {
  }

  isExpandable(node: string): boolean {
    return this.database.isExpandable(node);
  }

  isLoading = false;
  dataLoaded = false;

  getData(node: string) {
    if (!this.dataLoaded) {
      this.isLoading = true;
      this.database.getChildren(node).subscribe((d) => {
        this.data = d?.slice() || [];
        this.isLoading = false;
        this.dataLoaded = true;
      });
    }
  }

}
