import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-panel-bar',
  templateUrl: './custom-panel-bar.component.html',
  styleUrls: ['./custom-panel-bar.component.css']
})
export class CustomPanelBarComponent implements OnInit {
  @ViewChild('panelbar') private panelbar;
  private baseImageUrl: string = "https://demos.telerik.com/kendo-ui/content/web/panelbar/";
  
  private imageUrl(imageName: string) :string {
      return this.baseImageUrl + imageName + ".jpg";
  }
  
  public expandedItem = 'My Teammates';
  
  public customExpand() {
    this.panelbar.stateChange.next([{title: 'Projects', expanded: true, selected: true}])
  }
  
  public onStateChange(e) {
    this.expandedItem = e.filter(item => item.selected)[0].title;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
