import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChannelDetails } from '../available-channels-view/available-channels-view.component';

@Component({
  selector: 'app-available-channel-widget',
  templateUrl: './available-channel-widget.component.html',
  styleUrls: ['./available-channel-widget.component.scss']
})
export class AvailableChannelWidgetComponent implements OnInit {

  @Input() channel?: ChannelDetails = undefined;
  hasFocus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

/*  public onChannelClicked(event: any) {
    console.log(`HomePage.AvailableChannelWidgetComponent.onChannelClicked for Channel: ${this.channel?.idChannel}`);
  }

  private onMouseOver(event: any) {
    this.hasFocus = true;
    console.log(`AvailableChannelWidgetComponent.onMouseOver event: this.hasFocus=${this.hasFocus}`);
  }

  private onMouseOut(event: any) {
    this.hasFocus = false;
    console.log(`AvailableChannelWidgetComponent.onMouseOut event: this.hasFocus=${this.hasFocus}`);
  }
*/

}
