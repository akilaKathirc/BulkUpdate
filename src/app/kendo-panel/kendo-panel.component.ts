import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PanelBarItemModel } from '@progress/kendo-angular-layout';
// import {} from '../../assets/images/dash.svg'
@Component({
  selector: 'app-kendo-panel',
  templateUrl: './kendo-panel.component.html',
  styleUrls: ['./kendo-panel.component.css']
})
export class KendoPanelComponent implements OnInit {
  @ViewChild('panelbar') private panelbar;
public iconUrl:string = "../../assets/images/bindestrich.png";
public expandedItem = false;
public btnClick=false;
public OpenCreatePickRule()
{
  this.btnClick =true;
  if(this.expandedItem !== true)
  { this.panelbar.stateChange.next([{ expanded: true}]);}
 }

  constructor() {}

  ngOnInit() {}
  
  public onStateChange(e) {
    if(this.btnClick === true)
    {
      this.expandedItem = e.filter(item => item.expanded);
    }
    else
    {
      this.expandedItem = !e.filter(item => item.expanded);
    }
    this.btnClick = false;
  }
}
